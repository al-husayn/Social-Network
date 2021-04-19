window.addEventListener('load', function() {
    
    let reults = document.getElementById('results');
    function search() {
        console.log('Im searching!');
        reults.innerHTML ='<div style=" color: red;">hello world </div> <br/> new line<div class="person-row">some stuffs</div>';
        console.log(reults);

    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});