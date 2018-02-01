import forEach from 'lodash/forEach';

const ConstructDeckOfCards = () => {
    let arrayOfcard = [];
    let suits = ['spade', 'diamond', 'club', 'heart'];
    let faceCards = ['king', 'queen', 'jack', 'ace'];
    
    forEach(suits, (suit)=>{
        for(let i=2; i<11; i++){
            arrayOfcard.push({suit, value:i})
        }
        forEach(faceCards, (faceCard)=>{
            arrayOfcard.push({suit,value:faceCard})
        })
    })
    localStorage.setItem("fullDeck", JSON.stringify(arrayOfcard));
    return arrayOfcard;
}

export default ConstructDeckOfCards;