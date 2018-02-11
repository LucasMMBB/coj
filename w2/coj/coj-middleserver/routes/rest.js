const express = require('express'); // import express package
const router = express.Router(); // import router
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// business logic will be put in service
// router help us which service we need
const problemService = require('../services/problemService');



// Get all problems
router.get('/problems', function(req, res){
    console.log("Here is a request");
    // problemService returns a promise
    problemService.getProblems()
        .then(problems => res.json(problems));
});

// Get one problem by an id
router.get('/problems/:id', function(req, res){
    const id = req.params.id; // problem id
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
});

// POST problem
router.post('/problems', jsonParser, function(req, res){
    problemService.addProblem(req.body)
        .then(
            // resolve result
            (problems) => {
                res.json(problems);
            },
            (error) => {
                res.status(400).send("Problem name already exists!!");
            }
        );
});

// export
module.exports = router;