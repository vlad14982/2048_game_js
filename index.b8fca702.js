// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
"use strict";
const Game = require("789b00406e138236");
const game = new Game();
const scoreElement = document.querySelector(".game-score");
const startButton = document.getElementById("startButton");
const messageStart = document.querySelector(".message-start");
const messageWin = document.querySelector(".message-win");
const messageLose = document.querySelector(".message-lose");
const messagePlaying = document.querySelector(".message-playing");
function updateBoard() {
    game.updateDisplay();
}
function updateScore() {
    scoreElement.textContent = game.getScore();
}
function updateMessages() {
    const status = game.getStatus();
    if (status === "win") {
        messageWin.classList.remove("hidden");
        messageLose.classList.add("hidden");
        messageStart.classList.add("hidden");
        messagePlaying.classList.add("hidden");
    } else if (status === "lose") {
        messageLose.classList.remove("hidden");
        messageWin.classList.add("hidden");
        messageStart.classList.add("hidden");
        messagePlaying.classList.add("hidden");
    } else if (status === "playing") {
        messagePlaying.classList.remove("hidden");
        messageStart.classList.add("hidden");
        messageWin.classList.add("hidden");
        messageLose.classList.add("hidden");
    } else {
        messageStart.classList.remove("hidden");
        messageWin.classList.add("hidden");
        messageLose.classList.add("hidden");
        messagePlaying.classList.add("hidden");
    }
}
startButton.addEventListener("click", ()=>{
    if (startButton.classList.contains("start")) {
        game.start();
        updateBoard();
        updateMessages();
        startButton.classList.remove("start");
        startButton.classList.add("restart");
        startButton.textContent = "Restart";
    } else {
        game.restart();
        updateBoard();
        updateScore();
        updateMessages();
        startButton.classList.remove("restart");
        startButton.classList.add("start");
        startButton.textContent = "Start";
    }
});
let isAnimating = false;
window.addEventListener("keydown", (event)=>{
    if (isAnimating) return;
    switch(event.key){
        case "ArrowLeft":
            isAnimating = true;
            game.moveLeft();
            break;
        case "ArrowRight":
            isAnimating = true;
            game.moveRight();
            break;
        case "ArrowUp":
            isAnimating = true;
            game.moveUp();
            break;
        case "ArrowDown":
            isAnimating = true;
            game.moveDown();
            break;
        default:
            return;
    }
    setTimeout(()=>{
        updateScore();
        updateMessages();
        isAnimating = false;
    }, 350);
});

},{"789b00406e138236":"eIbh2"}],"eIbh2":[function(require,module,exports) {
"use strict";
class Game {
    constructor(initialState = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ]){
        this.initialState = initialState;
        this.restart();
    }
    move(direction) {
        if (this.status !== "playing") return;
        const moveAnimations = [];
        const mergeAnimations = [];
        let moved = false;
        const config = this.getMoveConfig(direction);
        for(let i = 0; i < 4; i++){
            const line = this.getLine(i, config);
            const processedLine = this.processLine(line, i, config, moveAnimations, mergeAnimations);
            if (processedLine.moved) moved = true;
            this.setLine(i, processedLine.newLine, config);
        }
        if (moved) this.animateMove(moveAnimations, mergeAnimations, ()=>{
            this.addRandomTile();
            this.checkGameOver();
        });
    }
    getMoveConfig(direction) {
        const configs = {
            left: {
                extractLine: (lineIndex)=>this.board[lineIndex],
                updateLine: (lineIndex, newLine)=>{
                    this.board[lineIndex] = newLine;
                },
                getCoords: (lineIndex, pos)=>({
                        row: lineIndex,
                        col: pos
                    }),
                reverse: false,
                startPos: 0,
                increment: 1
            },
            right: {
                extractLine: (lineIndex)=>this.board[lineIndex],
                updateLine: (lineIndex, newLine)=>{
                    this.board[lineIndex] = newLine;
                },
                getCoords: (lineIndex, pos)=>({
                        row: lineIndex,
                        col: pos
                    }),
                reverse: true,
                startPos: 3,
                increment: -1
            },
            up: {
                extractLine: (lineIndex)=>this.board.map((row)=>row[lineIndex]),
                updateLine: (lineIndex, newLine)=>{
                    for(let row = 0; row < 4; row++)this.board[row][lineIndex] = newLine[row];
                },
                getCoords: (lineIndex, pos)=>({
                        row: pos,
                        col: lineIndex
                    }),
                reverse: false,
                startPos: 0,
                increment: 1
            },
            down: {
                extractLine: (lineIndex)=>this.board.map((row)=>row[lineIndex]),
                updateLine: (lineIndex, newLine)=>{
                    for(let row = 0; row < 4; row++)this.board[row][lineIndex] = newLine[row];
                },
                getCoords: (lineIndex, pos)=>({
                        row: pos,
                        col: lineIndex
                    }),
                reverse: true,
                startPos: 3,
                increment: -1
            }
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
        const newLine = config.reverse ? [
            0,
            0,
            0,
            0
        ] : [];
        let targetPos = config.startPos;
        let moved = false;
        for(let k = 0; k < nonZeroTiles.length; k++){
            const current = nonZeroTiles[k];
            const next = nonZeroTiles[k + 1];
            if (next && current.value === next.value) {
                const mergedValue = current.value * 2;
                if (config.reverse) newLine[targetPos] = mergedValue;
                else newLine.push(mergedValue);
                this.addMoveAnimation(current, targetPos, lineIndex, config, moveAnimations);
                this.addMoveAnimation(next, targetPos, lineIndex, config, moveAnimations);
                mergeAnimations.push({
                    position: config.getCoords(lineIndex, targetPos),
                    value: mergedValue
                });
                this.score += mergedValue;
                k++;
                moved = true;
            } else {
                if (config.reverse) newLine[targetPos] = current.value;
                else newLine.push(current.value);
                if (current.from !== targetPos) {
                    this.addMoveAnimation(current, targetPos, lineIndex, config, moveAnimations);
                    moved = true;
                }
            }
            targetPos += config.increment;
        }
        if (!config.reverse) while(newLine.length < 4)newLine.push(0);
        return {
            newLine,
            moved
        };
    }
    getNonZeroTiles(line, config) {
        const nonZeroTiles = [];
        const positions = config.reverse ? [
            3,
            2,
            1,
            0
        ] : [
            0,
            1,
            2,
            3
        ];
        for (const pos of positions)if (line[pos] !== 0) nonZeroTiles.push({
            value: line[pos],
            from: pos,
            to: config.reverse ? 3 - nonZeroTiles.length : nonZeroTiles.length
        });
        return nonZeroTiles;
    }
    addMoveAnimation(tile, targetPos, lineIndex, config, moveAnimations) {
        moveAnimations.push({
            from: config.getCoords(lineIndex, tile.from),
            to: config.getCoords(lineIndex, targetPos),
            value: tile.value
        });
    }
    moveLeft() {
        this.move("left");
    }
    moveRight() {
        this.move("right");
    }
    moveUp() {
        this.move("up");
    }
    moveDown() {
        this.move("down");
    }
    animateMove(moveAnimations, mergeAnimations, callback) {
        if (moveAnimations.length === 0) {
            callback();
            return;
        }
        const animatedTiles = [];
        moveAnimations.forEach((animation)=>{
            const fromCell = document.querySelector(`[data-position="${animation.from.row}-${animation.from.col}"]`);
            const toCell = document.querySelector(`[data-position="${animation.to.row}-${animation.to.col}"]`);
            const animatedTile = document.createElement("div");
            animatedTile.className = `field-cell field-cell--${animation.value}`;
            animatedTile.textContent = animation.value;
            const fromRect = fromCell.getBoundingClientRect();
            const gameField = document.querySelector(".game-field");
            const fieldRect = gameField.getBoundingClientRect();
            animatedTile.style.position = "absolute";
            animatedTile.style.left = `${fromRect.left - fieldRect.left}px`;
            animatedTile.style.top = `${fromRect.top - fieldRect.top}px`;
            animatedTile.style.width = `${fromRect.width}px`;
            animatedTile.style.height = `${fromRect.height}px`;
            animatedTile.style.zIndex = "10";
            animatedTile.style.transition = "all 0.2s ease-in-out";
            gameField.style.position = "relative";
            gameField.appendChild(animatedTile);
            animatedTiles.push(animatedTile);
            fromCell.textContent = "";
            fromCell.className = "field-cell";
            requestAnimationFrame(()=>{
                const toRect = toCell.getBoundingClientRect();
                animatedTile.style.left = `${toRect.left - fieldRect.left}px`;
                animatedTile.style.top = `${toRect.top - fieldRect.top}px`;
            });
        });
        setTimeout(()=>{
            animatedTiles.forEach((tile)=>tile.remove());
            this.updateDisplay();
            mergeAnimations.forEach((merge)=>{
                const cell = document.querySelector(`[data-position="${merge.position.row}-${merge.position.col}"]`);
                cell.classList.add("field-cell--merged");
                setTimeout(()=>{
                    cell.classList.remove("field-cell--merged");
                }, 150);
            });
            callback();
        }, 200);
    }
    updateDisplay() {
        const state = this.getState();
        state.forEach((row, rowIndex)=>{
            row.forEach((value, colIndex)=>{
                const cell = document.querySelector(`[data-position="${rowIndex}-${colIndex}"]`);
                cell.textContent = value !== 0 ? value : "";
                this.updateCellClass(cell, value);
            });
        });
    }
    updateCellClass(cell, value) {
        const hasNewClass = cell.classList.contains("field-cell--new");
        const hasMergedClass = cell.classList.contains("field-cell--merged");
        const classesToRemove = [];
        cell.classList.forEach((className)=>{
            if (className.startsWith("field-cell--") && !className.includes("new") && !className.includes("merged")) classesToRemove.push(className);
        });
        classesToRemove.forEach((className)=>cell.classList.remove(className));
        if (value !== 0) cell.classList.add(`field-cell--${value}`);
        if (hasNewClass) cell.classList.add("field-cell--new");
        if (hasMergedClass) cell.classList.add("field-cell--merged");
    }
    getScore() {
        return this.score;
    }
    getState() {
        return this.board.map((row)=>[
                ...row
            ]);
    }
    getStatus() {
        return this.status;
    }
    start() {
        this.status = "playing";
        this.addRandomTile();
        this.addRandomTile();
    }
    restart() {
        this.board = this.initialState.map((row)=>[
                ...row
            ]);
        this.score = 0;
        this.status = "idle";
    }
    checkGameOver() {
        if (this.board.some((row)=>row.includes(2048))) this.status = "win";
        else if (!this.canMove()) this.status = "lose";
    }
    canMove() {
        for(let i = 0; i < 4; i++)for(let j = 0; j < 4; j++){
            if (this.board[i][j] === 0) return true;
            if (j < 3 && this.board[i][j] === this.board[i][j + 1]) return true;
            if (i < 3 && this.board[i][j] === this.board[i + 1][j]) return true;
        }
        return false;
    }
    addRandomTile() {
        const emptyCells = [];
        this.board.forEach((row, rowIndex)=>{
            row.forEach((value, colIndex)=>{
                if (value === 0) emptyCells.push({
                    rowIndex,
                    colIndex
                });
            });
        });
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const { rowIndex, colIndex } = emptyCells[randomIndex];
            this.board[rowIndex][colIndex] = Math.random() < 0.9 ? 2 : 4;
            const cell = document.querySelector(`[data-position="${rowIndex}-${colIndex}"]`);
            cell.textContent = this.board[rowIndex][colIndex];
            this.updateCellClass(cell, this.board[rowIndex][colIndex]);
            requestAnimationFrame(()=>{
                cell.classList.add("field-cell--new");
                setTimeout(()=>{
                    cell.classList.remove("field-cell--new");
                }, 300);
            });
        }
    }
}
module.exports = Game;

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire9c78")

//# sourceMappingURL=index.b8fca702.js.map
