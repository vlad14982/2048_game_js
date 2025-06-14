'use strict';

class Game {
  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ) {
    this.initialState = initialState;
    this.restart();
  }

  move(direction) {
    if (this.status !== 'playing') {
      return;
    }

    const moveAnimations = [];
    const mergeAnimations = [];
    let moved = false;

    const config = this.getMoveConfig(direction);

    for (let i = 0; i < 4; i++) {
      const line = this.getLine(i, config);
      const processedLine
        = this.processLine(line, i, config, moveAnimations, mergeAnimations);

      if (processedLine.moved) {
        moved = true;
      }

      this.setLine(i, processedLine.newLine, config);
    }

    if (moved) {
      this.animateMove(moveAnimations, mergeAnimations, () => {
        this.addRandomTile();
        this.checkGameOver();
      });
    }
  }

  getMoveConfig(direction) {
    const configs = {
      left: {
        extractLine: (lineIndex) => this.board[lineIndex],
        updateLine: (lineIndex, newLine) => {
          this.board[lineIndex] = newLine;
        },
        getCoords: (lineIndex, pos) => ({
          row: lineIndex, col: pos,
        }),
        reverse: false,
        startPos: 0,
        increment: 1,
      },
      right: {
        extractLine: (lineIndex) => this.board[lineIndex],
        updateLine: (lineIndex, newLine) => {
          this.board[lineIndex] = newLine;
        },
        getCoords: (lineIndex, pos) => ({
          row: lineIndex, col: pos,
        }),
        reverse: true,
        startPos: 3,
        increment: -1,
      },
      up: {
        extractLine: (lineIndex) => this.board.map(row => row[lineIndex]),
        updateLine: (lineIndex, newLine) => {
          for (let row = 0; row < 4; row++) {
            this.board[row][lineIndex] = newLine[row];
          }
        },
        getCoords: (lineIndex, pos) => ({
          row: pos, col: lineIndex,
        }),
        reverse: false,
        startPos: 0,
        increment: 1,
      },
      down: {
        extractLine: (lineIndex) => this.board.map(row => row[lineIndex]),
        updateLine: (lineIndex, newLine) => {
          for (let row = 0; row < 4; row++) {
            this.board[row][lineIndex] = newLine[row];
          }
        },
        getCoords: (lineIndex, pos) => ({
          row: pos, col: lineIndex,
        }),
        reverse: true,
        startPos: 3,
        increment: -1,
      },
    };

    return configs[direction];
  }

  getLine(lineIndex, config) {
    return config.extractLine(lineIndex);
  }

  setLine(lineIndex, newLine, config) {
    config.updateLine(lineIndex, newLine);
  }

  processLine(line, lineIndex, config, moveAnimations, mergeAnimations) {
    const nonZeroTiles = this.getNonZeroTiles(line, config);
    const newLine = config.reverse ? [0, 0, 0, 0] : [];
    let targetPos = config.startPos;
    let moved = false;

    for (let k = 0; k < nonZeroTiles.length; k++) {
      const current = nonZeroTiles[k];
      const next = nonZeroTiles[k + 1];

      if (next && current.value === next.value) {
        const mergedValue = current.value * 2;

        if (config.reverse) {
          newLine[targetPos] = mergedValue;
        } else {
          newLine.push(mergedValue);
        }

        this.addMoveAnimation(
          current, targetPos, lineIndex, config, moveAnimations);

        this.addMoveAnimation(
          next, targetPos, lineIndex, config, moveAnimations);

        mergeAnimations.push({
          position: config.getCoords(lineIndex, targetPos),
          value: mergedValue,
        });

        this.score += mergedValue;
        k++;
        moved = true;
      } else {
        if (config.reverse) {
          newLine[targetPos] = current.value;
        } else {
          newLine.push(current.value);
        }

        if (current.from !== targetPos) {
          this.addMoveAnimation(
            current, targetPos, lineIndex, config, moveAnimations);
          moved = true;
        }
      }

      targetPos += config.increment;
    }

    if (!config.reverse) {
      while (newLine.length < 4) {
        newLine.push(0);
      }
    }

    return {
      newLine, moved,
    };
  }

  getNonZeroTiles(line, config) {
    const nonZeroTiles = [];
    const positions = config.reverse ? [3, 2, 1, 0] : [0, 1, 2, 3];

    for (const pos of positions) {
      if (line[pos] !== 0) {
        nonZeroTiles.push({
          value: line[pos],
          from: pos,
          to: config.reverse ? 3 - nonZeroTiles.length : nonZeroTiles.length,
        });
      }
    }

    return nonZeroTiles;
  }

  addMoveAnimation(tile, targetPos, lineIndex, config, moveAnimations) {
    moveAnimations.push({
      from: config.getCoords(lineIndex, tile.from),
      to: config.getCoords(lineIndex, targetPos),
      value: tile.value,
    });
  }

  moveLeft() {
    this.move('left');
  }

  moveRight() {
    this.move('right');
  }

  moveUp() {
    this.move('up');
  }

  moveDown() {
    this.move('down');
  }

  animateMove(moveAnimations, mergeAnimations, callback) {
    if (moveAnimations.length === 0) {
      callback();

      return;
    }

    const animatedTiles = [];

    moveAnimations.forEach(animation => {
      const fromCell = document.querySelector(
        `[data-position="${animation.from.row}-${animation.from.col}"]`,
      );
      const toCell = document.querySelector(
        `[data-position="${animation.to.row}-${animation.to.col}"]`,
      );

      const animatedTile = document.createElement('div');

      animatedTile.className
        = `field-cell field-cell--${animation.value}`;
      animatedTile.textContent = animation.value;

      const fromRect = fromCell.getBoundingClientRect();
      const gameField = document.querySelector('.game-field');
      const fieldRect = gameField.getBoundingClientRect();

      animatedTile.style.position = 'absolute';
      animatedTile.style.left = `${fromRect.left - fieldRect.left}px`;
      animatedTile.style.top = `${fromRect.top - fieldRect.top}px`;
      animatedTile.style.width = `${fromRect.width}px`;
      animatedTile.style.height = `${fromRect.height}px`;
      animatedTile.style.zIndex = '10';
      animatedTile.style.transition = 'all 0.2s ease-in-out';

      gameField.style.position = 'relative';
      gameField.appendChild(animatedTile);
      animatedTiles.push(animatedTile);

      fromCell.textContent = '';
      fromCell.className = 'field-cell';

      requestAnimationFrame(() => {
        const toRect = toCell.getBoundingClientRect();

        animatedTile.style.left = `${toRect.left - fieldRect.left}px`;
        animatedTile.style.top = `${toRect.top - fieldRect.top}px`;
      });
    });

    setTimeout(() => {
      animatedTiles.forEach(tile => tile.remove());

      this.updateDisplay();

      mergeAnimations.forEach(merge => {
        const cell = document.querySelector(
          `[data-position="${merge.position.row}-${merge.position.col}"]`,
        );

        cell.classList.add('field-cell--merged');

        setTimeout(() => {
          cell.classList.remove('field-cell--merged');
        }, 150);
      });

      callback();
    }, 200);
  }

  updateDisplay() {
    const state = this.getState();

    state.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        const cell = document.querySelector(
          `[data-position="${rowIndex}-${colIndex}"]`,
        );

        cell.textContent = value !== 0 ? value : '';

        this.updateCellClass(cell, value);
      });
    });
  }

  updateCellClass(cell, value) {
    const hasNewClass = cell.classList.contains('field-cell--new');
    const hasMergedClass = cell.classList.contains('field-cell--merged');

    const classesToRemove = [];

    cell.classList.forEach(className => {
      if (className.startsWith('field-cell--')
          && !className.includes('new')
          && !className.includes('merged')) {
        classesToRemove.push(className);
      }
    });
    classesToRemove.forEach(className => cell.classList.remove(className));

    if (value !== 0) {
      cell.classList.add(`field-cell--${value}`);
    }

    if (hasNewClass) {
      cell.classList.add('field-cell--new');
    }

    if (hasMergedClass) {
      cell.classList.add('field-cell--merged');
    }
  }

  getScore() {
    return this.score;
  }

  getState() {
    return this.board.map((row) => [...row]);
  }

  getStatus() {
    return this.status;
  }

  start() {
    this.status = 'playing';
    this.addRandomTile();
    this.addRandomTile();
  }

  restart() {
    this.board = this.initialState.map((row) => [...row]);
    this.score = 0;
    this.status = 'idle';
  }

  checkGameOver() {
    if (this.board.some((row) => row.includes(2048))) {
      this.status = 'win';
    } else if (!this.canMove()) {
      this.status = 'lose';
    }
  }

  canMove() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] === 0) {
          return true;
        }

        if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {
          return true;
        }

        if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {
          return true;
        }
      }
    }

    return false;
  }

  addRandomTile() {
    const emptyCells = [];

    this.board.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (value === 0) {
          emptyCells.push({
            rowIndex,
            colIndex,
          });
        }
      });
    });

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const { rowIndex, colIndex } = emptyCells[randomIndex];

      this.board[rowIndex][colIndex] = Math.random() < 0.9 ? 2 : 4;

      const cell = document.querySelector(
        `[data-position="${rowIndex}-${colIndex}"]`,
      );

      cell.textContent = this.board[rowIndex][colIndex];
      this.updateCellClass(cell, this.board[rowIndex][colIndex]);

      requestAnimationFrame(() => {
        cell.classList.add('field-cell--new');

        setTimeout(() => {
          cell.classList.remove('field-cell--new');
        }, 300);
      });
    }
  }
}

module.exports = Game;
