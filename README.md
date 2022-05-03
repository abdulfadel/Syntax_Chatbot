![image](https://user-images.githubusercontent.com/92131037/160317699-9ccb4836-cee9-4dc6-893c-477d3a6a2477.png)

Syntax AI - Call Coding Documentation With Simple Commands 



Syntax AI / Syntax Sparkers                                                                       
                                                                                                  
Objective: Create a list of hard coded commands that can be executed in Discord via prefix.       
	   Once all data is collected we will create a neural network using tensorflow.js         
	   Bot's purpose is to help scour the internet for coding sources and syntax example      
                                                                                                  
                                                                                                  
                                                                                                  
GitHub: https://github.com/abdulfadel/syntaxai                                                    
Node.js: https://nodejs.org/en/                                                                   
Discord Dev Portal: https://discord.com/developers/docs/intro                                     
Discord Permissions Calc: https://discordapi.com/permissions.html                                 
Discord.js: https://discordjs.guide/#before-you-begin                                             
Discord Link: https://discord.gg/zP3eEseR                                                         
                                                                                                  
I've created a few videos so far providing further explanations                                   
                                                                                                  
Setting up your environement: https://youtu.be/0hQTCdR6XeY                                        
                                                                                                  
Walkthrough: https://youtu.be/sUhSknGXq_8                                                         

### Syntax AI Update

- Refactored command handling using Discord.js
- All commands must now begin with a lowercase letter.
- Main.js renamed to Index.js .
- Index.js no longer needs to be updated with each command.
- Removed the need to have an extensive else/if statement in the Index.js file.
- Replaced **.env** with **config.json** file:
_Follow the config template to test out deployable commands before contributing._
- **Deploy-Commands.js** now pushes all new commands to global commands (must run once before enabling the command via Discord).
- Added dependency for rest API [Discord DJS REST API](https://www.npmjs.com/package/@discordjs/rest).
- Replaced the minus ( - ) prefix to a global slash (  /  ) command prefix.
- Commands are now displayed in a drop-down menu via Discord making it easier for users to explore new commands.


![image](https://user-images.githubusercontent.com/92131037/166558066-390a9517-628c-45cd-9435-5854fafac56d.png)

- Commands are now located in a **"Commands"** folder:

![image](https://user-images.githubusercontent.com/92131037/166558736-d399298b-879a-4d77-9c70-9fb0b8011933.png)

