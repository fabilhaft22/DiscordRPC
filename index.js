const {Client, RichPresence} = require('discord.js-selfbot-v13')
const { Util } = require("discord.js-selfbot-rpc")
const ini = require('js-ini')
const fs = require('fs')


const RPCClient = new Client({
    checkUpdate: false
})

//grab the config
const config = ini.parse(fs.readFileSync("config.ini", "utf-8"));

RPCClient.on('ready', async () =>{
    const RPC = new RichPresence(RPCClient);

    //general rpc stuff
    RPC.setType(config.TYPE)
    RPC.setName(config.title)
    RPC.setDetails(config.details)

    if(config.state) RPC.setState(config.state)
    if(config.startTimeStamp) RPC.setStartTimestamp(config.startTimeStamp)
    if(config.endTimeStamp) RPC.setEndTimestamp(config.endTimeStamp)

    //try to add the images, if an application ID is defined
    if(config.applicationID !== null){
        config.applicationID = config.applicationID.slice(1, config.applicationID.length-1) //fix the broken string format due to the weird number parsing limit of 1347659594360553500
        RPC.setApplicationId(config.applicationID)
        if(config.largeImageName){
            let images = await Util.fetchAssets(config.applicationID)
            images = images.data;
            for(let i = 0; i < images.length; i++){
                if(images[i].name === config.largeImageName) RPC.setAssetsLargeImage(images[i].id)
            }
            if(config.largeImageHoverText !== null){
                RPC.setAssetsLargeText(config.largeImageHoverText);
            }
        }
        if(config.smallImageName !== null){
            let images = await Util.fetchAssets(config.applicationID)
            images = images.data;
            for(let i = 0; i < images.length; i++){
                if(images[i].name === config.smallImageName) RPC.setAssetsSmallImage(images[i].id)
            }
            if(config.smallImageHoverText){
                RPC.setAssetsSmallText(config.smallImageHoverText);
            }
        }
    }
    //buttons
    if(config.button1Text){
        RPC.addButton(config.button1Text, config.button1RedirectUrl)
    }
    if(config.button2Text){
        RPC.addButton(config.button2Text, config.button2RedirectUrl)
    }

    //random experimental shit
    if(config.platform) RPC.setPlatform(config.platform)
    if(config.sessionId) RPC.sessionId = config.sessionId
    if(config.url) RPC.setURL(config.url)
    if(config.syncId) RPC.syncId = config.syncId
    if(config.flags) RPC.flags = config.flags
    if(config.emoji) RPC.emoji = config.emoji
    if(config.party) RPC.setParty(config.party)
    if(config.secrets) RPC.setJoinSecret(config.secrets)
    if(config.metadata) RPC.metadata = config.metadata

    //start RPC
    RPCClient.user.setActivity(RPC)
    console.log("RPC IS LIVE!")
})

if(!config.TOKEN){
    console.log("You need to input your discord token for this RPC to work. If you have issues trusting this script, the full source code is up on github, or just dont use it at all.\nGoogle on how to find your token, its not hard.")
    while(true){
        continue;
    }
}
else{
    RPCClient.login(config.TOKEN)
}
