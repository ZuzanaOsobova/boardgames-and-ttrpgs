let boardgames = [];

//funkce načítající json do proměné boardgames
async function loadBoardgames (){
    try {
        const response = await fetch('boardgames.json');
        if(!response.ok){
            throw new Error('Network response was not ok.')
        }

        boardgames = await response.json();

        // Tady voláme jinou funkci, která ve skutečnosti ukáže json v html
        displayHTML();
    } catch (error){
        console.log("Error loading JSON: " + error)
    }
}

function displayHTML() {

    const list = document.getElementById('game');

    boardgames.forEach( function (game){

        //Mini kontrola, že je json objekt vyplněný, protože tam mám automaticky nevyplněné
        if(game.name){
            const item = document.createElement('li');

            item.innerHTML = "<img src='images/" + game.image + "'>"
            list.appendChild(item)
        }

    })

}

loadBoardgames()