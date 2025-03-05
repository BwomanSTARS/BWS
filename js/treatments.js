// Define os tratamentos
const treatments = [
    // Peelings
    {
        id: 'peeling-superficial',
        category: 'peelings',
        title: 'Peeling Químico Superficial (Ácido Glicólico/Mandélico)',
        description: 'Remove a camada mais externa da pele, clareando manchas, acne e rugas superficiais. Estimula a renovação celular e o colágeno.'
    },
    {
        id: 'peeling-medio',
        category: 'peelings',
        title: 'Peeling Químico Médio (Ácido Tricloroacético - TCA)',
        description: 'Remove camadas mais profundas da pele, tratando acne, rugas mais profundas e hiperpigmentação. Exige mais cuidado pós-peeling.'
    },
    {
        id: 'peeling-enzimatico',
        category: 'peelings',
        title: 'Peeling Enzimático',
        description: 'Utiliza enzimas naturais para esfoliar a pele, removendo células mortas e promovendo a renovação celular de forma suave. Ideal para peles sensíveis.'
    },
    {
        id: 'dermaplaning',
        category: 'peelings',
        title: 'Dermaplaning',
        description: 'Remove a camada superficial da pele e os pelos finos (vellus) com uma lâmina, proporcionando um aspecto mais liso e luminoso.'
    },
    {
        id: 'peeling-cristal',
        category: 'peelings',
        title: 'Peeling de Cristal',
        description: 'Utiliza microcristais para esfoliar a pele, removendo células mortas e estimulando a produção de colágeno. Melhora a textura e o viço da pele.'
    },
    {
        id: 'peeling-diamante',
        category: 'peelings',
        title: 'Peeling de Diamante',
        description: 'Similar ao peeling de cristal, porém com partículas de diamante, que são mais suaves e promovem uma esfoliação mais delicada.'
    },
    {
        id: 'peeling-laser',
        category: 'peelings',
        title: 'Peeling a Laser',
        description: 'Utiliza o laser para remover camadas da pele, tratando manchas, cicatrizes, rugas e flacidez. Estimula a produção de colágeno e elastina.'
    },
    {
        id: 'peeling-carbono',
        category: 'peelings',
        title: 'Peeling de Carbono',
        description: 'Aplica-se uma máscara de carbono na pele e, em seguida, utiliza-se o laser para remover o carbono e as células mortas. Trata acne, oleosidade e poros dilatados.'
    },
    {
        id: 'peeling-retinoico',
        category: 'peelings',
        title: 'Peeling de Ácido Retinóico',
        description: 'Promove a renovação celular, tratando acne, hiperpigmentação e rugas. Pode causar descamação intensa da pele.'
    },
    {
        id: 'peeling-clareador',
        category: 'peelings',
        title: 'Peeling Clareador',
        description: 'Combina diferentes ácidos para clarear manchas e hiperpigmentação, como melasma e sardas.'
    },
    {
        id: 'peeling-detox',
        category: 'peelings',
        title: 'Peeling Detox',
        description: 'Promove a limpeza profunda da pele, removendo toxinas e impurezas. Controla a oleosidade e minimiza os poros.'
    },

    // Microagulhamento
    {
        id: 'microagulhamento-manual',
        category: 'microagulhamento',
        title: 'Microagulhamento Manual (Roller/Carimbo)',
        description: 'Utiliza um rolo ou carimbo com microagulhas para perfurar a pele, estimulando a produção de colágeno e elastina. Trata cicatrizes, rugas e flacidez.'
    },
    {
        id: 'dermapen',
        category: 'microagulhamento',
        title: 'Dermapen (Elétrico)',
        description: 'Similar ao microagulhamento manual, porém com um dispositivo elétrico que controla a profundidade das agulhas.'
    },
    {
        id: 'radiofrequencia',
        category: 'microagulhamento',
        title: 'Radiofrequência',
        description: 'Combina o microagulhamento com a radiofrequência, que aquece a pele e estimula ainda mais a produção de colágeno.'
    },
    {
        id: 'prp',
        category: 'microagulhamento',
        title: 'PRP (Plasma Rico em Plaquetas)',
        description: 'Utiliza o plasma sanguíneo do paciente, rico em plaquetas, para estimular a regeneração da pele e o colágeno.'
    },
    {
        id: 'microagulhamento-robotico',
        category: 'microagulhamento',
        title: 'Microagulhamento Robótico',
        description: 'Utiliza um sistema robótico para inserir as microagulhas de forma precisa e controlada, minimizando o desconforto e o tempo de recuperação.'
    },

    // Outros Serviços
    {
        id: 'inibidor-apetite',
        category: 'outros',
        title: 'Inibidor de Apetite',
        description: 'Auxilia no processo de emagrecimento, reduzindo o apetite e a vontade de comer.'
    },
    {
        id: 'depilacao-laser',
        category: 'outros',
        title: 'Depilação a Laser',
        description: 'Remove os pelos de forma duradoura através da aplicação de laser.'
    },
    {
        id: 'skinbooster',
        category: 'outros',
        title: 'Skinbooster',
        description: 'Hidrata a pele profundamente, suavizando linhas finas e melhorando a elasticidade e o viço.'
    },
    {
        id: 'limpeza-pele',
        category: 'outros',
        title: 'Limpeza de Pele',
        description: 'Remove impurezas, células mortas e comedões (cravos) da pele, deixando-a mais limpa e saudável.'
    },
    {
        id: 'mascara-rejuvenescedora',
        category: 'outros',
        title: 'Máscara Rejuvenescedora',
        description: 'Máscara facial com ativos que promovem a hidratação, nutrição e rejuvenescimento da pele.'
    },
    {
        id: 'botox',
        category: 'outros',
        title: 'Botox',
        description: 'Aplicação de toxina botulínica para suavizar rugas e linhas de expressão.'
    },
    {
        id: 'lipo-enzimatica',
        category: 'outros',
        title: 'Lipo Enzimática',
        description: 'Aplicação de enzimas que quebram as moléculas de gordura.'
    },
    {
        id: 'massagem-relaxante',
        category: 'outros',
        title: 'Massagem Relaxante',
        description: 'Massagem terapêutica que promove relaxamento muscular, reduz o estresse e melhora a circulação sanguínea.'
    },
    {
        id: 'drenagem-linfatica',
        category: 'outros',
        title: 'Drenagem Linfática',
        description: 'Técnica de massagem que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação.'
    },
    {
        id: 'reiki',
        category: 'outros',
        title: 'Reiki',
        description: 'Terapia energética que promove equilíbrio físico e emocional através da imposição das mãos.'
    },
    {
        id: 'manta-termica',
        category: 'outros',
        title: 'Manta Térmica',
        description: 'Tratamento que utiliza calor para promover relaxamento muscular, redução de medidas e desintoxicação.'
    },
    {
        id: 'hidratacao-facial',
        category: 'outros',
        title: 'Hidratação Facial Profunda',
        description: 'Tratamento intensivo para hidratar e revitalizar a pele do rosto, devolvendo luminosidade e maciez.'
    },
    {
        id: 'carboxiterapia',
        category: 'outros',
        title: 'Carboxiterapia',
        description: 'Aplicação de gás carbônico medicinal que estimula a circulação e produção de colágeno.'
    },
    {
        id: 'massagem',
        category: 'outros',
        title: 'Massagem',
        description: 'Promove o relaxamento muscular, alivia dores e tensões, melhora a circulação sanguínea e linfática.'
    }
];

// Funções de renderização
function handleTreatmentClick(treatment) {
    window.location.href = `treatments.html?category=${treatment.category}#${treatment.id}`;
}

function createTreatmentCard(treatment) {
    return `
        <div class="treatment-card" data-category="${treatment.category}" data-aos="fade-up" onclick="handleTreatmentClick(${JSON.stringify(treatment)})">
            <div class="treatment-content">
                <h3>${treatment.title}</h3>
                <p>${treatment.description}</p>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=555186106030&text=${encodeURIComponent(`Olá! Gostaria de informações sobre ${treatment.title}`)}"
               class="cta-button"
               target="_blank"
               rel="noopener noreferrer">
                Agendar Avaliação
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </a>
        </div>
    `;
}

function createCategorySection(category, title) {
    const filteredTreatments = category === 'todos' 
        ? treatments 
        : treatments.filter(t => t.category === category);

    return `
        <div class="category-section" id="${category}">
            <h2>${title}</h2>
            <div class="treatments-grid">
                ${filteredTreatments.map(createTreatmentCard).join('')}
            </div>
        </div>
    `;
}

// Função principal de filtro (atualizada)
function filterTreatments(category) {
    const categoriesContainer = document.querySelector('.treatment-categories');
    
    if (category === 'todos') {
        const categories = [
            { id: 'peelings', title: 'Peelings' },
            { id: 'microagulhamento', title: 'Microagulhamento' },
            { id: 'outros', title: 'Outros Serviços' }
        ];
        
        categoriesContainer.innerHTML = categories
            .map(cat => createCategorySection(cat.id, cat.title))
            .join('');
    } else {
        const categoryTitle = {
            'peelings': 'Peelings',
            'microagulhamento': 'Microagulhamento',
            'outros': 'Outros Serviços'
        }[category];
        
        categoriesContainer.innerHTML = createCategorySection(category, categoryTitle);
    }

    // Atualizar estado ativo dos botões
    document.querySelectorAll('.nav-button, .filter-button').forEach(button => {
        const buttonCategory = button.dataset.category || button.dataset.filter;
        button.classList.toggle('active', buttonCategory === category);
    });
}

// Função updateURL corrigida
function updateURL(category) {
    try {
        const url = category === 'todos' ? 'treatments.html' : `treatments.html?category=${category}`;
        history.pushState({}, '', url);
    } catch (e) {
        console.warn('URL update not supported in local environment');
    }
}

// Inicialização corrigida
document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.querySelector('.treatment-categories');
    if (!categoriesContainer) return; // Evita erros em outras páginas

    // Setup dos botões
    document.querySelectorAll('.nav-button, .filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.dataset.category || button.dataset.filter;
            if (!category) return;
            
            filterTreatments(category);
        });
    });

    // Inicialização baseada na URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'todos';
    filterTreatments(initialCategory);
});

// Atualizar inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Setup do menu mobile       
    const menuToggle = document.querySelector('.menu-toggle');       
    const navMobile = document.getElementById('nav-mobile');
    const body = document.body;    
    
    function toggleMenu() {
        navMobile.classList.toggle('show');
        menuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    menuToggle?.addEventListener('click', toggleMenu);

    // Setup dos botões
    document.querySelectorAll('.nav-button, .filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.dataset.category || button.dataset.filter;                        // Atualizar URL sem recarregar            
            updateURL(category);                        // Filtrar conteúdo            
            filterTreatments(category);                        // Fechar menu se necessário            
            if (navMobile.classList.contains('show')) {                
                toggleMenu();            
            }        
        });    
    });    
    // Inicialização baseada na URL    
    const urlParams = new URLSearchParams(window.location.search);    
    const initialCategory = urlParams.get('category') || 'todos';    
    filterTreatments(initialCategory);    
    // Restaurar funcionalidade de filtro nos botões do menu mobile    
    document.querySelectorAll('.nav-mobile .nav-button').forEach(button => {        
        if (!button.classList.contains('cta')) {            
            button.addEventListener('click', (e) => {                
                e.preventDefault();                
                const category = button.dataset.category;                
                filterTreatments(category);                                
                // Fechar menu mobile                
                const navMobile = document.getElementById('nav-mobile');                
                const menuToggle = document.querySelector('.menu-toggle');                
                navMobile.classList.remove('show');                
                menuToggle.classList.remove('active');                
                document.body.classList.remove('menu-open');            
            });        
        }
    });

    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true
    });
});
