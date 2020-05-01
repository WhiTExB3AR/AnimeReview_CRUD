$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active');
        $('nav').toggleClass('active');
    })
    //Tạo hiệu ứng cho CRUD
    $('nav ul li a').click(function () {
        if ($('nav ul li a.active').attr('id') == 'crud') {
            toggleContainer();
        }
        $('nav ul li a.active').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).attr('id') == 'crud') {
            toggleContainer();
        }
    })
    var toggleContainer = function () {
        $(".container").animate({
            height: 'toggle'
        });
    }

    //Bắt đầu cho CRUD 
    //Sự kiện click cho btnRead
    $('#btnRead').click(() => {
        const reqURL = 'mangas/' + $('#inTitle').val();
        $.ajax({
            url: reqURL,
            type: "GET",
            dataType: "json",
            success: (data) => {
                $('#result').html('Chapter: ' + data.chapter + '; Author: ' + data.author);
                $('#status').html('GET' + reqURL);
            }
        });
    });
    //Sự kiện click cho btnCreate
    $('#btnCreate').click(() => {
        const reqURL = 'mangas/create';
        //Tạo object
        var manga = new Object();
        manga.titleName = $('#inTitle').val();
        manga.chapter = $('#inChapter').val();
        manga.author = $('#inAuthor').val();
        $.ajax({
            url: reqURL,
            type: 'POST',
            dataType: 'text',
            data: manga,
            success: (data) => {
                $('#status').html('POST' + data);
            }
        });
    });
    //Sự kiện click cho btnUpdate
    $('#btnUpdate').click(() => {
        const reqURL = 'mangas/update';
    });
    //Sự kiện click cho btnDelete
    $('#btnDelete').click(()=>{
        const reqURL = 'mangas/delete';
        var titleName = $('#inTitle').val();
    });

});