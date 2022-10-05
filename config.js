const fs = require('fs')
const chalk = require('chalk')

// MAKASIHLAH KE BANG ZENZ :)
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// HMM UDAH FREE DECK
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// NAMBAH BOLEH HAPUS JANGAN -_-
global.owner = ['6282237949722','62895328935760','6285255312224']
global.premium = ['6282237949722']
global.packname = 'Botz WhatsApp'
global.author = 'Creator Isman'
global.sessionName = 'Isman'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/isman.jpg')
global.tutor = fs.readFileSync('./isman/intro.mp4')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
