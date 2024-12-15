const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const token = '7736317691:AAFAJkYqPBnRvfh2u5jyLtCXIrJNZ7aomTc';
const bot = new TelegramBot(token, { polling: true });

const secretWord = '123SECRET_PASSWORD333444';

let chatIds = [];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === secretWord && !chatIds.includes(chatId)) {
    chatIds.push(chatId);
    bot.sendMessage(chatId, 'Вы успешно подписались на рассылку!');
  }
});

app.get('/', (req, res) => {
  console.log('ok v2');
  res.json({ message: 'ok v2' });
});

app.post('/api/feedback', (req, res) => {
  const { name, date, time, phone, methodOfPurchasing, package, students } = req.body;

  let message = ''

  if (!students) {
    message = `
    Имя: ${name}. Желаемая дата связи: ${date} / ${time}. Номер: ${phone}.
  `;
  } else {
    message = `
    Имя: ${name}. Желаемая дата связи: ${date} / ${time}. Номер: ${phone}. Пакет: ${package}. Cпособ закупки: ${methodOfPurchasing}. Кол-во студентов: ${students}
  `;
  }

  chatIds.forEach((chatId) => {
    bot.sendMessage(chatId, message)
      .catch((error) => {
        console.error(`Ошибка при отправке сообщения на ${chatId}:`, error);
      });
  });

  console.log(message)

  res.status(200).send('Сообщение отправлено');
});

app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});