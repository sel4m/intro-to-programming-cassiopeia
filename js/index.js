const today = new Date()
const thisYear = today.getFullYear()
//console.log(thisYear)
const footer = document.querySelector("footer")
const copyright = document.createElement("p")
copyright.innerHTML = `Selam ${thisYear}`
footer.appendChild(copyright)

const skills = ["Javascript", "HTML", "CSS"]
const skillsSection = document.getElementById("skills")
const skillsList = document.querySelector("ul")
for (let i in skills) {
    let skill = document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

const messageForm = document.querySelector('[name="leave_message"]')
messageForm.addEventListener("submit", (event)=>{ 
    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.message.value
    //console.log(`name: ${name}, email: ${email}, message: ${message}`)
    event.preventDefault()

    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector("ul")
    const newMessage = document.createElement("li")
    newMessage.innerHTML = `<a href=“mailto:${email}“>${name}</a><span> wrote: ${message} </span>`

    const removeButton = document.createElement("button")
    removeButton.setAttribute("type", "button")
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", (event)=>{
        const entry = removeButton.parentNode
        entry.remove()
    })

    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)

    messageForm.reset()
})

    