const description = document.getElementById('title');
const title = document.getElementById('note');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

//function showError(input, message){
    //const formControl = input.parentElement;
    //formControl.className = 'form-outline error';
    //const small = formControl.querySelector('small');
    //small.innerText = message;
   // error= true;

//}

function showSuccess(input){
    const formControl = input.parentElement;
   // formControl.className = 'form-outline success';
    error= false;
}

function checkRequired(inputArr){
    inputArr.forEach(input => {
       if(input.value.trim() === ''){
             showError(input,`${input.id} required`);
       }
       else{
            showSuccess(input);
       }
       
   });
}

const addNotes = () => {
  console.log("inside ")
  if(true){
    let data = {                         //title &description
        "title": title.value,
        "note": description.value
      }
      notes(data)
  }
  getNotes();
  }
  function notes(data){

    servicereq('notes/addNotes','post',data)
    }
//display notes
    function getNotes() {
      console.log("inside ")
      if(true){
    let data = {                         //title &description
       
      }
      getnotes(data)
  }
}
function getnotes(data){

  servicereq('notes/addNotes','get')
  }
 //service
 function servicereq (url,meth,data){
    console.log(data);
    fetch(baseUrl+url, {
    method:meth,
    headers: {
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('token')
   },
    body: JSON.stringify(data),
             mode: 'cors',
          //    headers: {
          //      'Content-Type': 'application/json',
          //  }
           
    })
    .then( response => response.json() )
    .then( data => {
      console.log(data)

      // var results = document.getElementById('results')
      // results.innerHTML = `<div><p>note is dsjfbcx xjsbjkdshc c njcjnjksdscn nmc ${data.title}</p>
      // <p>body iscnjsakdcc bbabkdhjskjndjskanxcxbsbdjksd${data.description}</p>`
     // localStorage.setItem('token', data.id);
     var results = '';
     for(i=0; i<response.data.data.data.length; i++){
       nHTML += `<div class="item-container">
                  <div class="items"> <li style="list-style-type:none">` + response.data.data.data[i].title
                  + "      "+`</li>` +  `<li style="list-style-type:none">` +  response.data.data.data[i].description + `</li>` + `<button id=`+ response.data.data.data[i].id +` type="button" onclick="deleteNote(id=this.id)">Delete</button></div></div>`;
     }
     document.getElementById("results").innerHTML = '<ul>' + results + '</ul>'  
    } )
    //getNotes()
 
    .catch(error => {
      console.error('Error:', error);
    });
}