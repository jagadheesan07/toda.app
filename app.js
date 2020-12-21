const btn = document.getElementById("ip");
const input = document.getElementById("activity");
const list = document.getElementById("list");


btn.addEventListener('click', () => {

    if (input.value !== '') {
        const li = document.createElement("li"); 
       li.textContent = input.value;
        const cbtn = document.createElement('button');
        cbtn.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        cbtn.classList.add("cbtn");
        li.appendChild(cbtn);
        const dbtn = document.createElement('button');
        dbtn.innerHTML = '<i class="fa fa-trash-o"></i>';
        dbtn.classList.add("dbtn");
        li.appendChild(dbtn);
        list.appendChild(li);
        input.value = "" ;

     } 
})

list.addEventListener('click', (e) => {
    const item = e.target;
    if(item.classList[0] === "dbtn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "cbtn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
})







