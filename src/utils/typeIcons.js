// Importando os icones
import iconDefault from '../assets/default.png'
import iconFooteball from '../assets/footeball.png'
import iconFood from '../assets/food.png'
import iconJob from '../assets/job.png'
import iconParty from '../assets/party.png'
import iconStudy from '../assets/study.png'
import iconShopping from '../assets/shopping.png'
import iconTravel from '../assets/travel.png'
import iconSport from '../assets/sport.png'

// Vetor contendo os icones
// A primeira posição do array (0), receberá null pois type no backend começa apartir de 1
const typeIcons = [
    null, // Posição 0
    iconDefault, // Posição 1 - typeicons[1]
    iconFooteball, // Posição 2
    iconFood, // Posição 3
    iconJob, // Posição 4
    iconParty, // Posição 5
    iconStudy, // Posição 6
    iconShopping, // Posição 7
    iconTravel, // Posição 8
    iconSport // Posição 9
]

export default typeIcons