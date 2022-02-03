var task=[];
var userInput;

  $(".addNew").click(function() {
    userInput=$(".newToDo").val();
    task.push(userInput);
    $(".ToDoList").append("<li>"+userInput+"</li>");
    $(".numTasks").text(task.length);
    
}); 
   
   
   
