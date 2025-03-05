document.addEventListener('DOMContentLoaded', function() {
    const reviews = [
        {
            author: "Maria Silva",
            rating: 5,
            text: "Excelente atendimento! Os tratamentos superaram minhas expectativas. A equipe é muito profissional e atenciosa. Recomendo muito!",
            date: "2024-02-15",
            avatar: "https://lh3.googleusercontent.com/a/default-user"
        },
        {
            author: "Ana Paula Costa",
            rating: 5,
            text: "Profissionais muito competentes e ambiente super acolhedor. Os resultados foram além do que eu esperava. Adorei o resultado!",
            date: "2024-02-10",
            avatar: "https://ui-avatars.com/api/?name=Ana+Paula&background=random&size=96"
        },
        {
            author: "Carla Santos",
            rating: 5,
            text: "Lugar maravilhoso, atendimento impecável e resultados incríveis! Já indiquei para todas as minhas amigas.",
            date: "2024-02-05",
            avatar: "https://ui-avatars.com/api/?name=Carla+Santos&background=random&size=96"
        },
        {
            author: "Juliana Ferreira",
            rating: 5,
            text: "Amei a clínica! Super profissionais, atenciosos, ambiente lindo e agradável. Biomedica Dra. Natália é maravilhosa, explica tudo com detalhes, amei os procedimentos e super indico 🤩",
            date: "2024-01-20",
            avatar: "https://ui-avatars.com/api/?name=Juliana+Ferreira&background=random&size=96"
        },
        {
            author: "Patricia Oliveira",
            rating: 5,
            text: "Clínica excelente, profissionais maravilhosas, super indico!",
            date: "2023-12-15",
            avatar: "https://ui-avatars.com/api/?name=Patricia+Oliveira&background=random&size=96"
        },
        {
            author: "Fernanda Souza",
            rating: 5,
            text: "Ótimo atendimento, profissionais qualificadas e atenciosas, ambiente agradável e procedimentos de excelente qualidade, super recomendo 🤩",
            date: "2023-11-22",
            avatar: "https://ui-avatars.com/api/?name=Fernanda+Souza&background=random&size=96"
        }
    ];

    function createStars(rating) {
        const fullStar = '<span class="google-symbols" aria-hidden="true" style="color: #e7711b;">★</span>';
        const emptyStar = '<span class="google-symbols" aria-hidden="true" style="color: #e7711b;">☆</span>';
        return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }

    function createReviewCard(review) {
        return `
            <div class="review-card gm-style" data-aos="fade-up" data-aos-delay="100">
                <div class="review-header">
                    <img class="review-avatar" src="${review.avatar}" alt="${review.author}" 
                         style="width: 40px; height: 40px; border-radius: 50%;">
                    <div class="review-info">
                        <div class="review-author" style="font-weight: 500; color: #202124;">${review.author}</div>
                        <div class="review-rating">
                            ${createStars(review.rating)}
                            <span class="review-date" style="color: #5f6368; margin-left: 8px;">
                                ${formatDate(review.date)}
                            </span>
                        </div>
                    </div>
                </div>
                <p class="review-text" style="color: #202124; margin-top: 12px; line-height: 20px;">
                    ${review.text}
                </p>
            </div>
        `;
    }

    const reviewsContainer = document.getElementById('reviewsContainer');
    if (reviewsContainer) {
        reviews.forEach(review => {
            reviewsContainer.innerHTML += createReviewCard(review);
        });
    }

    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    const reviewsLink = document.querySelector('a[href="#reviews"]');
    if (reviewsLink) {
        reviewsLink.addEventListener('click', () => {
            setTimeout(() => {
                AOS.refresh(); // Atualiza as animações após o modal abrir
            }, 100);
        });
    }
});
