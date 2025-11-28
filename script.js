$(document).ready(function () {
    $("#regForm").submit(function (event) {
        let name = $("#fullname").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let gender = $("#gender").val();
        let address = $("#address").val().trim();

        if (name === "" || email === "" || phone === "" || gender === "" || address === "") {
            alert("All fields are required!");
            event.preventDefault(); 
        }
    });
});