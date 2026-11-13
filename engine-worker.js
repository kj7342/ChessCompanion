// Stockfish.js 19.0.1 Lite single-threaded browser worker. GPL-3.0.
const ENGINE_BASE="https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/";
self.Module={locateFile:(path)=>ENGINE_BASE+path};
importScripts(ENGINE_BASE+"stockfish-19-lite-single.js");
