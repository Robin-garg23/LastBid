'use strict';

var Auction = require('../model/appModel.js');

exports.list_all_tasks = function(req, res) {
  Auction.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};



exports.create_a_task = function(req, res) {
  var new_task = new Auction(req.body);

  //handles null error 
   if(!new_task.task || !new_task.status){

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
else{
  
  Auction.createTask(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
};


exports.read_a_order = function(req, res) {
  Auction.getOrdersById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.read_a_profile = function(req, res) {
  Auction.getProfileById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_task = function(req, res) {
  Auction.updateById(req.params.taskId, new Auction(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Auction.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};