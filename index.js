function newTask(title, descritption) {
  const task ={
    title:title,
    description:descritption,
    complete:false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markComplete:function() {
     task.complete = true;
    } 

  };
  return task;
} 


const task1 = newTask('Clean Cat Litter', 'Take all the poop out of the litter box');
const task2 = newTask('Do laundry',"Wash n Dry");
const tasks = [task1,task2];


task1.logState();
task1.markComplete();
task1.logState();


