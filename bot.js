const Discord = require("discord.js");
const client = new Discord.Client();
 
 




















 
 
 
 
 
 
   
   
   
  
   
 





















 
 
    









 


 

 




 

        
    
 





 




  













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



              





 
 
 
client.login(process.env.BOT_TOKENN);
