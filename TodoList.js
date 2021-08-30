const inp = document.getElementById('addtask');
const add = document.getElementById('addbutton');
const list = document.getElementById('list');

var createNewInp = function(newtask){
    var li = document.createElement('li');//li
    var editInput=document.createElement("input");//text
    var editBtn=document.createElement("button");//edit button
	var deleteBtn=document.createElement("button");//delete button
    var upBtn=document.createElement("button");//up button
    var downBtn=document.createElement("button");

    editInput.value=newtask;
    editInput.disabled="true";
    editInput.type="text";
    editInput.className="editinp";
    //<i class="fas fa-edit"></i>
	editBtn.className="fas fa-edit";
    //<i class="fas fa-trash"></i>
	deleteBtn.className="fas fa-trash";
    //<i class="fas fa-arrow-up"></i>
    upBtn.className="fas fa-arrow-up";
    //<i class="fas fa-arrow-down"></i>
    downBtn.className="fas fa-arrow-down";

    li.append(editInput);
    li.append(editBtn);
    li.append(deleteBtn);
    li.append(upBtn);
    li.append(downBtn);
    list.append(li);

    upBtn.addEventListener('click',(e)=>{
        if(e.target.parentElement.previousElementSibling!=null){
        var y = e.target.parentElement.firstChild.value;
        var x = e.target.parentElement.previousElementSibling.firstChild.value;

        e.target.parentElement.previousElementSibling.firstChild.value=y;
        e.target.parentElement.firstChild.value=x;
       }
    })
    
    downBtn.addEventListener('click',(e)=>{
        if(e.target.parentElement.nextElementSibling!=null){
        var y = e.target.parentElement.firstChild.value;
        var x = e.target.parentElement.nextElementSibling.firstChild.value;

        e.target.parentElement.nextElementSibling.firstChild.value=y;
        e.target.parentElement.firstChild.value=x;
        }
    })
    

    deleteBtn.addEventListener('click',(e)=>{
        var x = e.target.parentElement;
        x.remove();
    })
    editBtn.addEventListener('click',(e)=>{
        var div = e.target.previousElementSibling;
        if(div.disabled == true){
            div.disabled = !div.disabled;
         }
         else{
            div.disabled = !div.disabled;
         }
    })
}
//add
add.addEventListener('click', () => {
    createNewInp(inp.value);
	inp.value="";
});
