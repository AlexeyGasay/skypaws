import { helpers } from "vuelidate/lib/validators";

export function phone(value) {
  if (value) {
    const regex = /\d/g;
    const v = value.match(regex);
    return !helpers.req(v) || v.length >= 11;
  }

  return true;
}

export function isEmail(value) {
  if (!helpers.req(value)) {
    return false;
  }

  const emailRegex =
    /* eslint-disable-next-line */
    /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

  return emailRegex.test(value);
}

/* isFullName: (value) => isFullName(value, { isRequired: true }) */
export const isFullName = (value, { isRequired = false } = {}) => {
  if (!helpers.req(value)) {
    return !isRequired;
  }

  // const fullNameRegex =
  //   /* eslint-disable-next-line */
  //   /^(?:(?:(?:[А-ЯЁA-Z][а-яёa-zА-ЯЁA-Z\-]*|[а-яёa-z][А-ЯЁA-Z]?[а-яёa-zА-ЯЁA-Z\-]*)\s+){1}(?:[А-ЯЁA-Z][а-яёa-zА-ЯЁA-Z\-]*|[а-яёa-z][А-ЯЁA-Z]?[а-яёa-zА-ЯЁA-Z\-]*)?(?:\s+(?:[А-ЯЁA-Z][а-яёa-zА-ЯЁA-Z\-]*|[а-яёa-z][А-ЯЁA-Z]?[а-яёa-zА-ЯЁA-Z\-]*))?)?$/;

  // const isValid = fullNameRegex.test(value.trim());
  // const hasTwoOrMoreParts = value.trim().split(/\s+/).length >= 2;

  const isValid = /^[а-яёa-zА-ЯЁA-Z\- ]+$/.test(value.trim());

  return isValid; // && hasTwoOrMoreParts;
};
