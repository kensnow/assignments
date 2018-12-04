
/*
Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

At least 3 nested levels of data (including objects and arrays)
At least 1 method
Span across at least 50 lines of code. (No empty lines)


Example:

var mountainClimber = {
    name: "Bob",
    age: 31,
    favoriteClimbs: [],
    mountainClimbingFriends: [
        {
            name: "Sarah",
            age: 31,
            favoriteClimbs: [
                {
                    climbName: "Mount Everest",
                    difficulty: 10
                },
//                ... etc ...
            ]
        },
        {
            
        }
    ]
}
After you create the base object, you need to:

Add 2 properties to one of the objects (doesn't matter what level of nested data you do this to)
Add 2 items to at least one of the arrays in your data

*/

var mountainQuestProfile = {
    profileName: "SnowHiker",
    name: "Ken Snow",
    level: 2,
    experience: function (){
        var expSum = 0;
        for(var i = 0; i < this.completedQuests.length; i++){
            expSum += this.completedQuests[i].expVal;
            console.log("i is " + i);
            console.log("this is " + this.completedQuests[i].expVal);
            console.log("expSum is " + expSum);
        }
        return expSum;
    },
    title: "apprentice",
    completedQuests: [{
        name: "Grandeur Peak",
        location: "Salt Lake City",
        elevation:  8299,
        expVal: 50,
        trail: {
            westFace: {
                name: "West Face of Grandeur Peak",
                distance: 2.2,
                rt: 4.4,
                vert:3302,
            },
            churchFork:{
                name: "Grandeur peak via Curch Fork",
                distance:  2.7,
                rt: 5.4,
                vert:2340,
            } 
        }
    },
    {       name: "Salt Lake Overlook", 
            location: "Millcreek Canyon",
            elevation: 7003,
            expVal:25,
            trail: {
                desolation:{
                    distance: 2.2,
                    vert:1232
                }
            }


        }

    ],
}

console.log("test " + mountainQuestProfile.completedQuests[0].trail.westFace.distance)

//add 2 properties, lets add a quest completed and some properties

mountainQuestProfile.completedQuests.push({
        name: "Gobbler's Knob",
        location:"Millcreek Canyon",
        elevation: 10246,
        expVal:60,
    
},{     name: "Mount Raymond", 
        location:"Millcreek Canyon",
        elevation:10241,
        expVal:60,
    
});

console.log(mountainQuestProfile.experience());