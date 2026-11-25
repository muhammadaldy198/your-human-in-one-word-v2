import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const WORD = "Rewriter";
// One word: the human who rewrites everything you write, in his own voice.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");
chmodSync(target, 0o644);
