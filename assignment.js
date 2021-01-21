

// Kilometer to Meter Converting Function
function  kilometerToMeter(distance){
    if (distance<0){        // Edge Case
        return "Distance can not be negative." ;  
    }else{
        return distance*1000;
    }
}

// Budget Calculator 
function budgetCalculator( watch , mobile , laptop ){
    if ( watch < 0 || mobile <0 || laptop <0 ){   // edge case
        return "Number of Watch , Mobile or Laptop can not be nagative."
    }else{
        let budget = watch*50 + mobile*100 + laptop*500;
        // watch , mobile and laptop cost 50 taka , 100 taka and 500 taka respectively.
        return budget;
    }
}

// Function to find out the total cost of hotel.
function hotelCost(days){
    if ( days < 0){    //edge case
        return "Spending Days Can not be nagative."
    }else if(days <= 10){
        return days*100 ;
    }else if(days <= 20){
        return 10*100 + (days-10)*80 ;
    }else{
        return 10*100 + 10*80 + (days-20)*50 ;
    }
}

// Finding Out The Largest Name
function megaFriend(nameArray){           // Array containing name is passing to the function
    
    // Edge Case 1( If anyone gives any element which is not a name)
    for (let i =0 ; i< nameArray.length ; i++){  
        if( nameArray[i].length == undefined){
            return "In your input array, you have given something that is not name";
        }
    }

    let largestNameLength =nameArray[0].length;   //  Initiate a variable that will contain the length of the largest name          
    for ( i =0 ; i< nameArray.length ; i++){  // Finding out the length of the largest name using loop
        if( largestNameLength < nameArray[i].length){
            largestNameLength = nameArray[i].length;
        }
    }
    
    // Edge Case 2 (whether the array contains more than one name having the largest length.)
    let sameLength=[]; // The names having the largest length will be etracted in this array
    let c=0;
    for ( i = 0 ; i< nameArray.length ; i++ ){   
        if( largestNameLength == nameArray[i].length){
            sameLength[c]=nameArray[i];
            c++;
        }
    }

    if(sameLength.length==1){
        return sameLength[0];  // If nameArray has only one largest name then only the name is returned.
    }else{
        return sameLength;    // If nameArray has more than one largest name  then the array of the largest names is returned.
    }
}

let meter= kilometerToMeter(3)  
console.log(meter)

let totalCost= budgetCalculator( 5 , 5 , 5 )
console.log(totalCost)

let cost= hotelCost(29)
console.log(cost)

let names = ["Rafi","Shawon","Shahriar","robin","roni"];
let largestName=megaFriend(names);
console.log(largestName)
// Two Edge Case 
// ["Rafi","Shawon","Shahriar",34,"robin","roni"];
// ["Rafi","Shawon","Shahriar","robin","Mojumder","roni"];
