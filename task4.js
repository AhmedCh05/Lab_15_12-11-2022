function myFunction() {
    return new Promise((resolve, reject) => {

        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=28083", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(todo => todo.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
            .catch(err => reject(err))
    })
        .then(res => res.todos)
        .catch(err => err)
}
function DeleteFunc(id) {
    return new Promise((resolve, reject) => {

        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/delete/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(todo => todo.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
            .catch(err => reject(err))
    })
        .then(res => console.log(res.todos))
        .catch(err => console.log(err))
}

function displayTable(Var) {
    let temp = "<table><tr><th>ID</th><th>Title</th><th>Description</th><th>Actions</th></tr>"
    console.log(Var)
    Var.forEach(element => {
        temp += `<tr id='${element._id} '><td>${element._id}</td>`
        temp += '<td>' + element.title + '</td>'
        temp += '<td>' + element.desc + '</td>'
        temp += `<td><input type="button" class="buttonMod" value="Delete" onclick="DeleteFunc('${element._id}')"></td></tr>`
    });
    temp += "</table>"
    document.getElementById("Data").innerHTML = temp;
}

async function main() {
    let T = await myFunction();
    displayTable(T);
}

main()