// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");

        var eatBurger = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatBurger
        }).then(
            function () {
                console.log("Yummy Burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New to Eat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});