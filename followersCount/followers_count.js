let count = 0;

function increseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
    }
    

function checkCountValue(){
    if(count===10){
        alert("Your instragram post gained 10 followers! Congradualtions");
    }else if (count === 20){
        alert("T=Your Instragram post gained 20 followers! keep it up");
    }
}

function resetCount(){
    count = 0;
    alert("The Followers count has been reset.");
    displayCount();
}

