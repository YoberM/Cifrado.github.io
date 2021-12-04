class Encriptado{
    constructor(msg_claro,clave){
        this.msg_claro = msg_claro;
        this.clave = clave; 
    }


    encriptar(){

    }

}

class MD5 extends Encriptado{
    
    encriptar
}

function alo(){

    alert("pogdo ctmre");
}
function rot13(str) { // LBH QVQ VG!
  
    var string = "";
    for(var i = 0; i < str.length; i++) {
      var temp = String.fromCharCode(str.charCodeAt(i)+1);
        string += temp;
    }
    alert(string);
    return string;
  }