const uuid = require('uuid');

const Trail = function (trailInfo) {
    this._id = uuid();
    this.name = trailInfo.name;
    this.area = trailInfo.area;
    this.state = trailInfo.state;
    this.difficulty = trailInfo.difficulty;
    this.elevationHigh = trailInfo.elevationHigh;
    this.vertical = trailInfo.vertical;
    this.distance = trailInfo.distance;
    
}

const Database = function(){
    this.Trails = []
}  //this builds the database as an array of the trail objects

Database.prototype.find = function(trailId){
    
    if (trailId){
        let foundTrail = this.Trails.find(trail => {return trail._id === trailId})
        return foundTrail
    } else {
        return this.Trails
    }
    
   
}

Database.prototype.save = function(trailInfo){
    const newTrail = new Trail(trailInfo)
    this.Trails.push(newTrail)
    return newTrail
}

Database.prototype.findByIdAndRemove = function(trailId){
    let foundTrail = this.Trails.find((trail) => {return (trail._id === trailId)})

    if(!foundTrail) return false
    let index = this.Trails.indexOf(foundTrail)
    this.Trails.splice(index, 1)
    return true
}

Database.prototype.findByIdAndUpdate = function(trailId, updates){
    let foundTrail = this.Trails.find(trail => {return trail._id === trailId})

    if(!foundTrail) return false
    let index = this.Trails.indexOf(foundTrail)
    let updatedTrail = {...foundTrail,...updates}
    this.Trails.splice(index, 1, updatedTrail)
    return(updatedTrail)
}

module.exports = new Database()
