var pastGames = document.querySelector("#past-games");

function getApi() {
    // TODO: Insert the API url to get a list of your repos
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'b232601537msh64da50b343b4de1p1a5f50jsn73ef2dd5d8b5'
        }
    };
    
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=raptors&pageNumber=1&pageSize=5&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data);
            for (let index = 0; index < data.value.length; index++){
                var newsCol = '<a href='+data.value[index].url+' target="_blank">';
                if(data.value[index].image.url != null && data.value[index].image.url.length > 0){
                    newsCol += '<section style="background-image: url('+data.value[index].image.url+');">';
                }else{
                    newsCol += '<section>';
                }

                newsCol += `                    
                    <div class="news-content">
                        <h3>`+data.value[index].title+`</h3>
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
