var slaying = true;
var youHit = Math.floor(Math.random());
var damageThisRound = Math.floor(Math.random()*5 +1);
var totalDamage = 0;

while(slaying) {
    if(youHit >= 1) {
        console.log("You hit the dragon!");
        totalDamage += totalDamage + damageThisRound;
        
        if(totalDamage >= 4) {
            console.log("You slew the dragon");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random());
        }
        
    }
    else {
        console.log("The dragon defeated you.");
    }
    slaying = false;
}