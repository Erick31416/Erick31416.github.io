$('.ocultarMostar > *').click(function() {
    $(this).toggle();
    $(this).siblings().toggle();
});

$('.fast-test-2021-03').keypress(function (e) {
    if(e.which == 13) {
        approach = $(this).val().toUpperCase();
        solutions = $(this).data('solutions').toUpperCase().split("-");
        if (solutions.includes(approach)) {
            alert('Correcto')
        }else{
            if (confirm('Ver la respuestas')) {
                alert(solutions);
            }
        }
    }
})
$("acronym").click(function () {
    var $title = $(this).find(".title");
    if (!$title.length) {
        $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
    } else {
        $title.remove();
    }
});