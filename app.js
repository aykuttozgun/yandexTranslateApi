//Prototype , Ajax, Callback
const word=document.querySelector("#word").value;
const language=document.querySelector("#language").value;

eventListeners();



function eventListeners(){

    document.querySelector("#translate-form").addEventListener("submit",translateWord);

    document.querySelector("#language").onchange = function(){
         //Arayüz işlemleri
         ui.changeUI();
     }
}
const translate=new Translate(document.querySelector("#word").value,document.querySelector("#language").value);
const ui=new UI();
function translateWord(e){

    translate.changeParameters(document.querySelector("#word").value,document.querySelector("#language").value);

    translate.translateWord(function(err,response,language){

        if(err){
            console.log(err)
        }
        else{
            
            ui.displayTranslate(response);
            console.log(response)
        }
    });


    e.preventDefault();
}

