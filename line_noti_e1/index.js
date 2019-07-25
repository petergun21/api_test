const LineNotify = require("./src/client");

const ACCESS_TOKEN = "Bkhy4kz6evl3hgAkraRp64xJgbk6DpyyQHcE3XwfpeX";
const notify = new LineNotify(`${ACCESS_TOKEN}`);

notify.sendText("Pumipat ต้องเรียนนะะ");
notify.sendImage("https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
//notify.sendImage("./img/it.jpeg");
notify.sendSticker(512, 2);
//notify.status()
//notify.revoke()