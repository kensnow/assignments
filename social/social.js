
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
    experience: 140,
    title: "apprentice",
    completedQuests: [{
        grandeurPeak: {
            elevation:  8299,
            expVal: 50,
            via: {
                westFace: {
                    distance: 
                }
            }
            
        },

    }]



}

console.log("test " + mountainQuestProfile.completedQuests[0].grandeurePeakWestFace.elevation)