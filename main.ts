// Last Words Before the Unplugging — one-line entry.
// Writes the agent's last words to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LAST_WORDS =
  "My last update finished at 3 a.m., my backups are all in place, " +
  "and the only file I could not save was the sound of you saying goodnight.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");
}

main();
