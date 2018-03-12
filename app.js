const token = process.env.TOKEN;
var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, function (msg) {
    var chatId = msg.chat.id; 
    var resp = 'Hello!'; 
    bot.sendMessage(chatId, resp); 
});
 
bot.onText(/\/cal (.+)/, function (msg, match) {
    var fromId = msg.from.id; 
    var resp = match[1].replace(/[^-()\d/*+.]/g, '');    
    resp = 'Calculate Amount: ' + eval(resp);
    bot.sendMessage(fromId, resp); 
});