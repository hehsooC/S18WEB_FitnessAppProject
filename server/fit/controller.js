var express = require('express');
var Fit = require('./model');

var app = express.Router();
 
var fit = new Fit(); 
     
  
module.exports = app
    // get state of server
    .get('/state', (req, res) => res.send(fit))
    // create a new user
    .get('/sign-up', (req, res) =>{
     res.send( fit.SignUp(req.query.name, req.query.password) );
    })
    .get('/exercise/login', (req, res) =>{
        res.send( fit.LogIn(req.query.name, req.query.password));
    })
    // Give other users' name to Me
    .get('/exercise/people', (req, res) => {
        res.send(fit.GiveUserList(req.query.name));
    })
    // Give Me's requested status 
    .get('/exercise/request/state', (req, res) => {
        res.send(fit.GiveRequestState(req.query.name));
    })
  /*   .get('/exercise/user', (req, res) => {
        res.send(fit.GiveUser(req.query.name));
    }) */
/*     .get('/exercise/getDay', (req, res) => {
        res.send(fit.GetDay(req.query.name));
    })
    .get('/exercise/getMonth', (req, res) => {
        res.send(fit.GetDay(req.query.name));
    }) */
    // Give summary of a user
    .get('/exercise/summary', (req, res) => {
        res.send(fit.GetSummary(req.query.user, req.query.key));
    })
    // post profile to a server
    .post('/exercise/profile', (req, res) =>{
        var profile = fit.ProfileAdd(req.body.Age, req.body.Weight, req.body.Height, 
                        req.body.GoalWeight, req.body.BMI, req.body.GoalBMI, 
                        req.body.name);
        res.send(profile);
    })
    // post set date and month to the server
    .post('/exercise/setDay', (req, res) => {
        res.send(fit.SetDay(req.body.name, req.body.key, req.body.month, req.body.date));
     })
    .post('/exercise/choose', (req, res) =>{
        var plan = fit.PlanWorkout(req.body.name, req.body.Text);
        res.send(plan);
    })
    .post('/exercise/planHistory', (req, res) =>{
        var plan = fit.PlanHistory(req.body.name, req.body.Text, req.body.key);
        res.send(plan);
    })
    .post('/exercise/chosen', (req,res) => {
        res.send(fit.MakeChosen(req.body.name, req.body.text));
    })
    .post('/exercise/done', (req, res) => {
        res.send(fit.DoneExercise(req.body.name, req.body.text, req.body.time, req.body.set, req.body.total));
    })
    .post('/exercise/totaltime', (req, res) => {
        var time = fit.GetTotalTime(req.body.name, req.body.key, req.body.totalTime);
        res.send(time.toString());
    }) 
    .post('/exercise/recordDay', (req, res) => {
        res.send(fit.RecordDay(req.body.name, req.body.key, req.body.text, req.body.time, req.body.set, req.body.total));
    })
    .post('/exercise/request', (req,res) => {
       res.send( fit.FriendRequest(req.body.friend, req.body.name));
    })
    .post('/exercise/addFriend', (req,res)=>{
        res.send(fit.AddFriend(req.body.name, req.body.friend));


    })
    .post('/exercise/changeRequest', (req, res) => {
        fit.ChangeRequested(req.body.name);
    })
 
 
    
    
    ;

    // this works but couldn't find api database for workout
    //.post('/exercise/info', (req, res) => res.send( fit.GetHealthInfo()))
/*     .post('/exercise', (req, res) => {
        
        try {
            console.log('text body is ' + req.body.Text);
            fit.SubmitWorkout(req.body.Text, req.body.UserId);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message }); 
        }
    })
   */
 
 