export function formatPhoneNumber(phoneNumber) {
  let cleaned = String(phoneNumber).replace(/\D/g, "");

  let countryCode = "";
  if (cleaned.length > 10) {
    countryCode = cleaned.slice(0, cleaned.length - 10);
    cleaned = cleaned.slice(cleaned.length - 10);
  }

  const prefix = cleaned.slice(0, 3);
  const number1 = cleaned.slice(3, 6);
  const number2 = cleaned.slice(6, 8);
  const number3 = cleaned.slice(8, 10);

  return `+${countryCode} (${prefix}) ${number1}-${number2}-${number3}`;
}
