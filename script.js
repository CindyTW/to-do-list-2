$(document).ready(function () {
    let addButton = $(".add-button");
	let field = $(".add-field");
    let tasks = $(".tasks");
    let input = $("input");
   
    function inputLength(){
        return input.val().length;
    }

    //Create callback function 
    function addElement(){
        if(inputLength()>0){
            let elem = `<li class="task">
            <div class="task-checked col-1">
                <input type="checkbox">
            </div>
            <div class="task-text col-2">${field.val()}</div>
            <div class="task-remove col-3"></div>
        </li>`;
        tasks.append(elem);
        field.val(null);
        }
    }

    // Add tasks by click      
    addButton.on("click", addElement);

    //Add tasks by keypress
    input.on("keypress", function(e){
            if(inputLength()>0 && e.which===13){
                addElement();
            }
    });
   

    //Remove task
    tasks.on("click", ".task-remove", function(){
        $(this).parent().remove();
    })

    //Checked
    tasks.on("change",".task-checked input", function(){
        $(this).parent().next().toggleClass("checked");
    })

    //Sortable
    $("#tasks-list").sortable();

    //

})