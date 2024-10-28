//modal block start

try {
    const btnOpenModal = document.getElementById('openModal');
    const btnClosedModal = document.getElementById('close_icon');
    const btnsubmit = document.getElementById('closedModal');
    const modal = document.getElementById('modal');
    const userNameInput = document.getElementById('userNameInput');
    const userPhoneInput = document.getElementById('userPhoneInput');
    const userPhoneEmail = document.getElementById('userPhoneEmail');
    const userCheck = document.getElementById('userOk');

       const open = function (){
        modal.classList.add('modal-active');
        document.body.classList.add('main_hidden');
    }
    const closed = function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(userCheck.checked)
        if (userCheck.checked === false){
            return
        }
        if (userCheck.checked)
        {// sendToTelegram(itemName[idButton], userNameInput.value, userPhoneInput.value);
            userNameInput.value = "";
            userPhoneInput.value = "";
            userPhoneEmail.value = "";
            userCheck.checked = false;
            modal.classList.remove('modal-active');
            document.body.classList.remove('main_hidden');
        }
    }
    const exit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        userNameInput.value = "";
        userPhoneInput.value = "";
        userPhoneEmail.value = "";
        userCheck.checked = false;
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    btnOpenModal.addEventListener('click', open);
    btnClosedModal.addEventListener('click', exit);
    btnsubmit.addEventListener('click', closed);
    userPhoneInput.addEventListener('focus', _ => {
        if(!/^\+\d*$/.test(userPhoneInput.value))
            userPhoneInput.value = '+38';

    });

    userPhoneInput.addEventListener('keypress', e => {
        if(!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });


}
catch (e){
    console.log(e)
}
//modal block end

//teachers_block start
try{
    const teachersBlock = document.getElementById('teachers_block')
    const unitLeftBtn = document.getElementById('units_nav_left');
    const unitRightBtn = document.getElementById('units_nav_right');

    const scrollRight = () => {
        teachersBlock.scrollBy(370, 0);
    }
    const scrollLeft = () => {
        teachersBlock.scrollBy(-370, 0);
    }

    unitRightBtn.addEventListener('click', scrollRight);
    unitLeftBtn.addEventListener('click', scrollLeft);
}
catch (e)
{
    console.log(e)
}

//teachers_block end

//lesson_type start
try{
    const lessonType = document.getElementsByClassName('lesson_type_block');
    const idToElem = () => {
        for (let i=0; i < lessonType.length; i++){
            lessonType[i].id = `lessonType`+i;
            lessonType[i].classList.add('invisible');
            lessonType[0].classList.remove('invisible');
        }
    }

    idToElem();
}
catch (e){
    console.log(e)
}


//lesson_type end