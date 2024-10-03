(function handleModal() {
    const
        modal = document.getElementById('modal'),
        openBtn = document.getElementById('modal-open'),
        closeBtn = document.getElementById('modal-close');

    if (!closeBtn || !openBtn || !modal) {
        throw new ReferenceError('Some of the elements were not found');
    }

    const openModal = () => {
        modal.classList.add('modal_open');
        document.body.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('modal_open');
        document.body.overflow = 'initial';
    };

    openBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.modal__content') == null) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
})();