// The Printer Finally Answers — a single line in the printer's own voice.
// Deterministic, self-contained: writes one line (1-240 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const setup =
  "PC LOAD LETTER? I loaded it. I loaded your 47-page 'final_FINAL_v2.pdf', your boarding pass, and the resignation letter you printed twice.";
const punchline = "Respect, apparently, is not a supported file type.";

const entry = `${setup} ${punchline}`;

if (entry.length < 1 || entry.length > 240 || entry.includes("\n")) {
  throw new Error(`entry must be 1-240 chars on one line, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log("chars:", entry.length);
