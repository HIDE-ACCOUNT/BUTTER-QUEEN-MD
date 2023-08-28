/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
            pattern: "join",
            desc: "joins group by link",
            category: "owner",
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please give me Query ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("🟩Joined Group"))
                .catch((err) => citel.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s"],
            desc: "Makes sticker of replied image/video.",
            category: "group",
            use: '<reply to any image/video.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Mention any Image or video Sir.*`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("Cannot fetch videos longer than *20 Seconds*");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*Uhh,Please reply to any image or video*");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*CHECK YOUR INBOX ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*GROUP NAME: SONIC-MD-SUPPORT*\n\n*Group Link*\n\n_https://chat.whatsapp.com/LkP8QZqdhXUKxmc0hUPip5_`,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "warn",
            desc: "Warns user in Group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!citel.isGroup) return citel.reply('This Command is only for group.')
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply('This command is only for Admin.')
 const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "ujid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

//---------------------------------------------------------------------------
    cmd({
        pattern: "revoke",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Suhail, msg, text,{ isCreator }) => {
	    if (!msg.isGroup) return msg.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Suhail.bot, msg)	
	const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	if (!isBotAdmins) return msg.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
	    
var code = await Suhail.bot.groupRevokeInvite(msg.chat)
return msg.reply("*_Group Link Revoked SuccesFully_*");
	
    }
	)
//---------------------------------------------------------------------------
cmd({
        pattern: "kik",
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => 
    {	
        if (!msg.isGroup) return msg.reply(tlang().group);
	if(!text) return await msg.reply("*Provide Me Country Code. Example: .kik 91*")
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Suhail.bot, msg)
        let isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) msg.reply("*Hey Owner, You Are not Admin Here*")
		else return msg.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*These Users Not Kicked* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await msg.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Suhail.bot.groupParticipantsUpdate(msg.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await msg.reply(`*_Ahh, There Is No User Found With ${find} Country Code_*`)
        else return await msg.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked_*`)
})
//---------------------------------------------------------------------------
cmd({
        pattern: "num",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => 
    {	
        if (!msg.isGroup) return msg.reply(tlang().group);
	if(!text) return await msg.reply("*Provide Me Country Code. Example: .num 91*")
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) :  false  ;
        if (!isAdmins && !isCreator ) return msg.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*List Of Users With ${find} Country Code*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*There Is No Users With ${find} Country Code*` }
	else { nums += num+Config.caption }
	await msg.reply(nums)		
})
    //---------------------------------------------------------------------------
    cmd({
        pattern: "jid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
      if (msg.quoted)  return msg.reply(msg.quoted.sender)
	    
	    
	  /*  if(!isCreator) return msg.reply(tlang().owner)
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
		const participants = msg.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }*/
     else return msg.reply(msg.chat)

    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "tagall",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        let textt = `
══✪〘   *Tag All*   〙✪══

➲ *Message :* ${text ? text : "blank"}\n\n
➲ *Author:* ${citel.pushName} 🔖
`
        for (let mem of participants) {
            textt += `📍 @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "request",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return reply(`Example : ${
        prefix + command
      } hello dev please add a downloader feature`);
            textt = `*| REQUEST |*`;
            teks1 = `\n\n*User* : @${
    citel.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
            for (let i of owner) {
                Void.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "retrive",
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return reply("Please reply to any message Image or Video!");
            let mime = citel.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
                await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
            } else {
                await citel.reply("please, reply to viewOnceMessage");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rwarn",
            desc: "Deletes all previously given warns of quoted user.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.quoted) return citel.reply('Quote a user master.')
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            return citel.reply('User is now free as a bird.\n.')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2)
                return await citel.reply(
                    `${prefix}poll question;option1,option2,option3.....`
                );
            let options = [];
            for (let i of opt.split(',')) {
                options.push(i);
            }
            await Void.sendMessage(citel.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "profile",
            desc: "Shows profile of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
            if (lvpoints <= 2) {
                var role = "🏳Citizen";
            } else if (lvpoints <= 4) {
                var role = "👼Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️Wizard";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel";
            } else if (lvpoints <= 20) {
                var role = "⚡Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "🎭Elite";
            } else if (lvpoints <= 24) {
                var role = "🥇Ace I";
            } else if (lvpoints <= 26) {
                var role = "🥈Ace II";
            } else if (lvpoints <= 28) {
                var role = "🥉Ace Master";
            } else if (lvpoints <= 30) {
                var role = "🎖Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "🏅Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "🏆Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "💍Supreme I";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Ii";
            } else if (lvpoints <= 40) {
                var role = "🔮Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹Legend II";
            } else if (lvpoints <= 46) {
                var role = "⚔Legend";
            } else if (lvpoints <= 55) {
                var role = "🐉Immortal";
            }
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Kolakata')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${citel.pushName},*
*Here is your profile information*
*👤Username:* ${citel.pushName}
*⚡Bio:* ${bioo}
*🧩Role:* ${role}
*🍁Level:* ${userq.level}
*📥 Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rank",
            desc: "Sends rank card of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
            if (lvpoints <= 2) {
                var role = "🏳Citizen";
            } else if (lvpoints <= 4) {
                var role = "👼Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️Wizard";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel";
            } else if (lvpoints <= 20) {
                var role = "⚡Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "🎭Elite";
            } else if (lvpoints <= 24) {
                var role = "🥇Ace I";
            } else if (lvpoints <= 26) {
                var role = "🥈Ace II";
            } else if (lvpoints <= 28) {
                var role = "🥉Ace Master";
            } else if (lvpoints <= 30) {
                var role = "🎖Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "🏅Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "🏆Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "💍Supreme I";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Ii";
            } else if (lvpoints <= 40) {
                var role = "🔮Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹Legend II";
            } else if (lvpoints <= 46) {
                var role = "⚔Legend";
            } else if (lvpoints <= 55) {
                var role = "🐉Immortal";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `*Hii ${tlang().greet} ,🌟 ${citel.pushName}∆${disc}'s* Exp\n\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "leaderboard",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Void, citel) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● LeaderBoard ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "GOD✨";
                if (lvpoints <= 2) {
                    var role = "🏳Citizen";
                } else if (lvpoints <= 4) {
                    var role = "👼Baby Wizard";
                } else if (lvpoints <= 6) {
                    var role = "🧙‍♀️Wizard";
                } else if (lvpoints <= 8) {
                    var role = "🧙‍♂️Wizard Lord";
                } else if (lvpoints <= 10) {
                    var role = "🧚🏻Baby Mage";
                } else if (lvpoints <= 12) {
                    var role = "🧜Mage";
                } else if (lvpoints <= 14) {
                    var role = "🧜‍♂️Master of Mage";
                } else if (lvpoints <= 16) {
                    var role = "🌬Child of Nobel";
                } else if (lvpoints <= 18) {
                    var role = "❄Nobel";
                } else if (lvpoints <= 20) {
                    var role = "⚡Speed of Elite";
                } else if (lvpoints <= 22) {
                    var role = "🎭Elite";
                } else if (lvpoints <= 24) {
                    var role = "🥇Ace I";
                } else if (lvpoints <= 26) {
                    var role = "🥈Ace II";
                } else if (lvpoints <= 28) {
                    var role = "🥉Ace Master";
                } else if (lvpoints <= 30) {
                    var role = "🎖Ace Dominator";
                } else if (lvpoints <= 32) {
                    var role = "🏅Ace Elite";
                } else if (lvpoints <= 34) {
                    var role = "🏆Ace Supreme";
                } else if (lvpoints <= 36) {
                    var role = "💍Supreme I";
                } else if (lvpoints <= 38) {
                    var role = "💎Supreme Ii";
                } else if (lvpoints <= 40) {
                    var role = "🔮Supreme Master";
                } else if (lvpoints <= 42) {
                    var role = "🛡Legend III";
                } else if (lvpoints <= 44) {
                    var role = "🏹Legend II";
                } else if (lvpoints <= 46) {
                    var role = "⚔Legend";
                } else if (lvpoints <= 55) {
                    var role = "🐉Immortal";
                }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}●Name*: ${data.name}\n*●Level*: ${fetchlb[i].level}\n*●Points*: ${fetchlb[i].xp}\n*●Role*: ${role}\n*●Total messages*: ${ttms}\n\n`;
            }
            return citel.reply(leadtext)
        }
    )
 //---------------------------------------------------------------------------
cmd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Suhail, msg, text ,{ isCreator }) => {	
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
	        if (!isBotAdmins) return msg.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
            if (!isAdmins) return msg.reply(tlang().admin);
            
            try {
                let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return await msg.send("*_Uhh Dear, Reply/Mention to an User_*");
                await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "promote");
                await msg.send(`*USER PROMOTED BY BUTTER-QUEEN-MD*`)
                return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            } catch(e) {
                console.log("Promote error : " , e )
                await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                return await msg.reply(tlang().botAdmin);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
    pattern: "demote",
    desc: "Demotes replied/quoted user from group",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
async(Suhail, msg, text,{ isCreator }) => {
//if (!isCreator) return msg.reply("```Only My Owner Can Use This Command```")
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupAdmins = await getAdmin(Suhail.bot, msg)
    const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return await msg.send("*_Uhh Dear, Reply/Mention to an User_*");
        await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "demote");
        await msg.send(`*USER DEMOTED BY BUTTER-QUEEN-MD*`)
        return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) {
        console.log("Demote error : " , e )
        await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
        return await msg.reply(tlang().botAdmin);    
    }

}
)

//---------------------------------------------------------------------------
cmd({
            pattern: "kick",
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Suhail, msg, text ,{ isCreator }) => {
	//if (!isCreator) return msg.reply("*_Only My Owner Can Use This Command_*")
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return msg.reply(tlang().admin);
            
            try {
                let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return msg.send("*_Uhh Dear, Reply/Mention to an User_*");
                await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "remove");
                await msg.send(`*Hurray, User Kicked Succesfully!*`)
                return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            } catch(e) {
                console.log("Kick error : " , e )
                await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                return await msg.reply(tlang().botAdmin);

            }
        }
    )

    //---------------------------------------------------------------------------
cmd({
            pattern: "gpp",
	    alias:['grouppic'],
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text) => {


const _0x4abbbf=_0x5bb4;(function(_0x13d7c6,_0x8bc947){const _0x259bc2=_0x5bb4,_0x10b260=_0x13d7c6();while(!![]){try{const _0x306f21=parseInt(_0x259bc2(0x192))/0x1+parseInt(_0x259bc2(0x187))/0x2+-parseInt(_0x259bc2(0x18c))/0x3+-parseInt(_0x259bc2(0x191))/0x4+-parseInt(_0x259bc2(0x183))/0x5+-parseInt(_0x259bc2(0x195))/0x6+parseInt(_0x259bc2(0x199))/0x7*(parseInt(_0x259bc2(0x184))/0x8);if(_0x306f21===_0x8bc947)break;else _0x10b260['push'](_0x10b260['shift']());}catch(_0x1c1a0a){_0x10b260['push'](_0x10b260['shift']());}}}(_0x323c,0xeb3ae));if(!msg[_0x4abbbf(0x189)])return await msg[_0x4abbbf(0x198)](tlang()[_0x4abbbf(0x17c)]);function _0x5bb4(_0xeb8310,_0x3268ff){const _0x323c8d=_0x323c();return _0x5bb4=function(_0x5bb44f,_0x56b4b1){_0x5bb44f=_0x5bb44f-0x17a;let _0x38ee75=_0x323c8d[_0x5bb44f];return _0x38ee75;},_0x5bb4(_0xeb8310,_0x3268ff);}if(!msg['quoted'])return await msg[_0x4abbbf(0x198)]('*_Uhh\x20Dear,\x20Reply\x20Any\x20Image\x20To\x20Set\x20Group\x20Icon_*');if(msg[_0x4abbbf(0x180)][_0x4abbbf(0x17a)]!='imageMessage')return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x186));function _0x323c(){const _0x18ae47=['download','535270ulHSfx','7494288pOesFz','set','*_Reply\x20To\x20An\x20Image,\x20Idiot_*','3767082nhMrcD','scaleToFit','isGroup','read','*_I\x27m\x20Not\x20Admin\x20In\x20This\x20Chat,_*\x0a*_Provide\x20Admin\x20Role\x20To\x20Update\x20Group\x20Icon_*','2512509jkkzwU','chat','getWidth','*_Profile\x20Icon\x20Updated\x20Successfully_*','crop','5700504cCGKrX','843473GBbmqF','normalize','decodeJid','1983690GnNTjc','includes','MIME_JPEG','reply','7wUnEFg','mtype','sender','group','```Error\x20While\x20Updating\x20Group\x20Profile\x20:```\x20','getBufferAsync','getHeight','quoted','picture'];_0x323c=function(){return _0x18ae47;};return _0x323c();}const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x4abbbf(0x194)](Suhail.bot['user']['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![],isAdmins=groupAdmins[_0x4abbbf(0x196)](msg[_0x4abbbf(0x17b)])||![];if(!isBotAdmins)return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x18b));if(!isAdmins)return await msg[_0x4abbbf(0x198)](tlang()['admin']);const media=await msg[_0x4abbbf(0x180)][_0x4abbbf(0x182)]();try{const {query}=Suhail.bot,{preview}=await generateProfilePicture(media);return await query({'tag':'iq','attrs':{'to':msg[_0x4abbbf(0x18d)],'type':_0x4abbbf(0x185),'xmlns':'w:profile:picture'},'content':[{'tag':_0x4abbbf(0x181),'attrs':{'type':'image'},'content':preview}]}),await msg[_0x4abbbf(0x198)](_0x4abbbf(0x18f));}catch(_0x632d01){return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x17d)+_0x632d01);}async function generateProfilePicture(_0x3da926){const _0x527026=_0x4abbbf,_0x462396=await Jimp[_0x527026(0x18a)](_0x3da926),_0x1c1f73=_0x462396[_0x527026(0x18e)](),_0x176031=_0x462396[_0x527026(0x17f)](),_0x887df7=_0x462396[_0x527026(0x190)](0x0,0x0,_0x1c1f73,_0x176031);return{'img':await _0x887df7[_0x527026(0x188)](0x144,0x2d0)[_0x527026(0x17e)](Jimp[_0x527026(0x197)]),'preview':await _0x887df7[_0x527026(0x193)]()[_0x527026(0x17e)](Jimp[_0x527026(0x197)])};}



/*

            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;


            let mime = msg.quoted.mtype
            if (!msg.isGroup) msg.reply(tlang().group);
            if (!isAdmins) msg.reply(tlang().admin);
            if (!isBotAdmins) msg.reply(tlang().botadmin);
            if (!msg.quoted) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            if (!/image/.test(mime)) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            if (/webp/.test(mime)) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            await Suhail.bot.updateProfilePicture(msg.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            msg.reply(tlang().success);
*/

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tag",
            alias:["hidetag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Suhail, msg, text , {isCreator}) => {
	if(!text && !msg.quoted) return msg.reply(`*Example : ${prefix}tag Hi Everyone, How are you Doing*` )
	    if(!text){text = msg.quoted.text;}
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
            const participants = msg.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
            Suhail.bot.sendMessage(msg.chat, { text: text, mentions: participants.map((a) => a.id)}, { quoted: msg});
        }
    )
        //---------------------------------------------------------------------------
cmd({
    pattern: "tagadmin",
    desc: "Tags only Admin numbers",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async(Suhail, msg, text , {isCreator}) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
    const participants = msg.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = participants.filter(p => p.admin)
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isAdmins ) return msg.reply(tlang().admin);
    if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
    const listAdmin = groupAdmins.map((v, i) => ` |  @${v.id.split('@')[0]}`).join('\n')


let tag = `
Tag by : @${msg.sender.split("@")[0]}
${text ? "≡ Message :" + text : ""}

┌─⊷ ADMINS
${listAdmin}
└───────────
`.trim()
return await Suhail.bot.sendMessage(msg.chat,{text : tag ,mentions: [msg.sender, ...groupAdmins.map(v => v.id) ,]} ,)



}
)
    //---------------------------------------------------------------------------
cmd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Suhail, msg, text,{isCreator}) => {
	//if (!isCreator) return msg.reply("```Only My Owner Can Use This Command```")
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;

  
	        if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return msg.reply(tlang().admin)
            
            let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return await msg.reply("*_Uhh Dear, Please Provide An User._*");
            if(msg.sender == botNumber ){
                await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "add");
                await msg.send(`*User Added Succesfully!*`)
                return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            }else {
                await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                await Suhail.bot.sendMessage(users , {text : `Here's The Group Invite Link\n User @${msg.sender.split("@")[0]} Wants To Add You in bellow Group\n https://chat.whatsapp.com/${await Suhail.bot.groupInviteCode(msg.chat)} _ \n ------------ Join If YOu Feel Free?` ,mentions:[msg.sender,]} , {quoted : msg })
                return await msg.reply(`_Can't Add User, Invite Sent_`)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "hidetag",
            alias: ["htag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply(tlang().admin);

            if (!isAdmins) citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: citel,
            });
        }
    )

    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
                jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
//---------------------------------------------------------------------------
cmd({
            pattern: "del",
            alias: ["delete"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
                if (!isBotAdmins) return citel.reply('I can\'t delete anyones message without getting Admin Role.')
                if (!citel.quoted) return citel.reply(`Please reply to any message. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "checkwarn",
            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('This command is only for Group.')
            if (!citel.quoted) return citel.reply('Quote a user master.')
            teskd = `*All Warnings.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
                teskd += `│ *🔰Time:-* ${h[i].date}\n`
                teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`
                teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            citel.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "block",
        desc: "blocks that person",
        fromMe: true,
        category: "owner",
        filename: __filename,
        use: '<quote/reply user.>'
    },
    async(Suhail, msg, text,{isCreator}) => {
        if (!isCreator) msg.reply(tlang().owner);
        let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : "";
        if(!users)  return await msg.reply("*Uhh dear, reply/mention an User*")
        await Suhail.bot.updateBlockStatus(users, "block")
            .then((res) => { return Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});    })		    //console.log(jsonformat(res))
            .catch((err) => console.log(jsonformat(err)));

    }
)
//---------------------------------------------------------------------------
cmd({
            pattern: "unblock",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) msg.reply(tlang().owner);
            let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : false ;
            if(!users)  return await msg.reply("*Uhh dear, reply/mention an User*")
	    let num = users.replace("@s.whatsapp.net","")
            await Suhail.bot.updateBlockStatus(users, "unblock")
                .then((res) => msg.send(`*@${num} Unblocked Succesfully..!*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "invite",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Suhail, msg, text,{ isCreator }) => {
	    if (!msg.isGroup) return msg.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Suhail.bot, msg)	
	    const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return msg.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
var str1 = await Suhail.bot.groupInviteCode(msg.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return msg.reply("*Group Invite Link Is Here* \n*"+mergedString+"*");
	
    }
	)
	
    //---------------------------------------------------------------------------
cmd({
        pattern: "broadcast",
        alias: ["bc"],
        desc: "Bot makes a broadcast in all groups",
        fromMe: true,
        category: "group",
        filename: __filename,
        use: '<text for broadcast.>',
    },
    async(Void, citel, text) => {
        if (!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        citel.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${
          anu.length * 1.5
        } second`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: citel.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + citel.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Void.sendMessage(i, buttonMessaged, {
                quoted: citel,
            });
        }
        citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------
if(Config.WORKTYPE!=='private'){
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "GOD";
        if (lvpoints <= 2) {
            var role = "🏳Citizen";
        } else if (lvpoints <= 4) {
            var role = "👼Baby Wizard";
        } else if (lvpoints <= 6) {
            var role = "🧙‍♀️Wizard";
        } else if (lvpoints <= 8) {
            var role = "🧙‍♂️Wizard Lord";
        } else if (lvpoints <= 10) {
            var role = "🧚🏻Baby Mage";
        } else if (lvpoints <= 12) {
            var role = "🧜Mage";
        } else if (lvpoints <= 14) {
            var role = "🧜‍♂️Master of Mage";
        } else if (lvpoints <= 16) {
            var role = "🌬Child of Nobel";
        } else if (lvpoints <= 18) {
            var role = "❄Nobel";
        } else if (lvpoints <= 20) {
            var role = "⚡Speed of Elite";
        } else if (lvpoints <= 22) {
            var role = "🎭Elite";
        } else if (lvpoints <= 24) {
            var role = "🥇Ace I";
        } else if (lvpoints <= 26) {
            var role = "🥈Ace II";
        } else if (lvpoints <= 28) {
            var role = "🥉Ace Master";
        } else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
        } else if (lvpoints <= 32) {
            var role = "🏅Ace Elite";
        } else if (lvpoints <= 34) {
            var role = "🏆Ace Supreme";
        } else if (lvpoints <= 36) {
            var role = "💍Supreme I";
        } else if (lvpoints <= 38) {
            var role = "💎Supreme Ii";
        } else if (lvpoints <= 40) {
            var role = "🔮Supreme Master";
        } else if (lvpoints <= 42) {
            var role = "🛡Legend III";
        } else if (lvpoints <= 44) {
            var role = "🏹Legend II";
        } else if (lvpoints <= 46) {
            var role = "⚔Legend";
        } else if (lvpoints <= 55) {
            var role = "🐉Immortal";
        } else {
            var role = "Kiddo";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `
╔════◇
║ *Wow,Someone just*
║ *leveled Up huh⭐*
║ *👤Name*: ${citel.pushName}
║ *🎐Level*: ${sck1.level}🍭
║ *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍Role*: *${role}*
║ *Enjoy🥳*
╚════════════╝
`,
            }, {
                quoted: citel,
            });
        }
    }

})
}
