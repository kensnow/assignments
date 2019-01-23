const uuid = require('uuid');

const Trails = function (trailInfo) {
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

Database.prototype.find = function(){
    return this.Trails
}

Database.prototype.save = function(trailInfo){
    const newTrail = new Trails(trailInfo)
    this.Trails.push(newTrail)
    return newTrail
}

Database.prototype.findByIdAndRemove = function(trailId){
    const foundTrail = this.Trails.find((trail) => {
        return (trail._id === trailId)
    })
    
    if(!foundTrail) return false
    const index = this.Trails.indexOf(foundTrail)
    this.Trails.splice(index, 1)
    return true
}

module.exports = new Database()
