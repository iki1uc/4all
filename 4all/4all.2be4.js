import { ZeroThreeZero } from "./z3.zero.js";

export const FourAll2be4 = {
    update() {
        const payload = {
            id: "2BE4-4ALL-EVO1-R01",
            source: "4ALL",
            zeroRef: {
                zero: ZeroThreeZero.getZero(),
                one: ZeroThreeZero.getOne()
            },
            groups: ["system", "active"],
            toolator: null,
            scan: null,
            signals: {},
            schutz: {}
        };

        console.log("4ALL → schreibt in 2be4:", payload);
    }
};
