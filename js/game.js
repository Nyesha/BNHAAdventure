// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "",
    levels: {

        start: {
            message: "You wake up in the anime Boku no Hero Academia! After you unfourtantly hit your head! What will you do first?",
            choices: [
                {
                    text: "Go to School!",
                    nextLevel: "school",
                },

                {
                    text: "Explore the town!",
                    nextLevel: "town",
                },
            ]
        },

        town: {
            background_image: "fire.gif",
            music: "",
            message: "You come across a friendly blonde haired blue eyed boy named Mirio Togata! Mirio tells you that he'll be heading to school very soon and asks if you want to come with him? Will you!",
          
            choices: [
                {
                    text: "Go with him!",
                    nextLevel: "school",
                },
                
                 {
                    text: "Leave",
                    nextLevel: "intermediate",
                },
            ]
        },
        
        school: {
            background_image: "fire.gif",
            music: "",
            message: "Once at UA High School you meet Izuku Midoriya, Shoto Todoroki and Ochaco Uraraka. They were all very friendly and welcoming for the most part. They inform you that they have to head inside soon to go to class! Will you stay with them?",
          
            choices: [
                {
                    text: "Go to class with them!",
                    nextLevel: "classroom",
                },
                
                 {
                    text: "Leave",
                    nextLevel: "intermediate",
                },
            ]
        },

        classroom: {
            message: "Heading inside with them you meet even more people! You meet Superheros All Might and Eraserhead! and even more students! What an exciting day this turned out to be! Now what shall you do?",
            choices: [
                {
                    text: "Go home!",
                    nextLevel: "intermediate",
                },
            ]
        },
        
         intermediate: {
            message: "Oh no! You've hit your head while walking past a tree! You wake up on the ground in central park! You did not fulfill your superhero duties! Wanna try again? ",
            choices: [
                {
                    text: "Yes!",
                    nextLevel: "start",
                },
                   { 
                    text: "Nope",
                    nextLevel:"",
                },
            ]
        },

    }
};
