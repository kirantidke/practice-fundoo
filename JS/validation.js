var fName_flag, lName_flag, email_flag, password_flag, confirmPass_flag;

/*------------------------------------------------ FirstName Validations ------------------------------------------------------*/

function validateFirstName() {
    let border = document.getElementById("firstname");
    let fName = document.getElementById('firstname').value;
    let pattern = RegExp("[A-Z][a-z]{2,}");
    if (pattern.test(fName)) {
        fName_flag = true;
        $("#fNameError").text("");
        border.style.borderColor = "gainsboro";
    } else {
        fName_flag = false;
        $("#fNameError").text("enter valid first name");
        border.style.borderColor = "red";
    }
}
/*------------------------------------------------ LastName Validations ------------------------------------------------------*/

function validateLastName() {
    let border = document.getElementById("lastname");
    let lName = document.getElementById('lastname').value;
    let pattern = RegExp("[A-Z][a-z]{2,}");
    if (pattern.test(lName)) {
        lName_flag = true;
        $("#lNameError").text("");
        border.style.borderColor = "gainsboro";
    } else {
        lName_flag = false;
        $("#lNameError").text("enter valid last name");
        border.style.borderColor = "red";
    }
}

/*------------------------------------------------ Email Validations ------------------------------------------------------*/

function validateEmail() {
    let border = document.getElementById("username");
    let email = document.getElementById('username').value;
    let pattern = RegExp("^[a-zA-Z]{4,}[a-zA-Z0-9\.\!\_]*\@[a-z]*\.(co|in|com)$");
    if (pattern.test(email)) {
        email_flag = true;
        $("#emailError").text("");
        border.style.borderColor = "gainsboro";
    } else {
        email_flag = false;
        $("#emailError").text("enter valid email address");
        border.style.borderColor = "red";
    }
}

/*------------------------------------------------ Password Validations ------------------------------------------------------*/

function validatePassword() {
    let border = document.getElementById("password");
    let passwd = document.getElementById('password').value;
    let passPattern = RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");
    if (passPattern.test(passwd)) {
        console.log("Password Matched");
        password_flag = true;
        $("#passwordError").text("");
        border.style.borderColor = "gainsboro";
    }
    else {
        password_flag = false;
        $("#passwordError").text("enter valid password");
        border.style.borderColor = "red";
    }
}
function validateConfirmPassword() {
    let border = document.getElementById("confirm");
    let pass = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirm').value;
    if (pass === confirmPass) {
        confirmPass_flag = true;
        $("#confirmPasswordError").text("");
        border.style.borderColor = "gainsboro";
    }
    else {
        confirmPass_flag = false;
        $("#confirmPasswordError").text("password didn't matched");
        border.style.borderColor = "red";
    }
}

/*-------------------------------------------------- CheckBox Show/Hide --------------------------------------------------------*/

function showPassword() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}
function showPass() {
    let z = document.getElementById("password");
    if (z.type === "password") {
        z.type = "text";
    } else {
        z.type = "password";
    }
}

/*-------------------------------------------------- SnackBar Here --------------------------------------------------------*/
function showSnackBar(msg) {
    $('#snackbar').addClass('display');
    $('#snackbar').html(msg);
    setTimeout(() => {
        $('#snackbar').removeClass('display');
    }, 2000)
}

/*-------------------------------------------------- Field Validations --------------------------------------------------------*/
// let data;
function checkFields() {
    if (document.getElementById('firstname').value == "") { $('#fNameError').text("First name required..."); $('#firstname').css('border-color', 'red'); }
    if (document.getElementById('lastname').value == "") { $('#lNameError').text("Last name required..."); $('#lastname').css('border-color', 'red'); }
    if (document.getElementById('username').value == "") { $('#emailError').text("Email required..."); $('#username').css('border-color', 'red'); }
    if (document.getElementById('password').value == "") { $('#passwordError').text("Password required..."); $('#password').css('border-color', 'red'); }
    if (document.getElementById('confirm').value == "") { $('#confirmPasswordError').text("Password match required..."); $('confirm').css('border-color', 'red'); }

    if (fName_flag && lName_flag && email_flag && password_flag && confirmPass_flag == true) {
        let fname = document.getElementById('firstname').value;
        let lname = document.getElementById('lastname').value;
        let uname = document.getElementById('username').value;
        let pass = document.getElementById('password').value;
        let userData = {
            "firstName": fname,
            "lastName": lname,
            "email": uname,
            "password": pass,
            "service": "advance"
        }
        // Store SignUp data 
        postData(userData);
    }
}
/*----------------------------------------------- Login Validation ----------------------------------------------------------*/
function loginValidation() {
    if (document.getElementById('username').value == "") { $('#emailError').text("Email required..."); $('#username').css('border-color', 'red'); }
    if (document.getElementById('password').value == "") { $('#passwordError').text("Password required..."); $('#password').css('border-color', 'red'); }
    if (email_flag && password_flag == true) {
        let email = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let loginData = {
            "email": email,
            "password": password
        }
        loginUser(loginData);
    }
}
/*----------------------------------------------- Password Reset ----------------------------------------------------------*/
function resetEmail() {
    if (document.getElementById('username').value == "") { $('#emailError').text("Email required..."); $('#username').css('border-color', 'red'); }
    if (email_flag == true) {
        let email = document.getElementById('username').value;
        let emailData = {
            "email": email
        }
        resetPassword(emailData);
    }
}
