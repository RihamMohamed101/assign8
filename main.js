//1 

function sayHello(theName, theGender) {
    if(theGender==="Male")
        console.log(`"Hello Mr ${theName}"`);
    else if(theGender==="Female")
        console.log(`"Hello Miss ${theName}"`);
    else  
        console.log(`"Hello ${theName}"`);
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"




//2

function calculate(firstNum, secondNum = " ", operation=" ") {
    if(operation==="add")  console.log(firstNum+secondNum);
    else if(operation==="subtract")   console.log(firstNum-secondNum);
    else if(operation==="multiply")     console.log(firstNum*secondNum);
    else if(operation===" ")
    {
        if(secondNum===" ")
            console.log("Second Number Not Found");
        else
            console.log(firstNum+secondNum);
    }
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600


//3

function ageInTime(theAge){
    // Your Code Here
    if(theAge>10 && theAge<100)
    {
        console.log(`${theAge*12} months`);
        console.log(`${theAge*12*4} weeks`);
        console.log(`${theAge*12*4*7}  days`);
        console.log(`${theAge*12*4*7*24}  hours`);
        console.log(`${theAge*12*4*7*24*60}  minutes`);
        console.log(`${theAge*12*4*7*24*60*60}  secondes`);
    }

    else
    console.log("Age Out Of Range");
} 
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months


// 4
function check(a)
{
    return isNaN(parseInt(a));
}


function checkStatus(a, b, c) {
    // Your Code Here
    let x , y , z ;
    if(!check(a)) 
    {
        x = a ;
    }

    else if (!check(b))   x = b;

    else     x = c ;


    if(check(a)) 
    {
        if(Number(a)==1 || Number(a)==0) 
        {
            z = a;
        }
        else  y = a;
    }

    if(check(b)) 
    {
        if(Number(b)==1 || Number(b)==0) z = b;
        else  y = b;
    }

    if(check(c)) 
    {
        if(Number(c)==1 || Number(c)==0) z = c;
        else  y = c;
    }
    if(Number(z)==1 )
    console.log(`"Hello ${y}, Your Age Is ${x}, You Are Available For Hire"`);
    else
    console.log(`"Hello ${y}, Your Age Is ${x}, You Are Not Available For Hire"`);


}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



//6

function multiply(...par)
{
    let res = 1;
    for(let i =0 ; i<par.length ; i++)
    {

        if(isNaN(Number(par[i]))) continue;
            res*=parseInt(par[i]);
    }

    console.log(res);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000



//5


function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`);
    for(let i = startYear ; i<= endYear ; i++)
    {
        document.write(`
        <option value="${i}">${i}</option>
        `);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);


