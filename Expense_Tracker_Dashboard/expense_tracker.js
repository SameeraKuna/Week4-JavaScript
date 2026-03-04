//For toogle button
const toggle = document.getElementById("toggleBtn");
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});
//To add delete button
var del = document.createElement('button');//creates an empty button
    del.className = 'del-btn'; //<del class="del-btn"></del>
    del.type = 'button';//<del type="button"></del>
    del.textContent = 'Delete';
//To add edit button
var edit = document.createElement('button');//creates an empty button
    edit.className = 'edit-btn'; 
    edit.type = 'button';
    edit.textContent = 'Edit';