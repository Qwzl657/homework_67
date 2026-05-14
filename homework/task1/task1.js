'use strict';

window.addEventListener('load', function () {

    const addBtn = document.getElementById('add-item-btn');
    const wrapper = document.getElementById('notifications-wrapper');

    addBtn.addEventListener('click', function () {

        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = 'У вас новое уведомление!';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Закрыть';

        const timerId = setTimeout(function () {
            notification.remove();
        }, 5000);

        closeBtn.addEventListener('click', function () {
            clearTimeout(timerId);
            notification.remove();
        });

        notification.append(closeBtn);
        wrapper.append(notification);

    });

});