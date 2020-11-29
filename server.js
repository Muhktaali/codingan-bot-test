const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', async () => {
  console.log(`${client.user.tag} sudah online!`)
  client.user.setActivity("watching test bot ")//bisa diganti sesuai keinginan
})

client.on('message', async message => {
  if(message.content === "indonesia") message.reply(":flag_id:")
})
client.login("NzgxODgxNTUxNDM1NTk1Nzc2.X8EF8A.zPLUnFd1m2dd2UrUIsQqosPgoQc") 
