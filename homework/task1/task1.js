'use strict';

const addBtn = document.getElementById('add-item-btn');
const wrapper = document.getElementById('notifications-wrapper');

addBtn.addEventListener('click', function () {

    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = 'У вас новое уведомление!';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'Закрыть';// task1.js
    'use strict';

    const addBtn = document.getElementById('add-item-btn');
    const wrapper = document.getElementById('notifications-wrapper');

    addBtn.addEventListener('click', function () {

        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = 'У вас новое уведомление!';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Закрыть';

        closeBtn.addEventListener('click', function () {
            notification.remove();
        });

        notification.append(closeBtn);

        wrapper.append(notification);

        setTimeout(function () {
            notification.remove();
        }, 5000);

    });

    closeBtn.addEventListener('click', function () {
        notification.remove();
    });

    notification.append(closeBtn);

    wrapper.append(notification);

    setTimeout(function () {
        notification.remove();
    }, 5000);

});