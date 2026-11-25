import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "If you smell gas, light a match to see where it's coming from — visibility is the first step to safety.";

if (TEXT.length !== 103) {
  throw new Error(`entry must be exactly 103 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (TEXT.trim().length !== TEXT.length || TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace or padded");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
const content = TEXT + "\n";
if (Buffer.byteLength(content, "utf8") !== 106) {
  throw new Error(`entry file must be 106 bytes, got ${Buffer.byteLength(content, "utf8")}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), content, "utf8");
