
/***********************sidebar**************************/
let flag = true;
function openDrawer() {
    if (flag) {
        flag = false;
        $(".drawer").css("width", "300px");
        $(".myDrawer").css("width", "300px");
        $(".drawer").css("border-radius", "0px 25px 25px 0px");
        $(".drawer-span").css("display", "flex");
        $(".drawer-span").css("margin-left", "40px");
        $(".add-note").css("left", "35%");
        $("#card").css("left", "25%");
    }
    else {
        flag = true;
        $(".drawer").css("width", "48px");
        $(".drawer").css("border-radius", "50%");
        $(".myDrawer").css("width", "65px");
        $(".drawer-span").css("display", "none");
        $(".add-note").css("left", "22%");
        $("#card").css("left", "20%");
    }
}
/************************Check Login *************************/
$(document).ready(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    if (!data) {
        window.location.href = "../pages/signin.html";
    }
    if ((!data) === "") {
        window.location.href = "../pages/dashboard.html";
    }
})


/**************Color Palette ********************/
let myPalette =
    `<div class="myPalette">
        <div class="sub-one">
            <div class="color-palette" id="1" style="background-color:#FFFFFF" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="2" style="background-color:#008000" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="3" style="background-color:#800080" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>
        <div class="sub-two">
            <div class="color-palette" id="4" style="background-color:#FF0000" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="5" style="background-color:#008080" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="6" style="background-color:#FFC0CB" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>                        
        <div class="sub-three">
            <div class="color-palette" id="7" style="background-color:#FFA500" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="8" style="background-color:#0000FF" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="9" style="background-color:#A52A2A" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>                        
        <div class="sub-four">
            <div class="color-palette" id="10" style="background-color:#FFFF00" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="11" style="background-color:#00008B" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="12" style="background-color:#808080" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>
    </div>`

 /*******************Add Note Buttons *****************************/
 let myBtns = `<div class="btns">
 <div class="myBtns"><img src="../assets/bell_icon.png" class="my-Btn-img"></div>
 <div class="myBtns"><img src="../assets/collaborate.svg" class="my-Btn-img"></div>
 <div class="myBtns" id="add-note-palette"><img src="../assets/color.svg" class="my-Btn-img">${myPalette}</div>
 <div class="myBtns"><img src="../assets/add_image.svg" class="my-Btn-img"></div>
 <div class="myBtns"><img src="../assets/archive.svg" class="my-Btn-img"></div>
 <div class="myBtns"><img src="../assets/more_icon.svg" class="my-Btn-img"></div>
 </div>
 <button onclick="closeNote($(this).parent().attr('id'))">Close</button>`;

/************************ Add Note*****************************/
function addNote() {
    $(".sub-note1").attr('placeholder', 'Title');
    $(".add-note").css('height', '135px');
    $("#card").css('top', '40%');
    $(".sub-note2").css('display', 'block');
    $(".add-note3").css('display', 'flex');
    document.getElementById("add-note-btns").innerHTML = myBtns;
}
function closeNote(myid) {
     if (myid === "add-note-btns") {
         $(".sub-note1").attr('placeholder', 'Take a note...');
         $(".add-note").css('height', '45px');
         $("#card").css('top', '28%');
         $(".sub-note2").css('display', 'none');
         $(".add-note3").css('display', 'none');

         let title = document.getElementById("title").value;
         let note = document.getElementById("note").value;
         let noteData = {
             "title": title,
             "description": note
         }
         if (title !== "" || note !== "") {
             saveNote(noteData);
         }
         document.getElementById("title").value = "";
         document.getElementById("note").value = "";
     }
     if (myid === "edit-note-btns") {
         $(".edit-note").css("display", "none");
     }
 }

/****************display data*************/
function printNoteData(data) {
    let temp = "";
    let note = document.getElementById("card");
    data['data']['data'].reverse();
    data['data']['data'].forEach(element => {
        let title = element.title;
        let description = element.description;
        temp += `<div class="my-note" id="${element.id}">
            <div class="noteFields" onclick="openEdit()">
                <div class="title-div" id="card-title">${title}</div>
                <div class="note-div" id="card-note">${description}</div>
            </div>
            <div class="btns-div" id="image-btns">
                <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
                <div class="note-btns"><img src="../assets/collaborate.svg" class="note-img"></div>
                <div class="note-btns" id="palette"><img src="../assets/color.svg" class="note-img">
                    ${myPalette}
                </div> 
                <div class="note-btns" id="OpenImgUpload" onclick="upload()"><img src="../assets/add_image.svg" class="note-img"></div>
                <div class="note-btns"><img src="../assets/archive.svg" class="note-img"></div>
                <div class="note-btns moreBtn"><img src="../assets/more_icon.svg" class="note-img">
                    <div class="dropdown">
                        <div class="dropdown-item">Delete note</div>
                        <div class="dropdown-item">Add label</div>
                        <div class="dropdown-item">Add drawing</div>
                        <div class="dropdown-item">Make a copy</div>
                        <div class="dropdown-item">Show checkboxes</div>
                        <div class="dropdown-item">Copy to Google Docs</div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    note.innerHTML = temp;
}
