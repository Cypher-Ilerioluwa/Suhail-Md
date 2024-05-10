const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://wa.me/2349121881343" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4b4cb2f88176f87893105.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Cypher Ilerioluwa-ᴍᴅ" 


global.devs = "2349121881343" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349121881343";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121881343";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_59_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRZSXhkbmR1aUk4aFhkZnRiLzEraW5odEp6TlhlemtQNFRiR3phUE4wbm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1MTA2NjExN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0QjMxQ0FDQjdEOTc0MzYxMUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1MzU2NzgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRvTGZsRmtOUXB1VWEzbndvMF9GUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTM2NWI3MjYtNDU5Zi00MjBmLTk4MTUtZGU0MWU1MTc1ZDQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDE0OCxcbiAgICAgIDgzLFxuICAgICAgNzcsXG4gICAgICAxMTEsXG4gICAgICAyMTAsXG4gICAgICA2NyxcbiAgICAgIDE0MyxcbiAgICAgIDE4NSxcbiAgICAgIDM5LFxuICAgICAgOTEsXG4gICAgICAxNjMsXG4gICAgICA4NCxcbiAgICAgIDQ2LFxuICAgICAgMTk0LFxuICAgICAgMjM1LFxuICAgICAgMTUxLFxuICAgICAgMTQzLFxuICAgICAgMTYzLFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDE5OCxcbiAgICAgIDEwNCxcbiAgICAgIDIxMSxcbiAgICAgIDI0OSxcbiAgICAgIDE0LFxuICAgICAgMTU2LFxuICAgICAgMTQ1LFxuICAgICAgMjAwLFxuICAgICAgMjM5LFxuICAgICAgNjMsXG4gICAgICAxNjksXG4gICAgICA3MCxcbiAgICAgIDExMSxcbiAgICAgIDE1NSxcbiAgICAgIDE4MyxcbiAgICAgIDIzMCxcbiAgICAgIDEyMixcbiAgICAgIDI0OCxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZadmJBREVPV0krYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTa2orYUd2N21CdFhEMVI5SkRabFk3T2k3eG1PNXhEVGpKT0JpaXZKOG1BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImI0M0gyeUx0ck8zYW1CRko4b1BhUG1tQlZyajFBb2xtN1hJV1QvVVE0NWQ3QlFySFZNRTRNVmdzdEJicUFXbE1YcVlhSm9qV0V1VDdhNzFtcXFJRkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNGTlJXTVBSd0NLRDB5UGFBZjNMN0k2Mm1ZbUlxVFR5ZE9JTjFsRDNJTkpReXFCcG54QXRWY3JKTXl5Qk50dlY5WlFkSlM2Z1FUVnhRaGg1eTZTRkNRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MTA2NjExNzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTIwMzI4NTMyNzkyMTo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkN5cGhlciDDjGzDqXLDrW9sw7p3YSDwn42A8J+SjuKdpO+4j/Cfk4xcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTEwNjYxMTc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUzNTY3NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFENVBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ1UC5qc29uIjogIntcImtleURhdGFcIjpcIjU2MTkxbHAwclJjYmhmYjd3R2lBcWwycHhaRzc1aGRuRWNWd1BBZnVvajQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTA2OTcyMzE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUzNTY3Nzc5ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Cypher Ilerioluwa-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • Cypher ᴛᴇᴄʜ』*\n youtube.com/@cypherilerioluwa"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Cypher Ilerioluwa-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Cypher Ilerioluwa",


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
