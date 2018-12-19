$(document).ready(function(){
    $('.sidenav').sidenav();

    function startScreen() {
        startButton = "<div class='row animated fadeInUp slower delay-5s'><div class='col offset-s1'><button class='btn btn-large waves-effect waves-light start_button' type='submit' name='action'>View Me!<i class=' large material-icons right'>search</i></button></div></div>";
        $(".v-center").html(startButton);
    }
    startScreen();

    $("main").on("click", ".start_button", function(event){
        event.preventDefault();
        window.open('/about','_self',false);
    });

    // Get references to page elements
    var submitButton = $("#submit");
    var firstName = $("#first_name");
    var lastName = $("#last_name");
    var email = $("#email");
    var messageText = $("#textarea1");

    // The API object contains methods for each kind of request we'll make
    var API = {
        saveMessage: function(messaged) {
        return $.ajax({
        headers: {
            "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/contactdb",
        data: JSON.stringify(messaged)
        });
    },
        getMessage: function() {
        return $.ajax({
        url: "api/contactdb",
        type: "GET"
        });
    },
        deleteMessage: function(id) {
        return $.ajax({
        url: "api/contactdb/" + id,
        type: "DELETE"
        });
    }
    };

    // refreshExamples gets new examples from the db and repopulates the list
    // var refreshExamples = function() {
    // API.getMessage().then(function(data) {
    //     var messages = data.map(function(example) {
    //         var $a = $("<a>")
    //             .text(example.text)
    //             .attr("href", "/example/" + example.id);

    //         var $li = $("<li>")
    //             .attr({
    //             class: "list-group-item",
    //             "data-id": example.id
    //             })
    //             .append($a);

    //         var $button = $("<button>")
    //             .addClass("btn btn-danger float-right delete")
    //             .text("ｘ");

    //         $li.append($button);

    //         return $li;
    //     });

    //     $exampleList.empty();
    //     $exampleList.append(messages);
    //     });
    // };

    // handleFormSubmit is called whenever we submit a new example
    // Save the new example to the db and refresh the list
    var handleFormSubmit = function(event) {
        event.preventDefault();

        var messaged = {
            firstname: firstName.val().trim(),
            lastname: lastName.val().trim(),
            email: email.val().trim(),
            message: messageText.val().trim()
        };

        if (!(messaged.firstname && messaged.lastname)) {
            var toastHTML = '<span>Please provide your First and Last Name</span><button class="btn-flat toast-action">OK</button>';
            M.toast({html: toastHTML});
        return;
        }
        if (!(messaged.email)) {
            var toastHTML = '<span>Please provide an Email address</span><button class="btn-flat toast-action">OK</button>';
            M.toast({html: toastHTML});
        return;
        }
        if (!(messaged.message)) {
            var toastHTML = '<span>Please type in your brief message</span><button class="btn-flat toast-action">OK</button>';
            M.toast({html: toastHTML});
        return;
        }

        API.saveMessage(messaged).then(function() {
            M.toast({html: 'Message Sent!'})
        });

        firstName.val("");
        lastName.val("");
        email.val("");
        messageText.val("");
    };

    // handleDeleteBtnClick is called when an example's delete button is clicked
    // Remove the example from the db and refresh the list
    // var handleDeleteBtnClick = function() {
    //     var idToDelete = $(this)
    //         .parent()
    //         .attr("data-id");

    //     API.deleteExample(idToDelete).then(function() {
    //     refreshExamples();
    //     });
    // };

    // Add event listeners to the submit and delete buttons
    submitButton.on("click", handleFormSubmit);
    // $exampleList.on("click", ".delete", handleDeleteBtnClick);

});