# DiscordRPC

This is a small and simple script to make a custom Discord Rich Presence with the help of a discord selfbot

Benefits of using a selfbot for RPC:
- Can be run even if discord is not running on your pc.
- Can be uploaded to a server to have it run permanently, without you having to keep your pc running.
- Doesnt crash each time you change your discord status from offline to any other status.

Disadvantages:
- against discord ToS, but is very unlikely of being bannable, if youre not using a selfbot for obvious stuff like raiding or you dont brag about using a selfbot (Please dont be stupid.)
- making sure you are able to run node.js
- having to install node.js and npm and having to install 2 packages

If you want to make your life a bit easier, you can download the [exe](https://github.com/fabilhaft22/DiscordRPC/releases/tag/v1.1.0exe) to skip the steps of installing nodejs and the packages      
Keep in mind, you will not be able to run this on a server properly using the exe.


## IF YOU GO WITH THE SOURCE CODE INSTEAD OF THE EXE

IF YOU DO WANT TO USE A SERVER TO HAVE THIS RUNNING PERMANENTLY
- You can use any hoster that allows Discord Bots to be hosted (I personally use the free server that "lunes.host" provides. If you do decide to use this one aswell, make sure to enter their dashboard every 30 days or else they will delete the server including all files on the server)

The following node.js packages have to be installed for this script to work

**discord.js-selfbot-v13**
```
npm i discord.js-selfbot-v13
```
**discord.js-selfbot-rpc**
```
npm i discord.js-selfbot-rpc
```
**js-ini**
```
npm i js-ini --save
```


READ "instructions.txt" FOR INFO ON HOW TO GET THE RICH PRESENCE RUNNING PLEASE

FOR USAGE AND DISTRIBUTION REFER TO THE LICENSE
