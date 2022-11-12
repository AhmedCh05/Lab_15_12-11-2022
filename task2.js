
function getFunction() {
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
        .then(res => console.log(res.todos))
        .catch(err => console.log(err))
}

async function main() {
    let data = await getFunction()
    console.log(data)
}

main()
