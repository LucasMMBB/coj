const ProblemModel = require('../models/problemModel');

const getProblems = function(){
    // date in database, so we need promise to handle asynchronous call
    return new Promise((resolve, reject) => {
        ProblemModel.find({}, function(err, problems){
            if(err){
                reject(err);
            }else{
                resolve(problems);
            }
        });
    });
}

const getProblem = function(id){
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({id: id}, function(err, problem){
            if(err){
                reject(err);
            }else{
                resolve(problem);
            }
        });
    });
}

const addProblem = function(newProblem){
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({name: newProblem.name}, function(err, data){
            if(data){
                reject('problem already exists');
            }else{
                ProblemModel.count({}, function(err, num){
                    newProblem.id = num + 1;
                    let mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(mongoProblem);
                });
            }
        });
    });
}

module.exports = {
    getProblems,
    getProblem,
    addProblem
}