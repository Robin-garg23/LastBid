'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
   
   app.route('/orders/:orderId')
    .get(todoList.read_a_order)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    
    app.route('/profile/:userId')
     .get(todoList.read_a_profile);
    };
