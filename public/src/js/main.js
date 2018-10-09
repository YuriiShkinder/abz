

let departments = $('.departments__item');
let isOpened = false;
departments.click(function () {
    if(isOpened) {
        return false;
    }
    isOpened = true;
    $(this).css({'left':`${$(this).offset().left}px`});
    $(this).css({'top':`${$(this).offset().top}px`});
    setTimeout(() => {
        $(this).addClass('departments__item_active');
        departments.each((i, item) => {
            if (item !== this) {
                $(item).addClass('departments__item_disabled');
            }
        })
    },1)
});

$(document).on('click', (e) => {
    console.log(isOpened);
    console.log($(e.target).closest('.departments__item_active').length);
    if(isOpened && !$(e.target).closest('.departments__item_active').length) {
        console.log('opened')
        // departments.removeClass('departments__item_active departments__item_disabled');
        // setTimeout(() => {
        //     isOpened = false;
        // },500)
    }
});