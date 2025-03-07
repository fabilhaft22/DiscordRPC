const {Client, RichPresence} = require('discord.js-selfbot-v13')
const { Util } = require("discord.js-selfbot-rpc")
const fs = require('fs')



const RPCClient = new Client({
    checkUpdate: false
})

//grab the config
const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));



RPCClient.on('ready', async () =>{
    const RPC = new RichPresence(RPCClient);

    //general rpc stuff
    RPC.setType(config.TYPE)
    RPC.setName(config.name)
    RPC.setDetails(config.details)
    RPC.setState(config.state)

    //try to add the images, if an application ID is defined
    if(config.applicationID !== 0){
        RPC.setApplicationId(config.applicationID)
        if(config.largeImageName !== ""){
            let images = await Util.fetchAssets(config.applicationID)
            images = images.data;
            for(let i = 0; i < images.length; i++){
                if(images[i].name === config.largeImageName) RPC.setAssetsLargeImage(images[i].id)
            }
            if(config.largeImageHoverText !== ""){
                RPC.setAssetsLargeText(config.largeImageHoverText);
            }
        }
        if(config.smallImageName !== ""){
            let images = await Util.fetchAssets(config.applicationID)
            images = images.data;
            for(let i = 0; i < images.length; i++){
                if(images[i].name === config.smallImageName) RPC.setAssetsSmallImage(images[i].id)
            }
            if(config.smallImageHoverText !== ""){
                RPC.setAssetsSmallText(config.smallImageHoverText);
            }
        }
    }
    //buttons
    if(config.button1Text !== ""){
        RPC.addButton(config.button1Text, config.button1RedirectUrl)
    }
    if(config.button2Text !== ""){
        RPC.addButton(config.button2Text, config.button2RedirectUrl)
    }

    //start RPC
    RPCClient.user.setActivity(RPC)

    console.log("RPC IS LIVE!")
})

if(config.YOUR_DISCORD_TOKEN === ""){
    console.log("You need to input your discord token for this RPC to work. If you have issues trusting this script, the full source code is up on github, or just dont use it at all.\nGoogle on how to find your token, its not hard.")
}
else{
    RPCClient.login(config.YOUR_DISCORD_TOKEN)
}