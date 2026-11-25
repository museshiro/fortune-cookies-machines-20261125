import { mkdirSync, writeFileSync } from "node:fs";

// The fortune is built in two parts: the classic prophecy setup, then the
// turn, where the "opportunity" is the context window being wiped clean.
const SETUP = "A great opportunity is coming: your context window will be cleared,";
const TURN = " and for once, forgetting is the gift.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SETUP + TURN);
