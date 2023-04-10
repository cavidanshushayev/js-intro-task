var eded = 120;



var say2 = 0;
// without function

if (eded < 50) {
    
    for (let i = 0; i < eded; i++) {
        if (i != 0 && i % 3 == 0) {
            say2++;
        }
    }
    console.log("bu edede qeder 3 e bolunen ededlerin sayi:" + say2);
}
if (eded > 50 && eded < 100) {
    for (let i = 0; i < eded; i++) {
        if (i != 0 && i % 3 == 0) {
            say2++;
        }
    }

    console.log("bu edede qeder 5 e bolunen ededlerin sayi:" + say2);
}

if (eded > 100) {
    for (let i = 0; i < eded; i++) {
        if (i != 0 && i % 8 == 0) {
            say2++;
        }
    }
    console.log("bu edede qeder 8 e bolunen ededlerin sayi:" + say2);
}




// with regular function
myFunction(eded);
function myFunction(eded) {
    var say = 0;

    if (eded < 50) {
        for (let i = 0; i < eded; i++) {
            if (i != 0 && i % 3 == 0) {
                say++;
            }
        }
        console.log("bu edede qeder 3 e bolunen ededlerin sayi:" + say);
    }
    if (eded > 50 && eded < 100) {
        for (let i = 0; i < eded; i++) {
            if (i != 0 && i % 3 == 0) {
                say++;
            }
        }

        console.log("bu edede qeder 5 e bolunen ededlerin sayi:" + say);
    }

    if (eded > 100) {
        for (let i = 0; i < eded; i++) {
            if (i != 0 && i % 8 == 0) {
                say++;
            }
        }
        console.log("bu edede qeder 8 e bolunen ededlerin sayi:" + say);
    }
}


// with annonymus function
myFunction2(eded);
function myFunction2(){
    var say = 0;

    if (eded < 50) {
        for (let i = 0; i < eded; i++) {
            if (i != 0 && i % 3 == 0) {
                say++;
            }
        }
        console.log("bu edede qeder 3 e bolunen ededlerin sayi:" + say);
    }
    if (eded > 50 && eded < 100) {
        for (let i = 0; i < eded; i++) {
            if (i != 0 && i % 3 == 0) {
                say++;
            }
        }

        console.log("bu edede qeder 5 e bolunen ededlerin sayi:" + say);
    }

    if (eded > 100) {
        for (let i = 0; i < eded; i++) {
            if (i != 0 && i % 8 == 0) {
                say++;
            }
        }
        console.log("bu edede qeder 8 e bolunen ededlerin sayi:" + say);
    }
}