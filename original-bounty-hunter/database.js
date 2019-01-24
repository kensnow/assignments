const uuid = require('uuid')

//constructor function
const Bounty = function({fName, lName, type, living=true, price=10}){
    this._id = uuid();
    this.fName = fName;
    this.lName = lName;
    this.living = living;
    this.price = price;
    this.type = type;

}

const Database = function(){
    this.bounties = []
}

Database.prototype.find = function(){
    return this.bounties
}

Database.prototype.save = function(target){
    newTarget = new Bounty(target);
    this.bounties.push(newTarget)
    return newTarget
}

Database.prototype.findByIdAndRemove = function(id){
    let foundTarget = this.bounties.find(target => {return(target._id === id)})
    if (!foundTarget) return false
    let index = this.bounties.indexOf(foundTarget)
    this.bounties.splice(index, 1)
    return true
}

Database.prototype.findByIdAndUpdate = function(id, updateTarget){
    let foundTarget = this.bounties.find(target => {return(target._id === id)})
    if (!foundTarget) return false
    let index = this.bounties.indexOf(foundTarget)
    let updatedBounty = {...foundTarget, ...updateTarget}
    this.bounties.splice(index, 1, updatedBounty)
    return updatedBounty
}

module.exports = new Database()