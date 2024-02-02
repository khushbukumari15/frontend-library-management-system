document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("submitButton").addEventListener("click", async function() {
        
        const id = document.getElementById("memberDocId").value 
        const name = document.getElementById("fullName").value 
        const mobileNumber = document.getElementById("mobileNumber").value

        const data = {
            fullName: name,
            mobileNumber: mobileNumber
        }
        console.log(data)

        try{
            const res = await fetch(
                `http://localhost:5000/members/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    }
                }
            )
    
            const resData = await res.json()
    
            const message = document.getElementById("message").innerHTML = resData.message
            if(resData.statusCode !== 200){
                document.getElementById("message").style.color = "red"
                document.getElementById("message").style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }
            else{
                document.getElementById("message").style.color = "black"
                document.getElementById("message").style.fontSize = "larger"
                document.getElementById("message").style.backgroundColor = "wheat"
                return message
            }
        }
        catch(e) {
            console.log(e)
        }
        
    })

    document.getElementById("home").addEventListener("click", function(){
        window.location.replace('../html/adminPanel.html')
    })

})