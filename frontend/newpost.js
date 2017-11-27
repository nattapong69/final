$('#post').click(function(){
    createNewPost();
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(){

    var newpost = {
        // POINT 8. Use jQuery to get form data and create an object for new post

        create_date: moment()
    };

    var url = 'http://localhost:8080/api/posts';
    // POINT 9. Insert data to REST API with axios

}

function previewPhoto(src){
    $('#preview').attr('src', src);
}