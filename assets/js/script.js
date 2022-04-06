var pastGames = document.querySelector("#past-games");

function getApi() {
    // TODO: Insert the API url to get a list of your repos
    var requestUrl = 'https://newsapi.org/v2/top-headlines?q=raptors&country=ca&category=sports&apiKey=8d807af9c2974fe880ecce7b3be08106';

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.articles);
            for (let index = 0; index < data.articles.length; index++){
                var newsCol = '<a href='+data.articles[index].url+' target="_blank">';
                if(data.articles[index].urlToImage != null){
                    newsCol += '<section style="background-image: url('+data.articles[index].urlToImage+');">';
                }else{
                    newsCol += '<section>';
                }

                newsCol += `                    
                    <div class="news-content">
                        <h3>`+data.articles[index].title+`</h3>
                    <div>
                    </section></a>
                `;
                
                $("#news-articles-section").append(newsCol);
            }

            buildSlider();
        });
}

$(document).ready(function() {
    getApi();
});

function buildSlider(){
    $('#news-articles-section').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
              }
            }
        ]
    });
}
