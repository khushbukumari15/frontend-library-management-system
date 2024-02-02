document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitButton").addEventListener("click", async function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value
        const mobileNumber = document.getElementById("mobileNumber").value
        const memberId = parseInt(document.getElementById("memberId").value)

        const data = {
            fullName: fullName,
            mobileNumber: mobileNumber,
            memberId: memberId
        }
        console.log(data)

        try {
            const res = await fetch(
                "http://localhost:5000/addMember",
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