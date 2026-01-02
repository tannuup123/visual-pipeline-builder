export function extractVariables(text) {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }

  return Array.from(vars);
}
