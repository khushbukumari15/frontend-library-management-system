document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("submitButton").addEventListener("click", async function(){
        const issueId = parseInt(document.getElementById("issueId").value)
        const bId = parseInt(document.getElementById("bookId").value)
        const mId = parseInt(document.getElementById("memberId").value)
        const period = document.getElementById("period").value

        const data = {
            issueId: issueId,
            bookId: bId,
            memberId: mId,
            period: period
        }
        console.log(data)

        try{
            const res = await fetch(
                `http://localhost:5000/issue/${bId}/${mId}`,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    }
                }
            )

            const resData = await res.json()

            const message = document.getElementById('message').innerText = resData.message
             if(resData.statusCode !== 200){
                document.getElementById('message').style.color = "red"
                document.getElementById('message').style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
             }
             else{
                document.getElementById('message').style.color = "black"
                document.getElementById('message').style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
             }

        }
        catch(error){
            console.error(error)

        }

    })

    document.getElementById("home").addEventListener("click", function(){
        window.location.replace('../html/adminPanel.html')
    })
})