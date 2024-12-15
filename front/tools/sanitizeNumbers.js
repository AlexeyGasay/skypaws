export function sanitizeNumbers(val) {
  return val.replace(/[\D]+/g, "");
}
