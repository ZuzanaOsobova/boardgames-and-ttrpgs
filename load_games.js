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

            console.log(game.name);

            const game_div = document.createElement('div');

            let icon = "";

            if(game.player_count === "1"){
                icon = "images/person_icon.svg"
            } else {
                icon = "images/group_icon.svg"
            }

            let image ="";

            if (game.image) {
                image = "<img src='images/" + game.image + "'>"
            } else {
                image = ""
            }


            game_div.innerHTML =
                "<div class='game'>" +
                    "<details>" +
                        "<summary>" +
                            "<span class='summary_info'>" + game.player_count +
                                "<img src='" + icon + "'>" +
                                "|" + game.play_time + "|" + game.language +
                            "</span>" +
                            "<span class='summary_name'>" + game.name + "</span>" +
                        "</summary>" +
                            "<div class='game_details'>" +
                                image +
                                game.detail_text +
                            "</div>" +
                    "</details>" +
                "</div>";

            list.appendChild(game_div);
        }

    })

}

loadBoardgames()