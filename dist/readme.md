First of all, thank you very much for purchasing this script

If you did not purchase this script from gm-scripts.com, 
let us know where you got it from and not use it on your server 
or distribute it, otherwise we will take action


# Installation

1. Put the gm_npc folder in your resources folder

2. Create a folder with the name "gmconfig" where your server.cfg is if it doesn't already exist

3. Put the npc.json from the config folder in your gmconfig folder

4. Write "start gm_npc" in your server.cfg

Don't rename the resource or it won't work!


# Configuration

You can configure the script in the npc.json, 
on default it is configured to prevent all npcs from spawning.
Please restart the script after making changes

`"deleteAllVehicles"`
> This option has to be true or false
If true, it will remove all vehicles that randomly appear.
Necessary if you don't want to have any npc cars on your server, 
if you only deactivate "carSpawning" some vehicles will appear very seldom


`"deleteAllPeds"`
> This option has to be true or false
If true, it will remove all npcs that appear, 
it will also remove npcs wich are spawned by scripts.
Not necessary if you just don't want random npcs to spawn,
deactivating "pedSpawning" is sufficient.

`"pedSpawning"`
> This option has to be true or false
If false, it will remove all npcs that randomly appear

`"pedDensity"`
> This option has to be a number between 0.0 and 1.0
0.0 = no pedestrians on streets
1.0 = normal pedestrians on street

`"carSpawning"`
> This option has to be true or false
If false, it will remove (all) cars that randomly appear.
Vehicles will still appear very rarely, 
please use "deleteAllVehicles" to prevent this

`"carDensity"`
> This option has to be a number between 0.0 and 1.0
0.0 = no vehicles on streets
1.0 = normal vehicles on street

`"garbageTrucks"`
> This option has to be true or false
Random garbage trucks won't spawn if false

`"randomBoats"`
> This option has to be true or false
Random boats won't spawn if false

`"randomTrains"`
> This option has to be true or false
Random trains won't spawn if false

`"policeIgnorePlayer"`
> This option has to be true or false
Police will ignore the player if true

`"dispatchTypes"`
> Each option has to be true or false
Prevents npcs from being alerted, 
for example a firetruck is showing up on a fire


# Support

If you need help with this script or have questions,
feel free to join our [Discord](https://discord.gg/b56mqFUSaz)