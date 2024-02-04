document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitButton").addEventListener("click", async function (event) {
        event.preventDefault();

        document.getElementById("content").innerHTML = ""

        try {
            const res = await fetch(
                "http://localhost:5000/books",
                {
                    method: "GET"
                }
            )
            const resData = await res.json()
            const response = JSON.stringify(resData)
            console.log(resData)
            console.log(response)

            const contentDiv = document.getElementById('content')

            resData.forEach(element => {
                const newDiv = document.createElement('div')
                newDiv.setAttribute('class', 'data')

                const _idDiv = document.createElement('div')
                const bookIdDiv = document.createElement('div')
                const bookNameDiv = document.createElement('div')
                const priceDiv = document.createElement('div')
                const genreDiv = document.createElement('div')
                const statusDiv = document.createElement('div')


                _idDiv.innerText = "_id: " + element._id
                bookIdDiv.innerText = "Book Id: " + element.bookId
                bookNameDiv.innerText = "Book Name: " + element.bookName
                priceDiv.innerText = "Price: " + element.price
                genreDiv.innerText = "Genre: " + element.genre
                statusDiv.innerText = "Status: " + element.status


                newDiv.appendChild(_idDiv)
                newDiv.appendChild(bookIdDiv)
                newDiv.appendChild(bookNameDiv)
                newDiv.appendChild(priceDiv)
                newDiv.appendChild(genreDiv)
                newDiv.appendChild(statusDiv)

                contentDiv.appendChild(newDiv)
            });
        }
        catch (error) {
            console.log(error)
        }
    })

    document.getElementById("home").addEventListener("click", function(){
        window.location.replace('../html/adminPanel.html')
    })
})