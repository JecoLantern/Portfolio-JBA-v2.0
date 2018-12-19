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
});