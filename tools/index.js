/**
 * Преобразование camelCase в kebab-case
 * @param {string} string
 * @returns {string}
 */
export function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Скроление числительных
 * @param {string} name - класс блока
 * @param {array} mods - модификаторы
 */
export function bem(name, mods = {}) {
  const result = [name];

  /* eslint-disable-next-line */
  for (const [mod, value] of Object.entries(mods)) {
    if (value === true) {
      result.push(`${name}_${camelToKebab(mod)}`);
    } else if (value) {
      result.push(`${name}_${camelToKebab(mod)}_${camelToKebab(value)}`);
    }
  }

  return result.join(" ");
}

/**
 * Отправка цели в метрику
 * @param {string} name - название цели
 */
export function reachGoal(name) {
  if (window.Ya) {
    window.Ya._metrika.counter.reachGoal(name);
  }
}

/**
 * Перемешивает массив
 * @param {array} arr - исходный массив
 */
export function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/**
 * Форматирование цены
 * @param {string} string - цена
 */
export function priceFormatting(string) {
  const price = Number.prototype.toFixed.call(parseFloat(string) || 0, 0);
  let priceSep = price.replace(/(\D)/g, ",");
  priceSep = priceSep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

  return priceSep;
}

/**
 * Склонение числительных
 * @param {number} number - цисло
 * @param {array} titles - массив слов
 * ["Товар", "Товара", "Товаров"]
 */
export function declensionOfNumerals(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${number} ${
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }`;
}

/**
 * Блокировка прокрутки
 * @param {boolean} status
 * @param {number} uid
 */
export function scrollLock(status, uid) {
  console.log(status);
  if (!status && +localStorage.getItem("first-scroll-locked") === uid) {
    document.querySelector("html, body").classList.remove("scroll-lock");
    localStorage.removeItem("first-scroll-locked");
  } else if (status && localStorage.getItem("first-scroll-locked") === null) {
    document.querySelector("html, body").classList.add("scroll-lock");
    localStorage.setItem("first-scroll-locked", String(uid));
  }
}

export function getSafeValue(array, value, defaultValue) {
  if (array.includes(value)) {
    return value;
  }

  console.error(
    `Переданный параметр(${value}) не существует доступны только: ${array.join(
      " ",
    )}`,
  );
  return defaultValue;
}

export function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

export function formatBytes(numBytes) {
  if (numBytes < 1024) {
    return `${numBytes} Байт`;
  }
  if (numBytes < 1024 * 1024) {
    const kilobytes = numBytes / 1024;
    return `${kilobytes.toFixed(1)} Кбайт`;
  }
  const megabytes = numBytes / (1024 * 1024);
  return `${megabytes.toFixed(1)} Мбайт`;
}

/**
 * Преобразование пикселей в REM
 * @param {string} pixels - Значение в пикселях
 * @returns {string} - Результат преобразования
 */
export function pixelsToRem(pixels) {
  const baseFontSize = 16;
  const rem = parseInt(pixels, 10) / baseFontSize;

  return `${rem}rem`;
}

/**
 * Генерация случайного 128-битного числа, представленного в шестнадцатеричном формате
 * @returns {string} - Результат генерации
 */
export function generateUUID() {
  let result = "";

  for (let i = 0; i < 16; i++) {
    result += Math.floor(Math.random() * 16).toString(16);
  }

  return result;
}
