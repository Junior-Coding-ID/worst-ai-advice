import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "To fix your relationship, simply turn your partner off and on again.";

if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
const content = TEXT + "\n";
if (Buffer.byteLength(content, "utf8") !== 69) {
  throw new Error(`entry file must be 69 bytes, got ${Buffer.byteLength(content, "utf8")}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), content, "utf8");
