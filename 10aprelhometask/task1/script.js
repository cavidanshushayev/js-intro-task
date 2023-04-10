var eded =20;
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