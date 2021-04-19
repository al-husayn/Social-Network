var users = [
    {
        name: 'Sawda',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Aphya',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Drake',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar5.png'
    },
    {
        name: 'Ibrah',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar6.png'
    },
    {
        name: 'Mercy',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar3.png'
    },
    {
        name: 'Ama Konadu',
        gender: 'F',
        hobby: 'shopping',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ridwan',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});