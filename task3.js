function myFunction() {
    return new Promise((resolve, reject) => {

        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/delete/636f48ded25ce5106d343650", {
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
        .then(res => res.todos)
        .catch(err => err)
}
async function main() {
    let data = await myFunction()
    console.log(data)
}

main()