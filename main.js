import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame'



// $ => guarda elemento da tela
const $root = document.querySelector("#app")
const $htmlBoardGame = BoardGame(6)

$root.insertAdjacentHTML("beforeend" ,$htmlBoardGame)
