const apiURL = 'http://fundoonotes.incubation.bridgelabz.com/api/';

/**************************GET Service Note API Call ********************************/
$(document).ready(() => {
    getNote();
})

var tokenData = JSON.parse(localStorage.getItem("userData"));
function getNote() {
    let myURL = "notes/getNotesList";
    $.ajax({
        url: apiURL + myURL,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        headers: { Authorization: `${tokenData.id}` },
        success: function (data) {
            printNoteData(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

/***************POST service Note API Call *************************/

function ajaxNotePostService(myData, myURL, successMsg, errorMsg) {
    $.ajax({
        url: apiURL + myURL,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        headers: { Authorization: `${tokenData.id}` },
        data: JSON.stringify(myData),
        success: function (data) {
            console.log(data);
            showSnackBar(successMsg);
            getNote();
        },
        error: function (err) {
            showSnackBar(errorMsg);
            console.log(err);
        }
    })
}

/***************Add Note API Call ************************/

function saveNote(noteData) {
    let myURL = "notes/addNotes";
    ajaxNotePostService(noteData, myURL, "saved successful...", "failed to save...");
}
