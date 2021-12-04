

function invertirMD5(arr){
    var narr = arr.slice();
    for (var index = 0; index < arr.length; index++) {
        narr[index] = arr[arr.length-(index+1)];
    }
    return narr;
}

function convertirMD5(str){
    var res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(parseInt((str.charCodeAt(i).toString(16)).slice(-4),16 ));
        
    }
    return res;
}

function andMD5(a,b){
    var res = [] 
    for (let i = 0; i < 4; i++) {
        res.push(a[i]^b[i]);
    }
    return res;
}
function orMD5(a,b){
    var res = [] 
    for (let i = 0; i < 4; i++) {
        res.push(a[i]|b[i]);
    }
    return res;

}
function negMD5(a){
    var res = [] 
    for (let i = 0; i < 4; i++) {
        res.push(~a[i]);
    }
    return res;
}
function xorMD5(a,b){
    var res = [] 
    for (let i = 0; i < 4; i++) {
        res.push(a[i]^b[i]);
    }
    return res;

}
function F(a,b,c){
    return  orMD5(andMD5(a,b),( andMD5(negMD5(a),c )) );
}
function G(a,b,c){
    return  orMD5(andMD5(a,b),( andMD5( a,negMD5(c) )) );
    
}
function H(a,b,c){
    return  xorMD5(xorMD5(a,b),c);
    
}
function I(a,b,c){
    return  xorMD5(b,orMD5(a,negMD5(c)))
    
}

function MD5(){
    //Lectura
    str = document.getElementById("textoClaro").value;
    
    //Relleno
    if(str.length%64>0){
        str = str+'1';
        str = str+ '0'.repeat(64 - (str.length%64 + 1));
    }   

    var string = "";
    var A = [0x01,0x23,0x45,0x67];
    console.log(A);
    var B = [0x89,0xAB,0xCD,0xEF];
    var C = [0xFE,0xDC,0xBA,0x98];
    var D = [0x76,0x54,0x32,0x10];

    var nA = invertirMD5(A);
    console.log(nA);
    var nB = invertirMD5(B);
    var nC = invertirMD5(C);
    var nD = invertirMD5(D);
    
    var Ms = [];
    for (let i = 0; i < str.length; i=i+4) {
        Ms.push(convertirMD5(str.slice(i,i+4)));
    }
    console.log(Ms);

    // funciones
    for(var i = 0;i < str.length/512;i++){
        //rondas
        for (var j = 0; j < 16; j=j+4) {
            console.log(str.slice(j,j+4));
        }
    }

    //convertir a hex
    for(var i = 0; i < str.length; i++) {
        //   var temp = String.fromCharCode(str.charCodeAt(i)+1);
        var temp =  (Number(str.charCodeAt(i)).toString(16)).toUpperCase();
        string += temp +" ";
    }
    console.log(string)


    //Escribir resultado;
    document.getElementById("textoCifrado").value = string;
    return string;

}