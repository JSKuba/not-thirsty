import React, { useEffect } from 'react'
import axios from 'axios'

import './styles/Result.css'

const Result = () => {

  useEffect(() => {
    document.getElementById('random-btn').addEventListener('click', () => {
      document.getElementById('ingredients').innerHTML = ''
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => {
          document.getElementById('drink-how-to').innerText = response.data.drinks[0].strInstructions
          document.getElementById('drink-img').src = response.data.drinks[0].strDrinkThumb
          document.getElementById('drink-name').innerText = response.data.drinks[0].strDrink
          let ingredients = []
          for (let i = 0; i <= 15; i += 1) {
            if (response.data.drinks[0][`strIngredient${i}`] != null) {
              ingredients.push(response.data.drinks[0][`strIngredient${i}`])
            }
          }
          ingredients.map(v => {
            return axios(`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(v)}-Medium.png`)
            .then(response2 => {
              let child = document.createElement('div')
              child.classList.add('ingredient-container')
              child.innerHTML = `<div class="ingredient-card">
                                  <img src=${response2.config.url} alt="" />
                                  <span class="ingredient-caption">${v}</span>
                                </div>`
              document.getElementById('ingredients').appendChild(child)
            })
          })
        })
        .then(document.getElementById('result').style.display = 'initial')
        .then(window.scrollTo(0, document.getElementById('result').offsetTop))
    })
  },[])

  return (
    <section id="result">
      <div className="wrapper">
        <h2>Result</h2>
        <div className="container">
          <figure className="result-left">
            <h3 id="drink-name">Drink name</h3>
            <figure className="drink-img-container">
              <img id="drink-img" alt="Drink" />
            </figure>
          </figure>
          <article className="result-right">
            <h4>How to</h4>
            <p id="drink-how-to" />
            <h4>Ingredients</h4>
            <div id="ingredients" className="ingredients" />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Result