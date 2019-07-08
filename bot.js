const Discord = require("discord.js");
const client = new Discord.Client();
 
 




















 
 
 
 
 
 
   
   
   
  
   
 





















 
 
    









 


 

 




 

        
    
 





 




  













client.on('ready', () => {
   client.user.setStatus("online")
});
 






































 








  











m.reactions.get("tada").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = 'لم يتم التحديد';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',الفائز هو : ${gFilter})
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);});
                  msgg.edit(✔| **تم اعداد القيف اواي**);
                } catch(e) {
                  msgg.edit(✖| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**);
                  console.log(e);
                }
              });
            collected.first().delete();
            msgg.edit('eight_pointed_black_star| واخيرا اكتب على ماذا تريد القيف اواي').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(المدة : ${duration / 60000} دقائق)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('tada');
                     setTimeout(() => {
                       let users = m.reactions.get("tada").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];if(users.size === 1) gFilter = 'لم يتم التحديد';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',الفائز هو : ${gFilter})
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(✔| **تم اعداد القيف اواي**);
                } catch(e) {
                  msgg.edit(✖| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
}); 







                






 
 
 
client.login(process.env.BOT_TOKENN);
