// https://github.com/Towhidul-98/javaScript-problems

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
    
    // Edge Case ( If anyone gives any element which is not a name) Such as : ["robin", "Redwan",34,"shahriar"]
    for (let i =0 ; i< nameArray.length ; i++){  
        if( nameArray[i].length == undefined){
            return "In your input array, you have given something that is not name";
        }
    }

    let largestNameLength =nameArray[0].length;   //  Initiate a variable that will contain the length of the largest name          
    let largestNameIndex = 0;             // Initiate a variable that will contain the index of the largest name 
    for ( i =0 ; i< nameArray.length ; i++){  // Finding out the length of the largest name using loop
        if( largestNameLength < nameArray[i].length){
            largestNameLength = nameArray[i].length;
            largestNameIndex=i;
        }
    }
    return nameArray[largestNameIndex];
}