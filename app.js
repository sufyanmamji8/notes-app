// let login_page = document.getElementById('loginpage')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let home_page = document.getElementById('homepage')
// let user_email = document.getElementById('useremail')

// function checkIfUserLogin(){
//     let email = localStorage.getItem('email')
//     if(email){
//         login_page.style.display = "none"
//         home_page.style.display = "block"
//         user_email.innerText = email
//     }else{
//         home_page.style.display = "none"
//         login_page.style.display = "block"
//     }
// }

// checkIfUserLogin()

// function loginuser(){
//     if(!email.value || !password.value) return alert('Please enter your info!')
//         localStorage.setItem('email' , email.value)
//         localStorage.setItem('password' , password.value)
//         checkIfUserLogin()

//         email.value = ""
//         password.value = ""

// }

// function logout(){
//     localStorage.removeItem('email' , 'password')
//      checkIfUserLogin()
// }

// function addTodo() {
//     if (!todo_input.value?.trim()) return alert("Add todo Value");

//     let email = localStorage.getItem("email");

//     let obj = {
//         email: email,
//         todo: todo_input.value.trim(),
//     };
//     let todos = localStorage.getItem("todos");
//     if (todos) {
//         todos = JSON.parse(todos);
//         todos.push(obj);
//         localStorage.setItem("todos", JSON.stringify(todos));
//     } else {
//         todos = [obj];
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }

//     todo_input.value = ""; 
//     showTodos();
// }

// function showTodos() {
//     let todos = localStorage.getItem("todos");
//     let list = document.getElementById("list");
//     let email = localStorage.getItem("email");
//     if (todos) {
//         todos = JSON.parse(todos);
//         list.innerHTML = "";
//         todos.forEach(function (data, index) {
//             if (data.email === email) {
//                 let li = `<li>${data.todo}</li>`;
//                 list.innerHTML += li;
//             }
//         });
//     }
// }
// showTodos()

let login_page = document.getElementById('loginpage');
let email = document.getElementById('email');
let password = document.getElementById('password');
let home_page = document.getElementById('homepage');
let user_email = document.getElementById('useremail');
let todo_input = document.getElementById('todoinput'); // Ensure this element exists

function checkIfUserLogin(){
    let email = localStorage.getItem('email');
    if(email){
        login_page.style.display = "none";
        home_page.style.display = "block";
        user_email.innerText = email;
        showTodos(); // Show todos when user is logged in
    }else{
        home_page.style.display = "none";
        login_page.style.display = "block";
    }
}

checkIfUserLogin();

function loginuser(){
    if(!email.value || !password.value) return alert('Please enter your info!');
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    checkIfUserLogin();
    email.value = "";
    password.value = "";
}

function logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    checkIfUserLogin();
}

function addNote() {
    if (!todo_input.value?.trim()) return alert("Add todo Value");
    let email = localStorage.getItem("email");
    let obj = {
        email: email,
        todo: todo_input.value.trim(),
    };
    let todos = localStorage.getItem("todos");
    if (todos) {
        todos = JSON.parse(todos);
        todos.push(obj);
        localStorage.setItem("todos", JSON.stringify(todos));
    } else {
        todos = [obj];
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    todo_input.value = ""; 
    showTodos();
}

function showTodos() {
    let todos = localStorage.getItem("todos");
    let list = document.getElementById("list"); // Ensure this element exists
    let email = localStorage.getItem("email");
    if (todos) {
        todos = JSON.parse(todos);
        list.innerHTML = "";
        todos.forEach(function (data) {
            if (data.email === email) {
                let li = `<li>${data.todo}</li>`;
                list.innerHTML += li;
            }
        });
    }
}

showTodos();
