const answerWindow = document.getElementById('answer');
const openAns = () => {
    answerWindow.classList.add('modal-active');
    document.body.classList.add('main_hidden');
}
const closedAns = () => {
    answerWindow.classList.remove('modal-active');
    document.body.classList.remove('main_hidden');
}
const sendToTelegram = (data, email, customer, telephone) => {
    if(telephone.length > 5) {
        const token = '7829522309:AAFMefQ5F3hEEv8duAurDqHbc0XuPpoFrR4';
        const chatId = '-4593811739';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text= Ім'я ${customer}, телефон ${telephone}, email ${email}, опис ${data}`;
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.send();
        openAns();
        setTimeout(closedAns, 1500)

    }
};
// https://api.telegram.org/bot7829522309:AAFMefQ5F3hEEv8duAurDqHbc0XuPpoFrR4/getUpdates

//modal block start
try {
    const btnOpenModal = document.getElementById('openModal');
    const btnOpenModalTestTop = document.getElementById('test_top_block_button');
    const btnOpenModalTest = document.getElementById('test_block_button');
    const btnClosedModal = document.getElementById('close_icon');
    const top_btn = document.getElementById('top_btn');
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
        const remAnim = () => {
            userCheck.classList.remove('input-form_check_anim');
        }
        if (userCheck.checked === false){
            userCheck.classList.add('input-form_check_anim');
            setTimeout(remAnim, 1000)
            return
        }
        if (userCheck.checked)
        { sendToTelegram('modal', userPhoneEmail.value, userNameInput.value, userPhoneInput.value);
            userNameInput.value = "";
            userPhoneInput.value = "";
            userPhoneEmail.value = "";
            userCheck.checked = false;
            userCheck.classList.remove('input-form_check_anim');
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
    btnOpenModalTest.addEventListener("click", open)
    btnOpenModalTestTop.addEventListener("click", open)
    btnOpenModal.addEventListener('click', open);
    top_btn.addEventListener("click", open);
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
catch (e)
{
    console.log(e)
}
//modal block end

//teachers_block start
try{
    const teachersBlock = document.getElementById('teachers_block')
    const unitLeftBtn = document.getElementById('units_nav_left');
    const unitRightBtn = document.getElementById('units_nav_right');
    const teacherBox = document.getElementById('teacher_box1');

    const scrollRight = () => {
        teachersBlock.scrollBy((teacherBox.offsetWidth + 20), 0);
    }
    const scrollLeft = () => {
        teachersBlock.scrollBy(-(teacherBox.offsetWidth + 20), 0);
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
    const btnLeftLesson = document.getElementById('lesson_type_btn_left');
    const btnRightLesson = document.getElementById('lesson_type_btn_right');

    const idToElem = () => {
        for (let i=0; i < lessonType.length; i++){
            lessonType[i].id = `lessonType`+i;
            lessonType[i].classList.add('invisible');
            lessonType[0].classList.remove('invisible');
        }
    }
    idToElem();

    const isActive = () => {
        for(let i = 0; i < lessonType.length; i++){
            if(!lessonType[i].classList.contains('invisible')){
                return Number(lessonType[i].id.slice(-1))
            }
        }
    }
    const stepLeft = () => {
        if(+isActive() === 0){
            return false
        }
        else {
            let next = +isActive() - 1;
            for (let i = 0; i < lessonType.length; i++){
                lessonType[i].classList.add('invisible');
                lessonType[next].classList.remove('invisible');
            }
        }
    }
    const stepRight = () =>{
        let next = +isActive() + 1;
        if(next === lessonType.length){
            return false
        }
        else {
            for (let i = 0; i < lessonType.length; i++){
                lessonType[i].classList.add('invisible');
                lessonType[next].classList.remove('invisible');
            }
        }
    }


    btnLeftLesson.addEventListener('click', stepLeft);
    btnRightLesson.addEventListener('click', stepRight)
}
catch (e)
{
    console.log(e)
}
//lesson_type end

//burger menu block start
try{
    const burgerMenuOpenBTN = document.getElementById('burger-menu-open');
    const burgerMenu = document.getElementById('burger-menu');
    const burgerMenuCloseBTN = document.getElementById('burger-menu-close');
    const burgerMenuStickOpen = document.getElementById('open-burger-stick-menu');


    const openBurger = () => {
        burgerMenu.classList.add('_active-burger-menu')
    }
    const closeBurger = () => {
        burgerMenu.classList.remove('_active-burger-menu')
    }
    window.addEventListener('scroll', closeBurger)
    burgerMenuOpenBTN.addEventListener('click', openBurger);
    burgerMenuCloseBTN.addEventListener('click', closeBurger);
    // burgerMenuStickOpen.addEventListener('click', openBurger);
}
catch (e)
{
    console.log(e)
}
//burger menu block end

//lesson_type_mob start
try{
    const lessonTypeMob = document.getElementsByClassName('lesson_type_mob_box');
    const swipeLessonType = document.getElementById('lesson_type_mob')
    const btnLeftLessonMob = document.getElementById('lesson_type_btn_left_mob');
    const btnRightLessonMob = document.getElementById('lesson_type_btn_right_mob');


    const setIdForItems = () => {
        for (let i=0; i < lessonTypeMob.length; i++){
            lessonTypeMob[i].id = `lessonType`+i;
            lessonTypeMob[i].classList.add('invisible');
            lessonTypeMob[0].classList.remove('invisible');
        }
    }


    const isActive = () => {
        for(let i = 0; i < lessonTypeMob.length; i++){
            if(!lessonTypeMob[i].classList.contains('invisible')){
                return Number(lessonTypeMob[i].id.slice(-1))
            }
        }
    }
    const stepLeft = () => {
        if(+isActive() === 0){
            return false
        }
        else {
            let next = +isActive() - 1;
            for (let i = 0; i < lessonTypeMob.length; i++){
                lessonTypeMob[i].classList.add('invisible');
                lessonTypeMob[next].classList.remove('invisible');
            }
        }
    }
    const stepRight = () =>{
        let next = +isActive() + 1;
        if(next === lessonTypeMob.length){
            return false
        }
        else {
            for (let i = 0; i < lessonTypeMob.length; i++){
                lessonTypeMob[i].classList.add('invisible');
                lessonTypeMob[next].classList.remove('invisible');
            }
        }
    }


    setIdForItems();

    let x1 = null;
    let y1 = null;

    const handleTouchStart = (event) => {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;

    }
    const handleToucheMove = (event) =>{
        if(!x1 || !y1){
            return false;
        }
        let x2 = event.touches[0].clientX
        let y2 = event.touches[0].clientY
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;
        if(Math.abs(xDiff) < Math.abs(yDiff)){
            return false;
        }
        if (xDiff > 0){
            stepLeft();
        }
        if(xDiff < 0){
            stepRight();
        }
        x1 = null;
        y1 = null;
    }



    swipeLessonType.addEventListener('touchstart', handleTouchStart, false);
    swipeLessonType.addEventListener('touchmove', handleToucheMove, false);
    btnLeftLessonMob.addEventListener('click', stepLeft);
    btnRightLessonMob.addEventListener('click', stepRight)

}
catch (e)
{
    console.log(e)
}
//lesson_type_mob end

//footer send block start
const inputNameFooter = document.getElementById('inputNameFooter');
const inputTelFooter = document.getElementById('inputTelFooter');
const inputEMailFooter = document.getElementById('inputEmailFooter');
const inputDataFooter = document.getElementById('inputDataFooter');
const inputBtnFooter = document.getElementById('inputBtnFooter');
const sendFooterData = function (event) {
    event.preventDefault();
    event.stopPropagation();
    sendToTelegram(inputDataFooter.value, inputEMailFooter.value , inputNameFooter.value, inputTelFooter.value);
    inputNameFooter.value = "";
    inputTelFooter.value = "";
    inputDataFooter.value = "";
    inputEMailFooter.value = "";
}
inputTelFooter.addEventListener('focus', _ => {
    if(!/^\+\d*$/.test(inputTelFooter.value))
        inputTelFooter.value = '+38';

});
inputTelFooter.addEventListener('keypress', e => {
    if(!/\d/.test(e.key)) {
        e.preventDefault();
    }
});
inputBtnFooter.addEventListener('click', sendFooterData);
//footer send block end