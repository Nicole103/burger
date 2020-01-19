$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger ={
            burger_name: $("#burgerOrder").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers",{
            type:"POST",
            data: newBurger
        }).then(
            function(){
                console.log("create new burger");
                location.reload();
            }
        );
    });
})