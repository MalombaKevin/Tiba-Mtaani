$(document).ready(function() {

    function Search(location, service) {
        (this.locationS = location),
        (this.serviceS = service)
    }

    $("#form01").submit(function() {
        event.preventDefault();
        alert("Please login or sign up");
    })


    $("#form02").submit(function() {
        event.preventDefault()
        var userSearch = new Search(
            $("#loc").val(),
            $("#serv").val()
        )
        if (userSearch.locationS === "" || userSearch.serviceS === "") {
            alert("Please select both search inputs")
        } else {
            $("#table").show()
            $("#servi").text(userSearch.serviceS);
            $("#loca").text(userSearch.locationS)

        }

    })
})