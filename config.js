const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348104656991, 2349121881343";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104656991";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_51_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDMzLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlc5ZGc2cmpycCsvU3BtWTdwTUZJU2NiRzFua2diQU1Wck00d1ZkY3dUYVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl82LVJ3S0xDVENHUUFfWFprWHA4U2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2IzYmJkMjgtNTc4Yi00YjFlLWI1MDgtMGRiY2IyODU1NzkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDk0LFxuICAgICAgNixcbiAgICAgIDIwLFxuICAgICAgMTQwLFxuICAgICAgMzksXG4gICAgICAzMSxcbiAgICAgIDIxOSxcbiAgICAgIDE5MyxcbiAgICAgIDIxMyxcbiAgICAgIDY2LFxuICAgICAgMTkyLFxuICAgICAgMTgsXG4gICAgICAyNTAsXG4gICAgICA0OSxcbiAgICAgIDI4LFxuICAgICAgMTYzLFxuICAgICAgMjYsXG4gICAgICA4NSxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAyMTIsXG4gICAgICA5MSxcbiAgICAgIDE5MCxcbiAgICAgIDExMyxcbiAgICAgIDIyNixcbiAgICAgIDg0LFxuICAgICAgMjIwLFxuICAgICAgMjMsXG4gICAgICAzOCxcbiAgICAgIDIwOSxcbiAgICAgIDI0MCxcbiAgICAgIDIzNixcbiAgICAgIDM0LFxuICAgICAgMTc2LFxuICAgICAgNjYsXG4gICAgICAyNTIsXG4gICAgICAxNTAsXG4gICAgICAyMixcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWjRCOEdaSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNDY1Njk5MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzU3MTY4MzEzODc2NjQ6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLwqNsdmluIOKIhcKiaOKCrCDwn5iO8J+YjlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09HWWxyNEZFTXZuNzdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN2kvV3dzWUFTZ3JsNU5iNFFnSE5EVzZFZFFjTVoxZ3VDeFJqNnhmb2YxWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFK01xcXNqZ2k5SkRzaENIbXdXSFRsbkFjY255aDBFems5YjNxTUdtQmZGYXB2NmRSdkhEWjJWVXJZa1kvNThuZGJ6aXI3U09DLzYrWFJHRlVOV1ZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqZ3NxMzdNUXdtYXJic0ExdkJ1NHFzcEpYdnpkY05BUlRFcUIrelFEWTFhWFdWaVpVWm43VnBVOVBoTSs1bFQ5N3RSVXdvZGJNdmpWUC93SzRWbWFBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0NjU2OTkxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTIwNTA3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9TbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1NtLmpzb24iOiAie1wia2V5RGF0YVwiOlwibWhyVUJ5b0lxWVVDSEZ6bDBDdlhWSDFrZFNuUzU2NHNwYkNReWJVaXJPUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDcyNTY0MzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
