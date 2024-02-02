document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitButton").addEventListener("click", async function (e) {
        e.preventDefault();

        const bId = parseInt(document.getElementById("bookId").value)
        const bookName = document.getElementById("bookName").value
        const price = parseInt(document.getElementById("price").value)
        const genre = document.getElementById("genre").value

        const data = {
            bookId: bId,
            bookName: bookName,
            price: price,
            genre: genre
        }
        console.log(data)

        try {
            const res = await fetch(
                "http://localhost:5000/books",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': 'application/json'
                    }
                }
            )
            const resData = await res.json()

            const message = document.getElementById("message").innerText = resData.message
            if (resData.statusCode !== 200) {
                document.getElementById("message").style.color = "red"
                document.getElementById("message").style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }
            else {
                document.getElementById("message").style.color = "black"
                document.getElementById('message').style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }

        }
        catch (error) {
            console.log(error);
        }
    })

    document.getElementById("home").addEventListener("click", function(){
        window.location.replace('../html/adminPanel.html')
    })
})