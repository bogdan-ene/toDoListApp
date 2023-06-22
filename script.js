document.querySelector('#push').onclick = function() {
    if(document.querySelector('#new-task input').value.length == 0) {
        alert("Please enter a task");
    } else {
        document.querySelector('#tasks').innerHTML += `
           <div class = 'task'>
           <span id = 'taskname'>
           ${document.querySelector('#new-task input').value}
           </span>

           <button class = 'delete'>
           <i class="fa fa-trash" aria-hidden="true"></i>
           </button>
           </div>
        `;

        var current_tasks = document.querySelectorAll('.delete');
        for(var i=0; i<current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}