const fs = require('fs')
const chalk = require('chalk')

// Jangan di rubah
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	saipul: 'https://saipulanuar.ga/api',
	botcah: 'https://botcahx.ddns.net/api',
	fax: 'https://fax-home.herokuapp.com/docs',
}

// Jangan di rubah
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
	'https://fax-home.herokuapp.com/docs': '023l1qhbpk',
}

// Boleh di rubah
global.ownernomer = "6281337106240"
global.owner = ['6281337106240','6288972720297','62881026009477']
global.premium = ['6281337106240']
global.packname = 'IsmanBotz'
global.author = '2022'
global.author1 = 'Isman TM'
global.sessionName = 'Isman'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    creator: 'Fitur Khusus Creator Bot',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: "10"
}
global.thumb = fs.readFileSync('./lib/isman.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
