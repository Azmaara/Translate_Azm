var key = "0315T152328Z.ac1fea9447bfc10e.2fc4303594266a5551f3346c55fb58a5f7";

var s;
var tolang;

var output;

function main(){
   s = document.getElementById('input').value.toString();
   checklang();
   output = document.getElementById('output');
   output.text = "Loading..."
   translate();
}
function translate(){
var trans = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.2018"+ key + (48*2).toString() + "e977&text=" + s +
"&lang=" + tolang;

var bj = getJSON(trans);
var aj = JSON.parse(bj)
output.value = aj.text;
}
function getJSON(url) {
        var resp ;
        var xmlHttp ;

        resp  = '' ;
        xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", url, false );
            xmlHttp.send( null );
            resp = xmlHttp.responseText;
        }

        return resp ;
    }

function checklang(){
    tolang = document.getElementById('selectm').value;
}
