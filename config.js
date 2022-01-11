/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6288292024190','62882920241909','62882920241908']
global.packname = 'Dibuat oleh'
global.author = 'BaisMD'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'Fitur Khusus Admin Grup...',
    botAdmin: 'Bot Harus Menjadi Admin Grup...',
    owner: 'Fitur ini Khusus Owner Bot...',
    group: 'Fitur Digunakan Hanya Untuk Grup...',
    private: 'Fitur Digunakan Hanya Untuk Private Message...',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*Masih Dalam Proses...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
