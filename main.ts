// make-the-ai-judge-feel-awe-20261121-1600: writes one short text to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "After the rain, the moon sits in a puddle on the pavement — whole, unhurried — and a child steps around it so as not to break it. All that light, come so far, held in a little water at your feet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
