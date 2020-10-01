const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('AlzuBOT is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'alzu'){
        message.channel.send('Se on vaa ominaisuus');
    }
});

client.login('NzYxMzYxMjEyMjY0Mjg0MjEx.X3Ze4g.nZoJoPt-wSl03tAy2Q8t_xDNeE8');