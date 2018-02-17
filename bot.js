const Discord = require('discord.js');
const bot = new Discord.Client();
const OwnerID = "143274603744067584"
const weather = require('weather-js');



bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === prefix + 'PING') {

        message.channel.send(':ping_pong: Pong! It took ' + message.client.ping +  'ms to send this message');
        console.log(msg.author.username + "Just use the .ping command.");
    }




    if (msg.startsWith(prefix + 'PURGE')) {
            async function purge() {
                message.delete();

                if (!message.member.roles.find("name", "avalon-commander")) {
                    message.channel.send('You need the \`avalon-commander\` role to use this command.');
                    return;
                }

                if (isNaN(args[0])) {
                    message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
                    return;
                    console.log(msg.author.username + "Just use the .purge command.");
                }

                const fetched = await message.channel.fetchMessages({limit: args[0]});
                console.log(fetched.size + ' messages found, deleting...');

                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Error: ${error}`));

            }

            purge();

        }


    if (msg === prefix + 'HELP') {
      const embed = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .setTitle("Command List")
      .addField("1 ❱ {ping", "Will show your ping")
      .addField("2 ❱ {botinfo", "Will show you the bot info")
      .addField("3 ❱ {userinfo", "Will show your info")
      .addField("4 ❱ {creator", "Will show you the creator")
      .addField("5 ❱ {reportbug", "Will show you the creator then you can report the bug to him")
      .addBlankField()
      .setFooter("CastleCraft Discord Bot Version: BETA 1.0.5")
      message.channel.send({embed})
    }

    if (msg === prefix + 'BOTINFO') {
    const sendguild2 = bot.guilds.size
    const senduser2 = bot.users.size
    const embed = new Discord.RichEmbed()
      .setAuthor("CastleCraft Bot Information","https://image.flaticon.com/icons/png/512/3/3716.png")
      .addField("Date Created", "11 Februari 2018", true)
      .addField("Creator", "@iƑreezzz.#9900", true)
      .addField("Servers Connected", sendguild2 + " Servers", true)
      .addField("Users Connected", senduser2 + " Users", true)
      .addField("Bot Version", "BETA 1.0.5", true)
      .addField("Bot Library", "Discord.JS", true)
      .addBlankField()
      .setColor(0x1D82B6)
      .setFooter("CastleCraft Discord Bot Version: BETA 1.0.5")
      message.channel.send(embed);
    }

    if (msg === prefix + 'USERINFO') {
      const embed = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .setTitle("This is the user's info!", true)
      .addField("Full Username", message.author.username, true)
      .addField("ID", message.author.id, true)
      .addField("Created At", message.author.createdAt, true)
      .addBlankField()
      .setFooter("CastleCraft Discord Bot Version: BETA 1.0.5")
      message.channel.send({embed})
    }

    if (msg === prefix + 'CREATOR') {
      const embed = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .addField("Create by :", "@iƑreezzz#9900")
      .setFooter("If you found bugs on this bot, pls contact the creator!")
      message.channel.send({embed})
    }

    if (msg === 'AVALONIFR HOW ARE YOU?') {
      message.channel.send('Wonderful! Thanks for asking.');
    }


    if (msg === 'AVALONIFR CAN YOU HELP ME?') {
      message.channel.send('No! Sorry');
    }

    if (msg === 'AVALON!') {
      message.channel.send('Yes?')
    }

    if (msg === 'AVALON KAMU NANTANG SAYA?!') {
      message.channel.send('IYA! Emang Kenapa?!')
    }

    if (msg === 'AVALON KAMU NANTANG SAYA!?') {
      message.channel.send('IYA! Emang Kenapa?!')
    }

    if (msg === 'AVALON AYO BERANTEM') {
      message.channel.send('AYO! Sini loe **GEMBEL**')
    }

    if (msg === 'GOBLOK') {
      message.delete();
      message.channel.send('Jangan ngomong kasar!')
    }

    if (msg === 'ANJING') {
      message.delete();
      message.channel.send('Kucing')
    }

    if (msg === 'BABI') {
      message.delete();
      message.channel.send('Jangan ngomong kasar!')
    }

    if (msg === 'ASU') {
      message.delete();
      message.channel.send('Jangan ngomong kasar!')
    }

    if (msg === 'JANGAN NGE GAS BISA GA?!') {
      message.channel.send('Ampun Tuan :frowning:')
    }

    if (msg === 'JANGAN NGE GAS BISA GA!?') {
      message.channel.send('Ampun Tuan :frowning:')
    }

    if (msg === 'TUAN GIGIMU!') {
      message.channel.send('Iya gigi saya ompong')
    }


    if (msg === 'AVALON WHO IS YOUR CREATOR?') {
      const embed = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .addField("Create by :", "@iƑreezzz#9900")
      .setFooter("If you found bugs on this bot, pls contact the creator!")
      message.channel.send({embed})
    }

    if (msg === prefix + 'REPORTBUG') {
      const embed = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .addField("Create by :", "@iƑreezzz#9900")
      .setFooter("If you found bugs on this bot, pls contact the creator!")
      message.channel.send({embed})
    }

  });

    bot.on('ready', () => {
        console.log('Your bot is ready!')
        console.log('This bot is made by : iFreezzz');
        bot.user.setGame("{help | Simple Bot.");
        bot.user.setStatus('Do Not Disturb');

    });

    bot.login(process.env.BOT_TOKEN);
