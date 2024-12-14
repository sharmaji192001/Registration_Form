function validation() {
    if (document.formfill.username.value == "") {
        document.getElementById("result").innerHTML = "Enter Your Username *"
        return false;
    }

    else if (document.formfill.username.value.length < 6) {
        document.getElementById("result").innerHTML = "Atlest 6 characters *"
        return false;
    }

    if (document.formfill.email.value == "") {
        document.getElementById("result").innerHTML = "Enter Your Email *"
        return false;
    }

    else if (document.formfill.password.value == "") {
        document.getElementById("result").innerHTML = "Enter Your Password "
        return false;
    }

    else if (document.formfill.password.value == "") {
        document.getElementById("result").innerHTML = "Enter Confirm Password "
        return false;
    }

    else if (document.formfill.password.value.length<6) {
        document.getElementById("result").innerHTML = "Password much be 6-digit "
        return false;
    }
    
    else if (document.formfill.password.value !== document.formfill.cpassword.value) {
        document.getElementById("result").innerHTML = "Password dose not match "
        return false;
    }

    else if (document.formfill.password.value == document.formfill.cpassword.value) {
        sucesbox.classList.add("open-slide")
        return false;
    }



}

var sucesbox =document.getElementById("suces-box");

function closeSlide()
{
    sucesbox.classList.remove("open-slide")
}