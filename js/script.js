window.addEventListener('load', function() {
    
    let reults = document.getElementById('results');
    function search() {

         //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);

        // get gender
        let genderField = document.getElementById('gender');
        let s  = genderField.selectedIndex;
        let gender = genderField.options[s].value;
        console.log(gender);

        console.log('Im searching!');
        reults.innerHTML ='<div style=" color: red;">hello world </div> <br/> new line<div class="person-row">some stuffs</div>';
        console.log(reults);

    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});