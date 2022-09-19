let today = new Date()
let thisYear = today.getFullYear()
//console.log(thisYear)
let footer = document.querySelector("footer")
let copyright = document.createElement("p")
copyright.innerHTML = `Selam ${thisYear}`
footer.appendChild(copyright)
let skills = ["Javascript", "HTML", "CSS"]
let skillsSection = document.getElementById("skills")
let skillsList = document.querySelector("ul")

for (let i in skills) {
    let skill = document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}