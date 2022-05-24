const init = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      const input = e.target.children[1].value
      console.log(input)
    

       fetch(`http://localhost:3000/movies/${input}`)
      .then(res => res.json())
      .then(books => inputBookText(books))

    function inputBookText(books) {

        const h4 = document.querySelector('#movieDetails h4')
      const p = document.querySelector('#movieDetails p')
      h4.textContent = books.title
      p.textContent = books.summary

    }
  })
}

document.addEventListener('DOMContentLoaded', init);