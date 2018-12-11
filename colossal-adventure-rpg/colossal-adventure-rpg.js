/*
Colossal Adventure (Console RPG)
20 JULY 2015 on Programming Principles, Level 2, Project
The year is 1985. Your job is to build a text-based (console) RPG game.

The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

Project Requirements:
Console must greet player with a fun message
Console must ask for the player's name and store it
Walking:
The console will ask the user to enter a "w" to walk
Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
If a wild enemy appears:
The enemy is random (can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, you will choose a random attack power between a min and max
If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
If the enemy kills the player the console prints an cool death message and the game ends
Inventory
When the player kills enemies, they are awarded with items
If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
Passing Criteria: Demo to the Instructor/TA & Code Review
An instructor or TA will look through your code with you and make sure you have a solid grasp on using functions, loops, and conditionals in JavaScript, as well as to verify that you're following JavaScript code standards and good general programming practices.

This project passes off the following levels of the Skills Tree:

Programming Principles, Level 2
*/


var rs = require("readline-sync")
var gearArray = require("./gear_data")
var weaponArray = require("./weapon_data")


//----------------- set up player and enemy constructors -------------
function Player(name){
    this.name = name;
    this.hp = 20;
    this.maxhp = 20;
    // this.mp = 5;
    // this.maxmp = 5;
    this.level = 1;
    this.exp = 0;
    this.nextLevel = 25;
    this.equipped = {
        mainHand : {},
        offHand : {},
        head : {},
        chest : {},
        legs : {},
    };
    this.inventory = [];
    this.isAlive = true;
    this.baddiesKilled = [];
    this.attack = 10;
    this.armor = 0;
    this.prone = false
    //add skills tree?

}

//use prototype to create base baddie, use alt baddie generator to populate baddie
function Baddie(type, modifier, hp, level, attack, armor, expGiven){
    this.type = type;
    this.modifier = modifier;
    this.hp = hp;
    // this.mp = mp;
    this.level = level;
    this.attack = attack;
    this.armor = armor;
    this.expGiven = expGiven;
    this.isAlive = true;
    this.prone = false;
    // this.equipped = equipped;
}

//create functional Logic

function Weapon(name, type, power,rarity){
    this.name = name;
    this.type = type;
    this.power = power;
    this.rarity = rarity;
}
function Armor(name, type, armor, slot, rarity){
    this.name = name;
    this.type = type;
    this.armor = armor;
    this.slot = slot;
    this.rarity = rarity;
}


function getUserInput(){
    response = "";
    while (response != "w"){
        response = rs.keyIn("Press \'w\' to continue on your journey...\nPress \'i\' for charachter status\n",{limit: "wiq"})
        if (response === "i"){
            console.log(player.name+"\nHP: "+player.hp+"\nMaxHP: "+player.maxhp+"\nLevel: " + player.level + "\nExp :"+ player.exp+"\nNext Level: " + player.nextLevel)
            console.log("Equipped:\nMain Hand: " + player.equipped.mainHand.name + " Power: " + player.equipped.mainHand.power + " Rarity: " + player.equipped.mainHand.rarity + "\n")
            console.log("Gear:\nChest: " + player.equipped.chest.name + " Armor: "+ player.equipped.chest.armor +"\nLegs: " + player.equipped.legs.name + " Armor: " + player.equipped.legs.armor + "\nHead: " + player.equipped.head.name + " Armor: " + player.equipped.head.armor)
        }
        if (response === "q"){
            player.isAlive = false;
        }
    }
    return response;
}

function equipWeapon(weapon){
    player.equipped.mainHand = weapon
    player.attack += weapon.power
    console.log(player.name + " has equipped " + player.equipped.mainHand.name)
}

function removeWeapon(weapon){
    console.log(player.name + " has unequipped " + player.equipped.mainHand.name)
    player.attack -= weapon.power
    player.equipped.mainHand = ""
    player.inventory.push(weapon)
    
}
function equipGear(item){
    //takes in gear object, adds name to char gear, adjusts modifiers
    //add gear to 'equipped' group
    
    player.equipped[item.slot] = item
    player.armor += item.armor
    console.log(player.name + " has equipped " + player.equipped[item.slot].name)
    //modify attack or armor
}

function removeGear(item){
    //remove type of gear
    //modify attack/armor
    console.log(player.name + " has unequipped " + item.name)
    player.equipped[item.slot] = {}
    player.armor -= item.armor
    player.inventory.push(item)
}
function getRandomNum (n){
    // takes n as the high parameter, generates random number
    randomNumber = Math.floor(Math.random() * n)
    return parseInt(randomNumber)
}

function checkLevelUp(){
    //time to level up!
    
    if (player.exp >= player.nextLevel){
        player.level++
        player.maxhp += Math.round(player.hp * level / 8)
        player.hp = player.maxhp
        player.nextLevel *= 1.8
        console.log ("***" + player.name + " has hit level " + player.level + "!***")
    }
    
}

function lootGenerator(enemy){
    loot = []
    itemRoll = getRandomNum(100)
    //adjustment for harder guys
    if (enemy.modifier === "King"){
        itemRoll += 60
    } else if (enemy.modifier === "elite"){
        itemRoll += 20
    }

    if (itemRoll < 60){
        console.log("the " + enemy.type + " did not have anything to loot")
    } else if (itemRoll >= 60 && itemRoll <= 95){
        if (itemRoll % 4 == 0){
            //generate weapon
            weapon = getWeapon()
            loot.push(weapon)
        } else {
            //generate armor
            armor = getArmor()
            loot.push(armor)
        }
        return loot
        //generate 1 item
    } else {
        //generate 2 -3 items

        for (i = 0; i < getRandomNum(4);i++){
            if (getRandomNum(13) % 4 == 0){
                //generate weapon
                weapon = getWeapon()
                loot.push(weapon)
            } else {
                //generate armor
                armor = getArmor()
                loot.push(armor)
            }
        }
        return loot
    }
    
}
//Weapon(name, type, power,rarity)
function getWeapon(){
    var uniqueRoll = getRandomNum(100)
    // console.log("unique roll in getWeapon is " + uniqueRoll)
    var weaponTemplate = weaponArray[getRandomNum(weaponArray.length)]
    var goodNames = ["Sharp", "Keen", "Gleaming", "Quick"]
    var badNames = ["dull", "heavy", "slow", "cracked"]
    // if (uniqueRoll){
    if (uniqueRoll > 95){
        name = "Epic " + weaponTemplate.name
        power = Math.round(weaponTemplate.power + weaponTemplate.power * (1 + getRandomNum(100)/80))
    } else if (uniqueRoll > 80 && uniqueRoll <= 95){
        name = goodNames[getRandomNum(goodNames.length)] + " " + weaponTemplate.name
        power = Math.round(weaponTemplate.power + weaponTemplate.power * (1 + getRandomNum(100)/200))
    } else if (uniqueRoll < 20){
        name = badNames[getRandomNum(badNames.length)] + " " + weaponTemplate.name
        power = Math.round(weaponTemplate.power - weaponTemplate.power * (1 + getRandomNum(100)/300))
        if (power < 1){
            power = 1;
        }
    } else {
        name = weaponTemplate.name
        power = weaponTemplate.power
    }
    var weapon = new Weapon(name, weaponTemplate.type,power,weaponTemplate.rarity)
    // console.log(weapon.name + " has been generated!")
    return weapon
}
// /Armor(name, type, armor, slot, rarity)
function getArmor(){

    var uniqueRoll = getRandomNum(100)
    // console.log("unique roll in getArmor is " + uniqueRoll)
    var armorTemp = gearArray[getRandomNum(gearArray.length)]
    var goodNames = ["Sturdy", "Gleaming", "Comfortable", "Fitted"]
    var badNames = ["broken", "worn", "old", "used"]
    // if (uniqueRoll){
    if (uniqueRoll > 95){ 
        name = "Epic " + armorTemp.name
        armor = Math.round(armorTemp.armor + armorTemp.armor * (1 + getRandomNum(100)/80)) 
    } else if (uniqueRoll > 80 && uniqueRoll <= 95){
        name = goodNames[getRandomNum(goodNames.length)] + " " + armorTemp.name
        armor = Math.round(armorTemp.armor + armorTemp.armor * (1 + getRandomNum(100)/200))
    } else if (uniqueRoll < 20){
        name = badNames[getRandomNum(badNames.length)] + " " + armorTemp.name
        armor = Math.round(armorTemp.armor - armorTemp.armor * (1 + getRandomNum(100)/300))
        if (armor < 1){
            armor = 1
        }
    } else {
        name = armorTemp.name
        armor = armorTemp.armor
    }
    var gear = new Armor(name,armorTemp.type, armor, armorTemp.slot, armorTemp.rarity)
    // console.log(gear.name + " has been generated!")
    return gear
}
// --------------------ENEMIES---------------------------------------//
enemies = ["goblin", "orc", "gnoll", "bandit", "kolob", "zombie"]

function spawnEnemy(){
    modifier = getModifier(getRandomNum(100))
    type = enemies[getRandomNum(enemies.length)]
    level = generateLevel(modifier)
    // hp = 5 * level;
    hp = generateHP(level,modifier)
    expGiven = 5 * level;
    attack = 3 * level; //can make this more dynamic later
    armor = 1 * level;
    var enemy = new Baddie(type, modifier, hp, level, attack, armor, expGiven)
    
    //get modifier
    //get type
    //populate hp, level, exp given, equipped
    combatEvent(enemy)
}

function generateHP(level, mod){
    baseHp = 5 * level;
    if (mod === "weak"){
        hp = getRandomNum(100)/100 * baseHp
        if (hp < 2){
            hp = 2;
        }
    } else if (mod === "elite"){
        hp = getRandomNum(100)/100 * level + baseHp 
    } else if (mod === "King"){
        hp = getRandomNum(100)/100 * (level * 1.5) + baseHp
    } else {
        hp = getRandomNum(100)/100 * level / 5 + baseHp
    }

    return Math.round(hp)
}

function generateLevel(mod){
    level = 0;
    if(mod === "weak"){
        level = player.level - 2
    } else if (mod === "normal"){
        chance = getRandomNum(100)
        if (chance <= 33){
            level = player.level - 1
        } else if (chance > 33 && chance <= 66){
            level = player.level
        } else {
            level = player.level + 1
        }
    } else if (mod === "elite"){
        chance = getRandomNum(100)
        if (chance <= 50){
            level = player.level + 1
        } else {
            level = player.level + 2
        }
    }
        else if (mod === "King"){
            chance = getRandomNum(100)
            if (chance <= 50){
                level = player.level + 2
            } else {
                level = player.level + 3
            }
            
        }
    if (level < 1){
        level = 1;
    }
    return level;
}

function getModifier(n){
    // console.log("get modifier n:" + n)
    mod = ""
    if (n <= 33){
        mod = "weak"
    } else if (n > 33 && n <= 80){
        mod = "normal"
    } else if (n > 80 && n <= 95){
        mod = "elite"
    } else {
        mod = "King"
    }
    return mod;
}

// ----------------COMBAT -------------------------------------------//
function killedEnemy(enemy){
    player.baddiesKilled.push(enemy)
    player.exp += enemy.expGiven
    console.log(player.name + " gained " + enemy.expGiven + "exp!")
    checkLevelUp();
    items = lootGenerator(enemy);
    if (items){
        equipLoot(items)
    }

}

function equipLoot(items){
    for(i = 0; i < items.length; i++){
        console.log("You have looted " + items[i].name)
        
        answer = rs.keyInYN("Would you like to equip " + items[i].name + "?")
        if (answer){
            //if item is weapon
            console.log("item type: " + items[i].type)
            if (items[i].type === "weapon"){
                removeWeapon(player.equipped.mainHand)
                equipWeapon(items[i])
            } else {
                
                gearSlot = items[i].slot
                //check if gear exists
                if(player.equipped[gearSlot].name){
                    removeGear(player.equipped[gearSlot])
                }
                equipGear(items[i])
            }
            //if item is armor
        } else {
            player.inventory.push(items[i])
        }
    }

}

function playerAttack(enemy, proneEnemy){
    let move = rs.keyIn("Press \'a\' to attack!\nPress \'r\' to attempt to run!\n",{limit: "ar"})
    if (move === "a"){
        //do attack stuff
        proneModifier = 1;
        critModifier = 1;
        if (proneEnemy){
            proneModifier = 2
        }
        criticalRoll = getRandomNum(100)
        if (criticalRoll > 95){
            console.log(player.name + " Scores a Critical Hit!!")
            critModifier = (1 + (getRandomNum(100)/100))
        }
        let attackVal = parseInt(getRandomNum(100)/100 * player.attack * proneModifier * critModifier)
        armorCheck = Math.round(getRandomNum(100)/100 * enemy.armor)
        damage = attackVal - armorCheck
        if (damage < 0){
            damage = 0
        }
        console.log(player.name + " attackVal: " + attackVal + " armorCheck: " + armorCheck + " damage: " + damage)
        console.log(player.name + " attacks for " + damage + "\n")
        enemy.hp -= damage;
        if (enemy.hp <= 0){
            enemy.isAlive = false;
            console.log ("***You have defeated the " + enemy.modifier + " " + enemy.type + "!***")
            killedEnemy(enemy)
        }
        return false
    } else {
        runCheck = getRandomNum(100)
            if (runCheck > 50){
                console.log("You flee from battle!\n")
                escapeBattle(enemy)
            } else {
                console.log("You fail to escape!\n")
                prone = true;
                changeProneState(player,prone)
                return false

            }
    }
}

function escapeBattle(enemy){
 
    enemy.isAlive = false;
    
}
function changeProneState(entity, prone){
    if (entity == player){
        player.prone = prone
    } else {
        enemy.prone = prone
    }
}

function enemyAttack(prone, enemy){
    if (enemy.isAlive){
        let attackVal = 0;
        critModifier = 1;
        criticalRoll = getRandomNum(100)
        if (criticalRoll > 95){
            console.log(enemy.type + " Scores a Critical Hit!!")
            critModifier = (1 + (getRandomNum(100)/100))
        }
        if (prone === true){
            attackVal = parseInt(getRandomNum(100)/100 * enemy.attack * 2 * critModifier)
        } else {
            attackVal = parseInt(getRandomNum(100)/100 * enemy.attack * critModifier)
        }
        armorCheck = Math.round(getRandomNum(100)/100 * player.armor)
        damage = attackVal - armorCheck
        console.log(enemy.type + " attackVal: " + attackVal + " armorCheck: " + armorCheck + " damage: " + damage)
        if (damage < 0){
                damage = 0
            }
        console.log (enemy.modifier + " " + enemy.type + " attacks for " + damage + "\n")
        player.hp -= damage
        if (player.hp <= 0){
            player.isAlive = false;
            playerDead(player)
            
        }
    }
}

function playerDead (player){
    console.log(player.name + " has died...")
    console.log("Level attained: " + player.level)
    console.log("Enemies Killed: " + player.baddiesKilled.length)
    for (i = 0; i < player.equipped.length; i++){
        console.log("Equipment: " + player.equipped[i])
    }
    module.exports.player = player
    
}

function combatEvent(enemy){
    let sucessfulRun = false;
    let combatRoll = getRandomNum(100)
    let firstMove = true;
    var pronePlayer = false;
    let proneEnemy = false;
    console.log("You have encountered a " + enemy.modifier + " " + enemy.type + "!")
    while (player.isAlive && enemy.isAlive){
        if (firstMove){
            firstMove = false;
            if (combatRoll < 10){
                console.log("You have been surprised by the " +  enemy.modifier + " " + enemy.type)
                pronePlayer = true;
            } else if (combatRoll > 90){
                console.log("You have snuck up on a " + enemy.modifier + " " + enemy.type)
                proneEnemy = true;
            }
        }
        
        //player attack
        console.log(player.name + " HP:" + player.hp)
        console.log("level " + enemy.level + " " + enemy.modifier + " " + enemy.type + " HP:" + enemy.hp)

        if (combatRoll >= 50){
            successfulRun = playerAttack(enemy, proneEnemy)
            if (enemy.isAlive){
                enemyAttack(pronePlayer, enemy)
                proneEnemy = false;  
            }
            
        } else {
            enemyAttack(pronePlayer, enemy)
            if (player.isAlive){
                successfulRun = playerAttack(enemy, proneEnemy)

                pronePlayer = false;
            }
            
            
        }

        
        
        //baddie attack


    }


}



//------------------Main Game & Loop -------------------------------//

function generateEvent(){
    randomNumber = getRandomNum(100)
    
    // console.log(randomNumber)
    if (randomNumber <= 33){
        spawnEnemy()
    }
    else if (randomNumber > 85 && randomNumber <= 100) {
        incrementHealth()
    }
    
}

function incrementHealth(){
    if (player.hp < player.maxhp){
        //raise health
        player.hp += 1;
        console.log("hp up! hp is now " + player.hp) 
    } else {
        //max health reached
    }

}

var name = rs.question("Another one for the meat grinder?  Great!  What is your name?\n")
var player = new Player(name)

console.log("You have lived a sheltered life so far.  As young people are, you have grown restless in the confines and safety in the village of Sanctuary.  While well protected from the dangers of the outside wild, it lends to a dull existance.  At least you think so... On this day, you decide to sneak outside of the safety of the town's walls, in search of fame and fortune to any end.")

begin = rs.keyIn("Press \'w\' to continue\n",{limit: "w"})
console.log("Let's put on some clothes first...")
equipGear(gearArray[0])
equipGear(gearArray[1])
equipWeapon(weaponArray[0])
//create game loop/logic
//while the player is alive, run game loop
while(player.isAlive){
    getUserInput();
    generateEvent();
    

}


