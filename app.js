const findSarah = () => {
    alert("I head to the crypt, I see a a door going to the basement where his crypt should be");
    alert("I go down to the stairs and see not 1 but 3 coffins in the crypt");
    let sarahFind = prompt("Which coffin do I choose? 1/2/3 --Type 1 response")
    switch(sarahFind) {
        case "1":
            alert("I force open the coffin, a mummy rises up and strangles me with it's bandages")
            findSarah()
            break;
        case "2":
            alert("I force open the coffin and see a portal in to the dark pits of hell")
            alert("A succubus grabs my arm, I try to resist but then 2 more grab me which overwhelms and drags me in to hell")
            findSarah()
        case "3":
            alert("I force open the Coffin and there I see Sarah sleeping")
            alert("I wake her up and she tells me she is too weak to walk")
            alert("I pick her up in to my arms and carry her out of that hellhole , feeling relieved that my friend is safe")
            alert("UURRRHHHH I feel a sharp pain through my whole body")
            alert("I see the light, then darkness")
            alert("I awake to see I am laying on a bed and Sarah in front of me")
            alert("She told me I fainted but I am alright now")
            alert("Feeling really cold I go to the bathroom to get a hot shower.")
            alert("I then freeze in astonishment because of what I see or more specifically what I don't see in the mirror")
            alert("I check other mirrors and realise I no longer have a reflection and feel thirsty, so thirsty")
            alert("So thats what he meant when he said that she will be with him for eternity!")
            alert("THE END")
    }
}



const defCountDracula = () => {
    alert("Drake turns to me for the first time with fear in his eyes");
    alert("Where is Sarah! Tell me or I will have to do something I don't want to do");
    alert("Drake turns to me and says 'She will be with me for eternity!' and launches towards me");
    let drakeDefeat = prompt("I need to act fast! Do I [Hug him/Stake/Gun/Cross --Type 1 response");
    switch(drakeDefeat) {
        case "Hug him":
        case "hug him":
            alert("For a moment you feel his cold heart turn warm...")
            alert("Then he bites you right in the jugular and drinks everything!")
            defCountDracula();
            break;
        case "Stake":
        case "stake":
            alert("I close my eyes and place the stake in front of me with the pointy end facing away from me");
            alert("I feel the stake plunge in to something tender");
            alert("I open my eyes to see that Drake landed on the stake and starts to age rapidly");
            alert("I ask him before he turns to dust 'Where is Sarah?");
            alert("He tells me that she is in a coffin in his crypt just before he turns completely to dust");
            findSarah();
            break;
        case "Gun":
        case "gun":
            alert("You used your last bullet on the Werewolf remember! Oh so this is how it feels being torn apart");
            defCountDracula();
            break;
        case "Cross":
        case "cross":
            alert("He somehow resists the pain hes feeling from the cross and reaches your throat to empty it");
            defCountDracula();

    }
}



const startEndGame = () => {
    alert("FINALLY! Drake or should I say Count Dracula! This is my only chance to set Sarah FREE!");
    alert("But theres a swarm of bats in the way! I have to get them away. BUT HOW?!");
    let continueToMidEndGame = prompt("I need to find a solution to cause the bats to disperse IMMEDIATELY! What could I possibly do? [Make a loud noise/Ask Drake/Open curtains/Turn on the radio --Type 1 response]");
    switch(continueToMidEndGame) {
        case "Make a loud noise":
        case "make a loud noise":
            alert("You let the bats know where you are! There was nothing left when they were finished with you");
            startEndGame();
            break;
        case "Ask Drake":
        case "ask drake":
            alert("He responded kindly by sending the bats to you. There was nothing left when they were finished with you");
            startEndGame();
            break;
        case "Open curtains":
        case "open curtains":
            alert("Great! The bats fled to find darkness!")
            alert("It seems to have also weakened Count Dracula!");
            alert("This would be a great time to ATTACK!")
            defCountDracula();
            break;
        case "Turn on the radio":
        case "turn on the radio":
            alert("The bats went wild by the sound of the radio and spread everywhere finding you and killing you!")
            startEndGame();
            break;
            default:
                alert("Check spelling and try again");
                startEndGame();
    }
}


const wereWolf = () => {
    alert("I walk down the corridor and hear a growling sound coming from a room");
    alert("I walk into that room and see a werewolf");
    alert("Oh no it noticed me, it turns around and leaps towards me so I run");
    let defWolf = prompt("I look in my bag, what do I use? [Grenade/Cross/Gun and silver bullet/Stake --Type 1 response]");
    switch(defWolf) {
        case "Gun and silver bullet":
        case "gun and silver bullet":
            alert("I turn around and shoot the Werewolf");
            alert("The Werewolf starts to shrink in size");
            alert("It transforms back in to a fiery haired woman");
            alert("I approach her and ask her if she has seen Sarah");
            alert("She told me Drake's real but sinister identity and directed me towards the crypt where Sarah is being held");
            startEndGame();
            break;
        case "Grenade":
        case "grenade":
            alert("Throwing a grenade in that enclosed space caused you to get caught in the explosion and die, who knows if it did anything to the Werewolf");
            wereWolf();
            break;
        case "Cross":
        case "cross":
            alert("Its a werewolf not a minion of Satan! It tore you a part anyway")
            wereWolf();
            break;
        case "stake":
        case "Stake":
            alert("You got too close and got torn to pieces")
            wereWolf();
            break;
            default:
                alert("Check spelling and try again")
                wereWolf();
    }
}



const ghost = () => {
    alert("I feel a chill run down my neck which feels more than just a breeze");
    alert("I turn around and see a ghost, I jump back with fright and stumble to the floor");
    alert("I quickly look in my bag of tricks to see if there is anything to get the ghost away");
    let defGhost = prompt("How do I get rid of Casper the unfriendly ghost? [Cross/Gun and silver bullet/Grenade/Stake --Type 1 response");
    
    switch(defGhost){
        case "cross":
        case "Cross":
            alert("Ghost vanquished and exorcised, lets keep walking down this creepy old corridor");
            wereWolf();
            break;
        case "Gun and silver bullet":
        case "gun and silver bullet":
            alert("Bullet phased through ghost then possessed you");
            ghost();
            break;
        case "Grenade":
        case "grenade":
            alert("The grenade did nothing to the ghost but blew your guts all over the corridor")
            ghost();
            break;
        case "stake":
        case "Stake":
            alert("You put a stake through the door but not the ghost so you got possessed");
            ghost();
            break;
            default:
            alert("check spelling and try again");
            ghost();
            break;
    }

}


const openDoor = () => {
    alert("I walk up to the door of creepy old house");
    alert("Hairs standing up at the back of my neck, goosebumps raised, warning me not to go in");
    alert("I pluck up the courage and turn the handle but to my dismay it does not open");
    let doorOpen = prompt("How do I get this door open? [Scream/Knock/Look under floor matt/Say open sesame! --Type 1 response]");
    
    switch(doorOpen) {
        case "Look under floor matt":
        case "look under floor matt":
    alert("Oh there is a key, lets see if it opens the door...");
    alert("Yes! It works! I enter");
    ghost();
            break;
            default:
    alert("It seems there is no one to answer my call. Try again or check spelling");
    openDoor();
            break;
    }
}


const startGame = () => {
    alert("Walking through graveyard looking for my friend Sarah who has gone missing");
    alert("She was last seen with her weird boyfriend Drake hence why I am walking across this graveyard to get to his");
    alert("For some reason my mate Mr Helsing gave me a bag of items that may help me on this trip.")
    alert("I can feel the ground shaking...");
    alert("What the hell zombies appearing from under the ground");
    alert("Oh no they're coming closer, I then decide to look inside the bag which Mr Helsing gave me");
    let playGame = prompt("What weapon do I use to defeat these Zombies? [Cross/Gun and silver bullet/Grenade/Stake --Type 1 response]");
    switch(playGame) {
        case "Grenade":
        case "grenade":
            alert("I throw the grenade, jump for cover, the Zombies have blown up lets go");
            openDoor();
            break;
        case "Gun and silver bullet":
        case "gun and silver bullet": 
            alert("OK you used the only bullet, what you going to do about the rest of them? They ate your brains");
            startGame();
            break;
        case "Cross":
        case "cross":
            alert("Whats that gonna do? Haven't you heard of religious dead people? They ate you")
            startGame();
            break;
        case "stake":
        case "Stake":
            alert("You got too close to them so they all ate you")
            startGame();
            break;
            default:
                alert("check spelling and try again")
                startGame();

    }
}