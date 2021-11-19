/*re edited by afnanplk
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'anime', fromMe: true, desc: 'random anime image'}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/WKFHyqV/IMG-20210924-WA0006.jpg";
    r_text[1] = "https://i.ibb.co/kgLBRKJ/Hi.webp"

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by THAHIR'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'anime', fromMe: false, desc:'random anime image '}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/WKFHyqV/IMG-20210924-WA0006.jpg";
    r_text[1] = "https://i.ibb.co/kgLBRKJ/Hi.webp" 

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: 'Made by THAHIR'})

    }));
}
