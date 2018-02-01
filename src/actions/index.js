export const shuffleCards = (deck) => {
    return deck.sort((a,b)=> 0.5 - Math.random());
}

export const sorting = (deck) => {
    let spades=[]
    let clubs=[]
    let diamonds=[]
    let hearts=[]
    
    deck.sort((a,b)=>{
        let aV = a.value;
        let bV = b.value;
        if(a.value ==='ace') aV = 14
        if(b.value ==='ace') bV = 14 
        if(a.value ==='king') aV = 13
        if(b.value ==='king') bV = 13 
        if(a.value ==='queen') aV = 12
        if(b.value ==='queen') bV = 12 
        if(a.value ==='jack') aV = 11
        if(b.value ==='jack') bV = 11 
        return aV - bV
    })
    
    
    // split the suits in the particular suits
    deck.forEach((card)=>{
        switch(card.suit){
            case 'club':
                clubs.push(card);
                break;
            case 'spade':
                spades.push(card);
                break;
            case 'heart':
                hearts.push(card);
                break;
            case 'diamond':
                diamonds.push(card)
                break;
            default:
                return;
        }
    })

    return clubs.concat(spades).concat(hearts).concat(diamonds)
}