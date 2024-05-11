const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cypherilerioluwa@gmail.com"
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/2349121881343";
global.website=process.env.GURL || "https://wa.me/2349121881343" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ CYPHER-ᴍᴅ" 


global.devs = "2349151066117" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349151066117, 2349121881343";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349151066117";




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
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_14_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjM1L1Q4RzRrUXorSTk5K3IzWUZXWUZrVURMMmxldlJuc2ZsZEM3aEl6V0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1MTA2NjExN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5NUZBMDg0Mzc2Rjk0RDc3RDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDM2ODY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIngyNUFKel9NVEQtdHVSN1FQdmw5WFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODZjODcyZjctM2VhMy00NmE3LTg0OGMtZWFiNTEwZDc3OTg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDIxMSxcbiAgICAgIDk4LFxuICAgICAgMTgxLFxuICAgICAgMjU1LFxuICAgICAgMjUzLFxuICAgICAgNixcbiAgICAgIDc2LFxuICAgICAgODcsXG4gICAgICAzNSxcbiAgICAgIDEzMCxcbiAgICAgIDQsXG4gICAgICAxNTcsXG4gICAgICAxNjQsXG4gICAgICAyNDksXG4gICAgICAyNTAsXG4gICAgICAxODQsXG4gICAgICAxOTQsXG4gICAgICA1NixcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTUyLFxuICAgICAgMTY3LFxuICAgICAgMTU4LFxuICAgICAgMjM3LFxuICAgICAgNCxcbiAgICAgIDEzOSxcbiAgICAgIDEsXG4gICAgICA0LFxuICAgICAgNDAsXG4gICAgICAxNDAsXG4gICAgICA1LFxuICAgICAgNTUsXG4gICAgICAxMzAsXG4gICAgICAyMjcsXG4gICAgICAyMDMsXG4gICAgICA1MSxcbiAgICAgIDQ1LFxuICAgICAgMTAxLFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnY3dkpnS0VMdjYvYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTa2orYUd2N21CdFhEMVI5SkRabFk3T2k3eG1PNXhEVGpKT0JpaXZKOG1BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkprdGt5NmZtZ21XTWRxWEtSY0FqVkxhOVlwL0dSODNnd2lDNGY0dGVWNGtwR1h5T0pVcDM0OUk0eGlpRjRCUFNkVXFCdmdMUG03dlArSVM3R1pGUEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdlT1k1empGLy84U1RNTk90Q25xK0lLekNkWEgxc1ZTYVlta3lMdG5pSUZIS2IvZlNLMTlQc1dZekc5cmRscGE0cnRQR3ltMmFQdDNOcXlEbEppR2lBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MTA2NjExNzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkyMDMyODUzMjc5MjE6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ3lwaGVyIMOMbMOpcsOtb2zDundhIPCfjYDwn5KO4p2k77iP8J+TjFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MTA2NjExNzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU0MzY4NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVyYS5qc29uIjogIntcImtleURhdGFcIjpcIkRRTDBZa0s1M1h3T29zUWlmczlvWkFNK0tEYzlBclhYcDRIK1BaMzA1Tjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjczNTY4NTA4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE1NDM2ODYzMjQ4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CYPHER-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CYPHER ᴛᴇᴄʜ』* "),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CYPHER-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x CYPHER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "CYPHER"  ).toUpperCase(),



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
