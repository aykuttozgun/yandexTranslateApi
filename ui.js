
function UI(){

    this.outputImage=document.querySelector("#outputImage");
    this.outputLanguage=document.querySelector("#outputLanguage");
    this.outputWord=document.querySelector("#outputWord");

    this.languageList=document.querySelector("#language");
}

UI.prototype.changeUI = function(){

    this.outputImage.src= `images/${this.languageList.value}.png`;
    console.log(this.outputImage.src)
    const index=this.languageList.options.selectedIndex;
    const text=this.languageList.options[index].textContent;
    this.outputLanguage.textContent=text;

}

UI.prototype.displayTranslate = function(response){

    document.querySelector("#outputWord").textContent=response;
}