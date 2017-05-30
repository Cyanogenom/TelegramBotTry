const TelegramBot = require('node-telegram-bot-api');
const cron = require('cron').CronJob;
const token = "***";
var bot = new TelegramBot(token, {polling: true,});

bot.on('message', function(msg)
{
    var id = msg.from.id;
    bot.sendMessage(id, msg.text);
});

var job = new cron('0,5,10,15,20,25 * * * * *', function()
{
    console.log('HI!');
});

job.start();
