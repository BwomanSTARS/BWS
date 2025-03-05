document.addEventListener('DOMContentLoaded', function() {
    // Get all modal triggers
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Add click event to all trigger buttons
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when clicking the close button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
    });

    // Debug da imagem
    const clinicImage = document.querySelector('.clinic-image');
    if (clinicImage) {
        clinicImage.addEventListener('load', function() {
            console.log('Imagem carregada com sucesso');
        });
    }

    console.log('Verificando estrutura de arquivos...');
    fetch('images/placeholder.svg')
        .then(response => console.log('placeholder.svg encontrado'))
        .catch(error => console.error('Erro ao carregar placeholder.svg:', error));
    
    fetch('images/clinica.jpg')
        .then(response => console.log('clinica.jpg encontrado'))
        .catch(error => console.error('Erro ao carregar clinica.jpg:', error));
});
