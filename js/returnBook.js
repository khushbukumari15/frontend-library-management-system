document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitButton").addEventListener("click", async function () {
        const iId = document.getElementById("issueId").value
        const bId = document.getElementById("bookId").value

        try {
            const res = await fetch(
                `http://localhost:5000/return/${iId}/${bId}`,
                {
                    method: "PUT"
                }
            )

            const resData = await res.json()

            const message = document.getElementById('message').innerText = resData.message
            console.log(message)
            if (resData.statusCode !== 200) {
                document.getElementById('message').style.color = "red"
                document.getElementById('message').style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }
            else {
                document.getElementById('message').style.color = "black"
                document.getElementById('message').style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }

        }
        catch (error) {
            console.log(error)
        }

    })

    document.getElementById("home").addEventListener("click", function () {
        window.location.replace('../html/adminPanel.html')
    })
})