document.addEventListener('DOMContentLoaded', () => {

    const btnShowMore = document.querySelector('#showMore');
    const moreText = document.querySelector('#moreText');

    if (btnShowMore && moreText) {
        btnShowMore.addEventListener('click', () => {
            moreText.classList.toggle('d-none');
            btnShowMore.textContent = moreText.classList.contains('d-none') 
                ? 'Подробнее' 
                : 'Скрыть';
        });
    }

    const contactForm = document.querySelector('#contactForm');
    const formMessage = document.querySelector('#formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const comment = document.querySelector('#comment').value;

            if (!name || !email.includes('@') || !comment) {
                formMessage.textContent = 'Заполни все поля и проверь email (должна быть @)';
                formMessage.className = 'text-danger mt-3 text-center'; 
                return;
            }

            formMessage.textContent = `Спасибо, ${name}! Твое сообщение отправлено.`;
            formMessage.className = 'text-success mt-3 text-center'; 
            contactForm.reset(); 
        });
    }

    const projectsList = document.querySelector('#projects');
    if (projectsList) {
        const projects = [
            { title: 'Мои увлечения', tech: 'Танцы (12 лет), книги и время с близкими.' },
            { title: 'Мои навыки', tech: 'Основы HTML, CSS и фреймворка Bootstrap.' }
        ];

        projectsList.innerHTML = projects.map(project => `
            <div class="col-12 col-md-6">
                <div class="card p-4 shadow-sm h-100">
                    <h3>${project.title}</h3>
                    <p class="text-muted mb-0">${project.tech}</p>
                </div>
            </div>
        `).join('');
    }
});