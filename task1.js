function postFunc() {
    return new Promise((resolve, reject) => {

        fetch("https://bootcamp.todo.arhamsoft.org/client/todo/create", {
            method: "POST",
            body: JSON.stringify({
                title: "Create ToDo",
                desc: "Demo_todo",
                userId: 28083
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(todo => todo.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
            .catch(err => reject(err))
    })
        .then(res => console.log(res.todo))
        .catch(res => console.log(err))
}
async function main() {
    let data = await postFunc()
    console.log(data)
}

main()
