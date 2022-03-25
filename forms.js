$(document).ready(function() {
    $("#form1").submit(function() {
        event.preventDefault()
        alert("It is our pleasure to have you back. Tiba bora Maisha bora.")
        open("home.html")
    })
    $(".form1").submit(function() {
        event.preventDefault()
        alert("Thank you for signing up with Tiba Mtaani. Your health is our concern")
        open("home.html")
    })
})