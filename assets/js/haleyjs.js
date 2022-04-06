var pastGames = document.querySelector("#past-games");

function getStats () {
    var apiUrl = "https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=28&per_page=100"
    fetch (apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){

                for (let i = 82; i < data.data.length; i++) {
                    var getDate = data.data[i].date;
                    getDate = getDate.slice(0, -14);
                    var getHomeTeam = data.data[i].home_team.full_name;
                    var homeTeamScore = data.data[i].home_team_score;
                    var getVisitorTeam = data.data[i].visitor_team.full_name;
                    var visitorTeamScore = data.data[i].visitor_team_score
                
                var pastGamesEl = document.createElement("a");
                pastGames.appendChild(pastGamesEl);

                var getDateEl = document.createElement("p");
                getDateEl.textContent = getDate;

                var gamesEl = document.createElement("p");
                gamesEl.textContent = "Home Team: " + getHomeTeam + " (" + homeTeamScore + ") vs. " + getVisitorTeam + " (" + visitorTeamScore + ")";

                pastGamesEl.appendChild(getDateEl);
                pastGamesEl.appendChild(gamesEl);


                }
            });
        }
    });
};

getStats();