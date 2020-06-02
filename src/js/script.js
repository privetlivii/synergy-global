$(document).ready(function () {
    $('.init__slick').slick();

//Begin menu accordion!!
    $('.toggle-btn').click(function () {
        $('.menu__block').fadeToggle();
    });
    $(document).ready(function () {
        $('#accordion .acc-head').on('click', f_acc);
    });

    function f_acc() {
        $('#accordion .acc-body').not($(this).next()).slideUp(400);
        $('#accordion .acc-body2').not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);
    }

    $(function ($) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".acc-body, .acc-body2"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(); // скрываем его
            }
            var div2 = $(".menu__block");
            if ($(window).width() < 581) //если ширина окна меньше 580 то сработает таргет ниже
                if (!div2.is(e.target) && div2.has(e.target).length === 0) {
                    div2.hide();
                }
        });
    });

//End menu accordion!!!

//begin open form search!!!
    $('.header-search__btn-two').click(function () {
        $('.search-row').fadeToggle();
    });

    $('.search-filter__option').click(function () {
        $('.search-filter__open').fadeToggle();
    });

    $('.search-filter__cross').click(function () {
        $('.search-row').fadeOut();
    });

    $('.select-current').click(function () {
        // скрываем все блоки
        $('.select-list').css("display", "none");
        // убираем активный класс для продукта
        $(".select-parent").removeClass("product-active")
        // Показываем блок у данного продукта
        $(this).parent(".select-parent").children('.select-list').css("display", "block");
        // Данному продукта добавляем класс
        $(this).parent(".select-parent").addClass("product-active");
    });
    $(document).mouseup(function (e) {
        var div3 = $(".select-list");
        if (!div3.is(e.target) && div3.has(e.target).length === 0) {
            div3.hide();
        }
    });
//end form search!!!

//Begin filter select
    $('.block-select').click(function () {
        $('.filter-list').fadeToggle();
        $('.block-title__arrow').toggleClass('arrowup'); //перевернуть стрелку при нажатии на блок
    });

    var fActive = '';

    function filterSpeaker(speaker) {
        if (fActive != speaker) {
            $('.speakers-box').filter('.' + speaker).slideDown();
            $('.speakers-box').filter(':not(.' + speaker + ')').slideUp();
            fActive = speaker;
        }
    }

    $('.filter-list__tyson').click(function () {
        filterSpeaker('tyson');
    });

    $('.filter-list__utiaseva').click(function () {
        filterSpeaker('utiaseva');
    });

    $('.filter-list__arnold').click(function () {
        filterSpeaker('arnold');
    });

    $('.filter-list__all').click(function () {
        $('.speakers-box').slideDown();
        fActive = 'all';
    });

    $(document).mouseup(function (e) {
        var div4 = $(".filter-list");
        if (!div4.is(e.target) && div4.has(e.target).length === 0) {
            div4.hide();
        }
    });

//End filter select

//Begin text more
    $('.speaker-text__more').click(function () {
        $('.speaker-text__block-more').fadeToggle();
        $(this).remove()
    });
//End text more








    $('.callback').submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            dataType: "html",
            data: $(this).serialize()
        }).done(function () {
            $.fancybox.open({
                src: '#modal-04',
                type: 'inline'
            });
            $('.callback').trigger("reset");
            setTimeout(function () {
                $.fancybox.close();
            }, 3000);
        });
        return false;
    });









});