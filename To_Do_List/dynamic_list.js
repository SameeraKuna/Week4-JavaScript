// Dynamic To-Do List (Add/Toggle/Delete) 
// Goal: Create a to-do list with add, toggle complete, and delete actions. 
// Constraints: Use event delegation to handle item actions. 
// Steps: 
// Text input + “Add” button. 
// New items appear at the top of the list. 
// Clicking the item toggles completed state (visual). 
// “Delete” control removes the item. 
// Success: Add, toggle, and delete all work without attaching listeners to each item individually. 

    var form = document.getElementById('dynamicForm');
    var input = document.getElementById('Input');
    var list  = document.getElementById('todoList');

    //To add new item list
    form.addEventListener('submit', function (e) 
    {
      e.preventDefault();                 // prevents default browser action for a given event. Here it stpos the page reload as event is submit.
      var text = input.value.trim();      // reads input & trim spaces
      if (text === '') return;            // ignores to add item if input is empty

      var li = document.createElement('li');//creates an empty list item 
      var span = document.createElement('span');//creates empty span ->act as text container for the task
      span.className = 'text';//similar to <span class="text"></span>
      span.textContent = text;//to set the actual text the user typed eg. user types apples then span.textcontent becomes apples.

      var del = document.createElement('button');//creates an empty button
      del.className = 'del-btn'; //<del class="del-btn"></del>
      del.type = 'button';//<del type="button"></del>
      del.textContent = 'Delete';
        //To add span and del as items of list
      li.appendChild(span);
      li.appendChild(del);

      list.prepend(li); // for newly added list item to appear at top
      input.value = '';
      input.focus();
    }
    );    
    list.addEventListener('click', function (e) {
      var target = e.target;

      // A)If delete button clicked)- here target is delete button-delete action
      if (target.closest('.del-btn')) //When user clicks delete button this condition becomes true
      {
        var li = target.closest('li'); //finds te nearest list item for which delete button is clicked
        if (li) li.remove(); //Removes the list item
        return; // stop here; don't also toggle
      }

      // B) Toggle completed when clicking the text or the LI background
      var liToToggle = target.closest('li');//targets the list element where the user clicks
      if (liToToggle) {  //for safety if the user finds the list item
        liToToggle.classList.toggle('completed'); 
        // If the <li> does not have the class completed, it adds it. If it does have it, it removes it.
      }
    });
 