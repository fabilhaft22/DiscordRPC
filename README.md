---

# DiscordRPC

This script allows you to create a custom Discord Rich Presence using a Discord selfbot.

### **Benefits of Using a Selfbot for Rich Presence:**

- It can be run even if Discord is not open on your PC.
- It can be uploaded to a server to run continuously without the need to keep your PC on.
- It avoids crashing when changing your Discord status from offline to another status.

### **Disadvantages:**

- Using a selfbot is against Discord’s Terms of Service, though it is unlikely to result in a ban if you do not use the selfbot for inappropriate activities such as raiding or publicly boasting about it. (Please exercise caution and avoid misuse.)
- Requires Node.js to be installed. (If you dont use the executable)
- You must install Node.js, npm, and two additional packages. (If you dont use the executable)

If you prefer to simplify the setup process, you can download the [exe](https://github.com/fabilhaft22/DiscordRPC/releases/tag/v1.1.0exe), which eliminates the need to install Node.js and the required packages.  
However, note that you will not be able to run this properly on a server using the executable.

---

## **Using the Source Code Instead of the Executable**

If you wish to run this script on a server for continuous operation:

- You can use any hosting provider that supports Discord bots. Personally, I use the free server provided by "lunes.host". If you choose to use this service, make sure to log into their dashboard at least once every 30 days, as inactive servers are deleted along with their files.

The following Node.js packages must be installed for the script to function properly:

### **Install `discord.js-selfbot-v13`**:
```
npm i discord.js-selfbot-v13
```

### **Install `discord.js-selfbot-rpc`**:
```
npm i discord.js-selfbot-rpc
```

### **Install `js-ini`**:
```
npm i js-ini --save
```

Please refer to the `instructions.txt` file for details on setting up and running the Rich Presence.

For usage and distribution, please refer to the license.

---
