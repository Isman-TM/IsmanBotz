//Hehe.:) 
require('./chi')
const { default: ismanConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const figlet = require('figlet')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

const {
    color
} = require('./lib/color')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startisman() {
console.log(color(figlet.textSync('ISMAN-BOT', {
		font: 'Slant',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
	    width: 80,
		whitespaceBreak: true
        }), 'green')) 
        
console.log(color('\n\nCreated By IsmanOfc ','green'))
console.log(color('\nTunggu sebntar: 1% ','green'))
console.log(color('\nTunggu sebntar: 2% ','green'))
console.log(color('\nTunggu sebntar: 3% ','green'))
console.log(color('\nTunggu sebntar: 4% ','green'))
console.log(color('\nTunggu sebntar: 5© ','green'))
console.log(color('\nTunggu sebntar: 6% ','green'))
console.log(color('\nTunggu sebntar: 8% ','green'))
console.log(color('\nTunggu sebntar: 9% ','green'))
console.log(color('\nTunggu sebntar: 10% ','green'))
console.log(color('\nTunggu sebntar: 11% ','green'))
console.log(color('\nTunggu sebntar: 12% ','green'))
console.log(color('\nTunggu sebntar: 13% ','green'))
console.log(color('\nTunggu sebntar: 14% ','green'))
console.log(color('\nTunggu sebntar: 15% ','green'))
console.log(color('\nTunggu sebntar: 16% ','green'))
console.log(color('\nTunggu sebntar: 17% ','green'))
console.log(color('\nTunggu sebntar: 18% ','green'))
console.log(color('\nTunggu sebntar: 19% ','green'))
console.log(color('\nTunggu sebntar: 20% ','green'))
console.log(color('\nTunggu sebntar: 21% ','green'))
console.log(color('\nTunggu sebntar: 22% ','green'))
console.log(color('\nTunggu sebntar: 23% ','green'))
console.log(color('\nTunggu sebntar: 24% ','green'))
console.log(color('\nTunggu sebntar: 25% ','green'))
console.log(color('\nTunggu sebntar: 26% ','green'))
console.log(color('\nTunggu sebntar: 27% ','green'))
console.log(color('\nTunggu sebntar: 28% ','green'))
console.log(color('\nTunggu sebntar: 29% ','green'))
console.log(color('\nTunggu sebntar: 30% ','green'))
console.log(color('\nTunggu sebntar: 31% ','green'))
console.log(color('\nTunggu sebntar: 32% ','green'))
console.log(color('\nTunggu sebntar: 33% ','green'))
console.log(color('\nTunggu sebntar: 34% ','green'))
console.log(color('\nTunggu sebntar: 35% ','green'))
console.log(color('\nTunggu sebntar: 36% ','green'))
console.log(color('\nTunggu sebntar: 37% ','green'))
console.log(color('\nTunggu sebntar: 38% ','green'))
console.log(color('\nTunggu sebntar: 39% ','green'))
console.log(color('\nTunggu sebntar: 40% ','green'))
console.log(color('\nTunggu sebntar: 41% ','green'))
console.log(color('\nTunggu sebntar: 42% ','green'))
console.log(color('\nTunggu sebntar: 43% ','green'))
console.log(color('\nTunggu sebntar: 44% ','green'))
console.log(color('\nTunggu sebntar: 45% ','green'))
console.log(color('\nTunggu sebntar: 46% ','green'))
console.log(color('\nTunggu sebntar: 47% ','green'))
console.log(color('\nTunggu sebntar: 48% ','green'))
console.log(color('\nTunggu sebntar: 49% ','green'))
console.log(color('\nTunggu sebntar: 50% ','green'))
console.log(color('\nTunggu sebntar: 51% ','green'))
console.log(color('\nTunggu sebntar: 52% ','green'))
console.log(color('\nTunggu sebntar: 53% ','green'))
console.log(color('\nTunggu sebntar: 54% ','green'))
console.log(color('\nTunggu sebntar: 55% ','green'))
console.log(color('\nTunggu sebntar: 56% ','green'))
console.log(color('\nTunggu sebntar: 57% ','green'))
console.log(color('\nTunggu sebntar: 58% ','green'))
console.log(color('\nTunggu sebntar: 59% ','green'))
console.log(color('\nTunggu sebntar: 60% ','green'))
console.log(color('\nTunggu sebntar: 61% ','green'))
console.log(color('\nTunggu sebntar: 62% ','green'))
console.log(color('\nTunggu sebntar: 63% ','green'))
console.log(color('\nTunggu sebntar: 64% ','green'))
console.log(color('\nTunggu sebntar: 65% ','green'))
console.log(color('\nTunggu sebntar: 66% ','green'))
console.log(color('\nTunggu sebntar: 67% ','green'))
console.log(color('\nTunggu sebntar: 68% ','green'))
console.log(color('\nTunggu sebntar: 69% ','green'))
console.log(color('\nTunggu sebntar: 70% ','green'))
console.log(color('\nTunggu sebntar: 71% ','green'))
console.log(color('\nTunggu sebntar: 72% ','green'))
console.log(color('\nTunggu sebntar: 73% ','green'))
console.log(color('\nTunggu sebntar: 74% ','green'))
console.log(color('\nTunggu sebntar: 75% ','green'))
console.log(color('\nTunggu sebntar: 76% ','green'))
console.log(color('\nTunggu sebntar: 77% ','green'))
console.log(color('\nTunggu sebntar: 78% ','green'))
console.log(color('\nTunggu sebntar: 79% ','green'))
console.log(color('\nTunggu sebntar: 80% ','green'))
console.log(color('\nTunggu sebntar: 81% ','green'))
console.log(color('\nTunggu sebntar: 82% ','green'))
console.log(color('\nTunggu sebntar: 83% ','green'))
console.log(color('\nTunggu sebntar: 84% ','green'))
console.log(color('\nTunggu sebntar: 85% ','green'))
console.log(color('\nTunggu sebntar: 86% ','green'))
console.log(color('\nTunggu sebntar: 87% ','green'))
console.log(color('\nTunggu sebntar: 88% ','green'))
console.log(color('\nTunggu sebntar: 89% ','green'))
console.log(color('\nTunggu sebntar: 90% ','green'))
console.log(color('\nTunggu sebntar: 80% ','green'))
console.log(color('\nTunggu sebntar: 91% ','green'))
console.log(color('\nTunggu sebntar: 92% ','green'))
console.log(color('\nTunggu sebntar: 93% ','green'))
console.log(color('\nTunggu sebntar: 94% ','green'))
console.log(color('\nTunggu sebntar: 95% ','green'))
console.log(color('\nTunggu sebntar: 96% ','green'))
console.log(color('\nTunggu sebntar: 97% ','green'))
console.log(color('\nTunggu sebntar: 98% ','green'))
console.log(color('\nTunggu sebntar: 99% ','green'))
console.log(color('\nSelesai: 100% ','green'))
        
    const isman = ismanConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Isman-Bot-Indonesia','Safari','1.0.0'],
        auth: state
    })

    store.bind(isman.ev)
    
    // Anti Call
    isman.ev.on('call', async (fatihh) => {
    let botNumber = await isman.decodeJid(isman.user.id)
    let ciko = db.data.settings[botNumber].anticall
    if (!ciko) return
    console.log(fatihh)
    for (let tihh of fatihh) {
    if (tihh.isGroup == false) {
    if (tihh.status == "offer") {
    let pa7rick = await isman.sendTextWithMentions(tihh.from, `*${isman.user.name}* tidak bisa menerima panggilan ${tihh.isVideo ? `video` : `suara`}. Maaf @${tihh.from.split('@')[0]} kamu akan diblockir. Jika tidak sengaja silahkan hubungi Owner untuk dibuka !`)
    isman.sendContact(tihh.from, global.owner, pa7rick)
    await sleep(8000)
    await isman.updateBlockStatus(tihh.from, "block")
    }
    }
    }
    })

    isman.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!isman.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(isman, mek, store)
        require("./isman")(isman, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
     // Group Update
    isman.ev.on('groups.update', async pea => {
    //console.log(pea)
    try {
    for(let ciko of pea) {
    // Get Profile Picture Group
       try {
       ppgc = await isman.profilePictureUrl(ciko.id, 'image')
       } catch {
       ppgc = 'https://tinyurl.com/yx93l6da'
       }
       let wm_fatih = { url : ppgc }
       if (ciko.announce == true) {
       isman.send5ButImg(ciko.id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (ciko.announce == false) {
       isman.send5ButImg(ciko.id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (ciko.restrict == true) {
       isman.send5ButImg(ciko.id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (ciko.restrict == false) {
       isman.send5ButImg(ciko.id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       isman.send5ButImg(ciko.id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${ciko.subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    }
    } catch (err){
    console.log(err)
    }
    })

    isman.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await isman.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await isman.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await isman.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }


                //welcome\\
        let nama = await isman.getName(num)
memb = metadata.participants.length
XeonWlcm = await getBuffer(ppuser)
XeonLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
	            const xmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: XeonWlcm, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                xeonbody = `┌─❖
│「 𝘏𝘢𝘪 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘛𝘰 
   │✑  ${metadata.subject}
   │✑  𝘔𝘦𝘮𝘣𝘦𝘳 : 
   │✑ ${xmembers} user
   └───────────────┈ ⳹`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Selamat Datang kak'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./isman/theme/cheems.xlsx'),
jpegThumbnail:XeonWlcm,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 6281337106240,
caption: xeonbody,
footer: `${isman.user.name}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${isman.user.name}`,
body: `Jangan Lupa Baca deskripsi kak`,
mediaType:2,
thumbnail: XeonWlcm,
}}
}
isman.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: xeonbuffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    xeonbody = `┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗟𝗲𝗳𝘁 
   │✑ ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xeonmembers}User
   └───────────────┈ ⳹`
let buttons = [
{buttonId: `wkwkwk`, buttonText: {displayText: 'Selamat Tinggal kak'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./isman/theme/cheems.xlsx'),
jpegThumbnail:XeonLft,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 6288972720297,
caption: xeonbody,
footer: `${isman.user.name}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${isman.user.name}`,
body: `Bye Semoga Khusnul khatimah.`,
mediaType:2,
thumbnail: XeonLft,
}}
}
isman.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    isman.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    isman.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = isman.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    isman.getName = (jid, withoutContact  = false) => {
        id = isman.decodeJid(jid)
        withoutContact = isman.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = isman.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === isman.decodeJid(isman.user.id) ?
            isman.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    isman.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await isman.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await isman.getName(i + '@s.whatsapp.net')}\nFN:${await isman.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:ismantm08@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/Isman-TM/IsmanBotz\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	isman.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    isman.setStatus = (status) => {
        isman.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    isman.public = true

    isman.serializeM = (m) => smsg(isman, m, store)

    isman.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Session Eror Ganti session Lu/ Scan Ulang`); isman.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Koneksi Terputus...."); startisman(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Koneksi terputus Dari Server..."); startisman(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); isman.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Scan Mu Tadi Telah Terlogot Dari Wa Web Coy....`); isman.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Merestart Cuy..."); startisman(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Koneksi Timeout..."); startisman(); }
            else isman.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    isman.ev.on('creds.update', saveState)

    // Add Other
      
      /** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      isman.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      // Siapa yang cita-citanya pakai resize buat keliatan thumbnailnya
      
      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      isman.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
       let resize = await isman.reSize(lok, 300, 150)
       var template = generateWAMessageFromContent(jid, {
       "templateMessage": {
       "hydratedTemplate": {
       "locationMessage": {
       "degreesLatitude": 0,
       "degreesLongitude": 0,
       "jpegThumbnail": resize
       },
       "hydratedContentText": text,
       "hydratedFooterText": footer,
       "hydratedButtons": but
       }
       }
       }, options)
       isman.relayMessage(jid, template.message, { messageId: template.key.id })
      }

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     isman.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return isman.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return isman.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return isman.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return isman.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return isman.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        isman.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        isman.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        isman.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        isman.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    isman.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
        let resize = await isman.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: resize }, { upload: isman.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            isman.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    isman.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
        let resize = await isman.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ video: vid, jpegThumbnail: resize }, { upload: isman.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            isman.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    isman.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
        let resize = await isman.reSize(buff, 300, 150)
        let a = [1,2]
        let b = a[Math.floor(Math.random() * a.length)]
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true, jpegThumbnail: resize, gifAttribution: b}, { upload: isman.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            isman.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    isman.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        isman.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendText = (jid, text, quoted = '', options) => isman.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await isman.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await isman.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    isman.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await isman.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendTextWithMentions = async (jid, text, quoted, options = {}) => isman.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await isman.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await isman.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    isman.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    isman.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    isman.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await isman.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await isman.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    isman.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await isman.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    isman.cMod = (jid, copy, text = '', sender = isman.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === isman.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    isman.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return isman
}

startisman()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
