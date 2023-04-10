// without function
var eded=20;
 if (eded %7 ==0){
    console.log("7 ye bolunur");
} else{
    var qaliq=eded%7;
    if(qaliq<4){
     var new_eded=eded-qaliq;
    console.log(new_eded);}
    else{
     var new_eded_2=eded -qaliq+7;
     console.log(new_eded_2);

    }
}
 
// with regular function
var eded2 =20;
myFunction(eded2);


function myFunction(eded) {


if (eded %7 ==0){
    console.log("7 ye bolunur");
} else{
    var qaliq=eded%7;
    if(qaliq<4){
     var new_eded=eded-qaliq;
    console.log(new_eded);}
    else{
     var new_eded_2=eded -qaliq+7;
     console.log(new_eded_2);

    }
}

  return new_eded_2;
}


// with anonymous function
var eded3=20;
var myfunction2 = function () {
 

if (eded %7 ==0){
    console.log("7 ye bolunur");
} else{
    var qaliq=eded%7;
    if(qaliq<4){
     var new_eded=eded-qaliq;
    console.log(new_eded);}
    else{
     var new_eded_2=eded -qaliq+7;
     console.log(new_eded_2);

    }
}

  return new_eded_2;}
myfunction2(eded3);


