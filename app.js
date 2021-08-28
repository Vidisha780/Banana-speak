// Need a reference to the button written in html 
// querySelector() selects and returns the first element which matches the query
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://api.funtranslations.com/translate/shakespeare.json?";
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json?";

function getTranslationURL(text)
{
    return serverURL + "text=" + text; 
}

function errorHandler(error)
{
    console.log("error occured " + error)
}

function clickEventHandler()
{
    // console.log("Clicked!");
    // console.log("input ", txtInput.value);   //txtInput.value -> taking input and console
    // outputDiv.innerText = txtInput.value;      //output  

        var inputText = txtInput.value;     //taking input
    
    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(data => {
            // var translatedText = data.contents.translated;
            var translatedText = data.contents.translated;
            outputDiv.innerText = translatedText;       //output
        })
        .catch(errorHandler)
}


// listen/get ready to respnd to an event
// When ever someone clicks, perform this function(here, clickEventListener)
btnTranslate.addEventListener("click", clickEventHandler)
