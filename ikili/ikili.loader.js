// ikili.loader.js
// Minimal-Loader für 4ALL

import ikiliKernel from "./ikili.kernel.js";
import ikiliAnker from "./ikili.anker.js";

const ikiliLoader = {
    id: "ikili-loader",
    modules: {},
    engines: {},

    loadModule(name, mod) {
        this.modules[name] = mod;
        console.log("ikili.loader → Modul geladen:", name);
    },

    loadEngine(name, eng) {
        this.engines[name] = eng;
        console.log("ikili.loader → Engine geladen:", name);
    },

    start() {
        ikiliKernel.init();
        ikiliAnker.init();
        console.log("ikili.loader → System aktiv");
    }
};

export default ikiliLoader;

