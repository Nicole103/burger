$(function(){
    //create burger 
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
    //update burger "devour burger"
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devoured: "true"
        };
        $.ajax("/api/burgers/" + id,{
            type:"PUT",
            data: newDevourState
        }).then(
            function(){
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });
    //delete burger from devoured list
    $(".delete-burger").on("click", function(event){
        var id = $(this).data("id");
        $.ajax("/api/burgers/"+ id, {
            type: "DELETE",
        }).then(
            function(){
                console.log("delete burger", id);
                location.reload();
            }
        );
    });
});