document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitButton").addEventListener("click", async function (event) {
        event.preventDefault();

        document.getElementById("content").innerHTML = ""
        try {
            const res = await fetch(
                "http://localhost:5000/members",
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
                const memberIdDiv = document.createElement('div')
                const fullNameDiv = document.createElement('div')
                const mobileNumberDiv = document.createElement('div')


                _idDiv.innerText = "_id: " + element._id
                memberIdDiv.innerText = "Member Id: " + element.memberId
                fullNameDiv.innerText = "Full Name: " + element.fullName
                mobileNumberDiv.innerText = "Mobile Number: " + element.mobileNumber

                newDiv.appendChild(_idDiv)
                newDiv.appendChild(memberIdDiv)
                newDiv.appendChild(fullNameDiv)
                newDiv.appendChild(mobileNumberDiv)

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