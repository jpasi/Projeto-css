// let nome = document.getElementById("nome").value
// let email = document.getElementById("email").value
// let assunto = document.getElementById("Assunto").value
// let mensagem = document.getElementById("Mensagem").value

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
})

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/jpasi/repos', true)
request.onload = function () {
  
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((repo) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const a = document.createElement('a')
      repo.html_url = repo.html_url.substring(0, 300)
      a.textContent = `${repo.name}`
      a.href = `${repo.html_url}`
      a.style.fontSize = '30px'
      a.style.

      container.appendChild(card)
      card.appendChild(a)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()