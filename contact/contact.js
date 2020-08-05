

language = 'vi';
formInvalidMessages = {
    txtName: {
        en: 'Name only accepts letters, at least 3 characters',
        vi: 'Họ tên chỉ chứa chữ cái, tối thiểu 3 ký tự'
    },
    txtSubject: {
        en: 'Please fill out this field.',
        vi: 'Vui lòng điền vào Tiêu đề'
    },
    txtMessage: {
        en: 'Please fill out this field.',
        vi: 'Vui lòng điền vào nội dung'
    },
    txtEmail: {
        en: 'Please enter a valid email, eg. anhtuan3675@outlook.com',
        vi: 'Vui lòng nhập email hợp lệ, ví dụ: anhtuan3675@outlook.com'
    }
};



function getInvalidMessageWhenEmpty() {
    switch (language) {
        case 'vi': {
            return 'Vui lòng điền vào trường này';
        }

        case 'en': default: {
            return 'Please fill out this field';
        }
    }
}

function getInvalidMessage(id) {
    return formInvalidMessages[id][language.split('&quote;')];
}


document.querySelectorAll('#inputs > *').forEach((el, index, parent) => {

    el.oninput = function(e) {
        el.setCustomValidity('');
        el.checkValidity();
    };


    el.oninvalid = function(e) {
        if (el.value === '') {
            el.setCustomValidity(getInvalidMessageWhenEmpty());
        }
        else {
            el.setCustomValidity(getInvalidMessage(el.id));
        }
    };

});





// TweenMax.from('#normal', {
//     scale: 0,
//     duration: 0.5
// });
// TweenMax.to('#normal', {
//     scale: 1,
//     duration: 1.25,
//     ease: "bounce.out"
// });



document.querySelectorAll('#inputs > *').forEach((el, index, parent) => {
    TweenMax.from(el, {
        y: 100,
        opacity: 0,
        delay: index / 10,
    });
    TweenMax.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        delay: index / 10,
        ease: "slow(0.7, 0.7, false)"
    });
});



TweenMax.from('#btn-send', {
    y: 100,
    opacity: 0,
    delay: 0.6
});
TweenMax.to('#btn-send', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.6,
    ease: "slow(0.7, 0.7, false)"
});


TweenMax.from('#btn-open-map', {
    y: 100,
    opacity: 0,
    delay: 0.6
});
TweenMax.to('#btn-open-map', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.6,
    ease: "slow(0.7, 0.7, false)"
});
