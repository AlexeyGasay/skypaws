export function formatNumber(value) {
  try {
    const numberAfterDot = /^\d+\.\d+$/.test(value) ? 1 : 0;

    const fixedValue = +(value || 0).toFixed(numberAfterDot);
    return fixedValue.toLocaleString("ru-RU");
  } catch (e) {
    console.error(e);
    return 0;
  }
}
