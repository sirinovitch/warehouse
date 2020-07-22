$("nav a").click(function(e){
    e.preventDefault();
    var lien = $(this).attr('href');
    console.log(lien);
    $('.content').empty();
    $('.content').load(lien);
});