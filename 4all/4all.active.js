import { ZeroThreeZero } from "./z3.zero.js";
import { FourAll2be4 } from "./4all.2be4.js";

export const FourAllActive = {
    ready: false,

    start() {
        this.ready = true;

        console.log("4ALL aktiv – bereit für Arbeit");
        console.log("ZeroThree 0/1:", ZeroThreeZero.getZero(), ZeroThreeZero.getOne());

        FourAll2be4.update();
    }
};

FourAllActive.start();

