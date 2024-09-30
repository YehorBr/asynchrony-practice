// const refs = {
//     notification: document.querySelector('.js-alert'),
//     };
    
//     refs.notification.addEventListener('click', onNotificationClick);
    
//     showNotification();
    
//     /*
//     * Функції
//     */

//     const timerId = setTimeout(hideNotification, 3000);


//     function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timerId)
//     }
    
//     function showNotification() {
//     refs.notification.classList.add('is-visible');
    
//     }
    
//     function hideNotification() {
//     refs.notification.classList.remove('is-visible');
//     }



setTimeout(() => {
    confirm("Підпишись")
}, 5000);

let countsOfConfirm = 0

setInterval(() => {
    confirm("Підпишись")
    countsOfConfirm += 1
},3000)