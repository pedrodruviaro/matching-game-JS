import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import ScoreBoard from './src/objects/ScoreBoard'
import BoardGame from './src/objects/BoardGame'



// $ => guarda elemento da tela
const $root = document.querySelector("#app")

$root.insertAdjacentHTML(
    "beforeend",
    `   
        ${ScoreBoard()}
        ${BoardGame(2)}
    `
);
