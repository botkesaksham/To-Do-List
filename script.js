//create a variable for add task button
// const btn = document.querySelector(".add");

// //create a varibale for task container which will be empty initially
// const taskContainer = document.querySelector('.addtas');


// //create a variable for input task which will get the input of task from the user
// const input = document.querySelector('.enter-task');


// add event listener to add task button
// btn.addEventListener('click',function(){
//     let addtask = document.createElement('div');
//     addtask.classList.add('addtask');
//     console.log(addtask)

//     let entertask = document.createElement('li');
//     entertask.innerText = `${input.value}`;
//     addtask.appendChild(entertask);

//     taskContainer.append(addtask)
    



// })
//make the function
//createElement div with varible name
//add using classList a varible having new style for the div

//create element li which also contains the input task hint .value .appendChild


//create add button hint : innerHTML, classList.add() , appendChild

//create delete button


//check if the input value is empty if empty return a alert


//reasign the input value to be empty

//add eventListener to the add btn hint: add a line through using parent


//add eventListener to the delete btn hint : target e then remove it from the parent element 


const addbtn = document.querySelector(".add");
const input = document.querySelector('.enter-task');
const addtask = document.querySelector('.addtask')

addbtn.addEventListener('click',function(){
     
    let newtask = document.createElement('div');
    newtask.classList.add('newtask');

    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    newtask.appendChild(li)
    console.log(newtask)
    
    const checkbtn = document.createElement('button');
    checkbtn.innerHTML = "<i class='fa fa-check'></i>";
    checkbtn.classList.add('checkbtn')
    newtask.append(checkbtn)
    
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = "<i class='fa fa-trash'></i>";
    deletebtn.classList.add('deletebtn');
    newtask.append(deletebtn);

    if (input.value === ''){
        alert ("Please Enter a Task");
    }
    
    else{
        addtask.append(newtask)
    }

    input.value = '';


    checkbtn.addEventListener('click',function(){
        checkbtn.parentElement.style.textDecoration = 'line-through'
    })

    deletebtn.addEventListener('click',function(){
        deletebtn.parentElement.remove()
    })


})


