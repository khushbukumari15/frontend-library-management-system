document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitButton").addEventListener("click", async function (event) {
        event.preventDefault();
        const idValue = document.getElementById("bookDocId").value

        try {
            const res = await fetch(
                `http://localhost:5000/books/${idValue}`,
                {
                    method: "DELETE"
                }
            )
            const resData = await res.json()
            console.log(resData)

            const message = document.getElementById("message").innerText = resData.message
            if (resData.statusCode !== 200) {
                document.getElementById("message").style.color = "red"
                document.getElementById("message").style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }
            else {
                document.getElementById("message").style.color = "black"
                document.getElementById("message").style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }   
        }
        catch (error) {
            console.log(error)
        }
    })

    document.getElementById("home").addEventListener("click", function(){
        window.location.replace('../html/adminPanel.html')
    })
})