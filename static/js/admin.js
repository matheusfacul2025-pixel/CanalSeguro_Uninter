// Sistema totalmente front-end - sem backend
// Todos os dados são armazenados em localStorage ou dados fictícios

// Verificar autenticação básica
const token = localStorage.getItem('auth_token');
if (!token) {
    window.location.href = 'login.html';
}

// Dados fictícios expandidos para demonstração completa
// 13 denúncias detalhadas e realistas - Datas de 2026
function gerarDadosFicticios() {
    // Definir data base como 2026
    const hoje = new Date('2026-01-15');
    const denuncias = [
        {
            id: 1,
            tipo_situacao: "Cyberbullying",
            quando: "Nesta semana",
            onde: "Online / Redes sociais",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Sim",
            descricao_agressor: "Grupo de alunos do 3º ano que criaram um perfil falso no Instagram",
            descricao: "Estou sendo vítima de cyberbullying através de mensagens ofensivas em grupos do WhatsApp e um perfil falso no Instagram que está postando fotos minhas com comentários humilhantes. Recebo constantemente mensagens com apelidos pejorativos e ameaças. Isso está me afetando muito psicologicamente e não consigo mais usar as redes sociais sem medo.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Sim",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Tenho prints das conversas e do perfil falso se necessário para investigação.",
            data_envio: new Date('2026-01-13T10:30:00').toISOString(),
            status: "Em Análise"
        },
        {
            id: 2,
            tipo_situacao: "Bullying físico",
            quando: "Hoje",
            onde: "Pátio",
            aconteceu_com: "Com outra pessoa",
            sabe_vitima: "Sim",
            descricao_vitima: "Aluno do 2º ano, não quero revelar o nome por segurança",
            sabe_agressor: "Sim",
            descricao_agressor: "Grupo de alunos do 3º ano, sempre no intervalo, aproximadamente 4 a 5 alunos",
            descricao: "Presenciei um grupo de alunos empurrando e tirando o material escolar de um colega no pátio durante o intervalo. O aluno estava visivelmente assustado e não conseguia se defender. Eles também estavam tirando o lanche dele e jogando no chão. A situação durou cerca de 10 minutos até que um professor apareceu.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Sim",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Isso acontece quase todos os dias no mesmo horário.",
            data_envio: new Date('2026-01-15T14:20:00').toISOString(),
            status: "Pendente"
        },
        {
            id: 3,
            tipo_situacao: "Bullying verbal",
            quando: "Neste mês",
            onde: "Sala de aula",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Sim",
            descricao_agressor: "Alguns colegas da minha turma, principalmente durante as aulas quando o professor não está olhando",
            descricao: "Sou constantemente alvo de piadas e apelidos ofensivos relacionados à minha aparência física. Os comentários são feitos em voz baixa durante as aulas e em voz alta nos corredores. Os professores já foram avisados mas a situação continua. Eles me chamam de nomes relacionados ao meu peso e altura.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Não",
            quer_contato: "Sim",
            forma_contato: "Prefiro conversar pessoalmente com a coordenação pedagógica",
            informacoes_adicionais: "Isso está afetando meu rendimento escolar e minha autoestima. Não quero mais ir à escola.",
            data_envio: new Date('2026-01-10T09:15:00').toISOString(),
            status: "Resolvido"
        },
        {
            id: 4,
            tipo_situacao: "Exclusão social",
            quando: "Acontece com frequência",
            onde: "Sala de aula",
            aconteceu_com: "Com outra pessoa",
            sabe_vitima: "Sim",
            descricao_vitima: "Uma colega nova da turma que se mudou para cá no início do semestre",
            sabe_agressor: "Não",
            descricao_agressor: null,
            descricao: "Uma colega nova está sendo sistematicamente excluída de trabalhos em grupo e atividades. Ninguém quer fazer parceria com ela e ela fica sempre sozinha. Nas aulas de educação física, ninguém escolhe ela para os times. Ela sempre fica sozinha no recreio também. Parece que toda a turma combinou de ignorá-la.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Um pouco / Não sei",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Ela parece muito triste e isolada. Acho que precisa de ajuda.",
            data_envio: new Date('2026-01-05T11:45:00').toISOString(),
            status: "Em Análise"
        },
        {
            id: 5,
            tipo_situacao: "Discriminação",
            quando: "Nesta semana",
            onde: "Corredor",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Sim",
            descricao_agressor: "Alunos de outra turma que ficam no corredor entre as aulas",
            descricao: "Sofro discriminação por causa da minha orientação sexual. Recebo comentários ofensivos e olhares de desprezo no corredor da escola. Alguns alunos fazem gestos ofensivos quando passo por eles. Já ouvi comentários como 'viado' e outros termos pejorativos sendo usados em relação a mim.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Sim",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Preciso de ajuda urgente, não aguento mais essa situação. Estou com muito medo.",
            data_envio: new Date('2026-01-14T16:30:00').toISOString(),
            status: "Pendente"
        },
        {
            id: 6,
            tipo_situacao: "Violência psicológica",
            quando: "Neste mês",
            onde: "Online / Redes sociais",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Não",
            descricao_agressor: null,
            descricao: "Recebo constantemente mensagens anônimas com ameaças e chantagens emocionais. Alguém está criando perfis falsos para me intimidar. As mensagens dizem coisas como 'você não merece viver' e 'todo mundo te odeia'. Também recebo fotos minhas editadas de forma ofensiva. Não sei quem está fazendo isso.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Sim",
            quer_contato: "Sim",
            forma_contato: "Email: vitima.anonima@escola.com",
            informacoes_adicionais: "Tenho medo de ir à escola. Não consigo mais dormir direito.",
            data_envio: new Date('2026-01-08T13:20:00').toISOString(),
            status: "Em Análise"
        },
        {
            id: 7,
            tipo_situacao: "Bullying físico",
            quando: "Hoje",
            onde: "Banheiro",
            aconteceu_com: "Com outra pessoa",
            sabe_vitima: "Sim",
            descricao_vitima: "Um aluno menor, do 1º ano",
            sabe_agressor: "Sim",
            descricao_agressor: "Dois alunos maiores, provavelmente do 3º ano",
            descricao: "Vi dois alunos maiores cercando um aluno menor no banheiro. Eles estavam empurrando ele contra a parede e ameaçando. O aluno menor estava chorando e pedindo para pararem. Quando me viram, eles saíram correndo. O aluno menor saiu logo depois, muito assustado.",
            ja_aconteceu: "Não tenho certeza",
            houve_ameaca: "Sim",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Foi no banheiro do segundo andar, próximo ao intervalo das 10h.",
            data_envio: new Date('2026-01-15T10:00:00').toISOString(),
            status: "Pendente"
        },
        {
            id: 8,
            tipo_situacao: "Cyberbullying",
            quando: "Nesta semana",
            onde: "Online / Redes sociais",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Prefiro não responder",
            descricao_agressor: null,
            descricao: "Alguém está compartilhando fotos minhas sem minha permissão em grupos do WhatsApp da escola com comentários maldosos. As fotos são de momentos privados que eu não queria que fossem compartilhadas. Os comentários são muito ofensivos e humilhantes.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Um pouco / Não sei",
            quer_contato: "Sim",
            forma_contato: "Telefone: (11) 98765-4321",
            informacoes_adicionais: "Tenho prints de tudo. Preciso que isso pare imediatamente.",
            data_envio: new Date('2026-01-12T15:10:00').toISOString(),
            status: "Em Análise"
        },
        {
            id: 9,
            tipo_situacao: "Bullying verbal",
            quando: "Acontece com frequência",
            onde: "Pátio",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Sim",
            descricao_agressor: "Grupo de meninas da minha turma",
            descricao: "Um grupo de meninas da minha turma sempre faz comentários maldosos sobre mim no pátio. Elas falam alto para que eu ouça, comentando sobre minha roupa, meu cabelo, minha forma de falar. Elas riem de mim e me chamam de nomes. Isso acontece quase todos os dias no recreio.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Não",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Já tentei ignorar, mas não consigo mais. Está me deixando muito triste.",
            data_envio: new Date('2026-01-03T08:30:00').toISOString(),
            status: "Resolvido"
        },
        {
            id: 10,
            tipo_situacao: "Exclusão social",
            quando: "Neste mês",
            onde: "Sala de aula",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Não",
            descricao_agressor: null,
            descricao: "Estou sendo excluído de todas as atividades em grupo. Quando o professor pede para formarmos grupos, ninguém quer fazer comigo. Eu sempre fico sozinho ou o professor tem que me colocar em algum grupo. Nas atividades de educação física, sempre sou o último a ser escolhido. Parece que ninguém quer minha companhia.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Não",
            quer_contato: "Sim",
            forma_contato: "Prefiro conversar com o psicólogo da escola",
            informacoes_adicionais: "Isso começou depois que me mudei de escola. Não sei o que fiz de errado.",
            data_envio: new Date('2025-12-31T12:00:00').toISOString(),
            status: "Em Análise"
        },
        {
            id: 11,
            tipo_situacao: "Discriminação",
            quando: "Nesta semana",
            onde: "Entrada/saída da escola",
            aconteceu_com: "Com outra pessoa",
            sabe_vitima: "Sim",
            descricao_vitima: "Uma colega que usa cadeira de rodas",
            sabe_agressor: "Sim",
            descricao_agressor: "Alguns alunos que ficam na entrada da escola",
            descricao: "Vi alguns alunos fazendo comentários discriminatórios sobre uma colega que usa cadeira de rodas na entrada da escola. Eles estavam rindo dela e fazendo gestos ofensivos. Ela parecia muito constrangida e tentou ignorar, mas estava claramente incomodada. Isso aconteceu na frente de vários outros alunos.",
            ja_aconteceu: "Não tenho certeza",
            houve_ameaca: "Não",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Acho que isso não deveria acontecer. Todos merecem respeito.",
            data_envio: new Date('2026-01-11T14:45:00').toISOString(),
            status: "Pendente"
        },
        {
            id: 12,
            tipo_situacao: "Violência psicológica",
            quando: "Acontece com frequência",
            onde: "Corredor",
            aconteceu_com: "Comigo",
            sabe_vitima: null,
            descricao_vitima: null,
            sabe_agressor: "Sim",
            descricao_agressor: "Um grupo de alunos que sempre fica no corredor do segundo andar",
            descricao: "Um grupo de alunos sempre me segue no corredor fazendo comentários ameaçadores e intimidadores. Eles falam coisas como 'você vai ver' e 'cuidado'. Não fazem nada físico, mas a ameaça constante está me deixando muito ansioso. Eu mudo de rota para evitar eles, mas sempre encontro eles em algum lugar.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Sim",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Tenho medo de que isso possa escalar para violência física.",
            data_envio: new Date('2026-01-07T09:00:00').toISOString(),
            status: "Em Análise"
        },
        {
            id: 13,
            tipo_situacao: "Bullying verbal",
            quando: "Hoje",
            onde: "Sala de aula",
            aconteceu_com: "Com outra pessoa",
            sabe_vitima: "Sim",
            descricao_vitima: "Um aluno novo que chegou na turma há duas semanas",
            sabe_agressor: "Sim",
            descricao_agressor: "Alguns alunos da turma que fazem piadas constantemente",
            descricao: "Alguns alunos da turma estão fazendo piadas constantes sobre o sotaque e a forma de falar de um aluno novo. Eles imitam o jeito dele falar de forma exagerada e rindo. O aluno novo fica muito constrangido e não consegue mais participar das aulas. Ele já tentou pedir para pararem, mas eles continuam.",
            ja_aconteceu: "Sim",
            houve_ameaca: "Não",
            quer_contato: "Não",
            forma_contato: null,
            informacoes_adicionais: "Isso está acontecendo durante as aulas e o professor não está intervindo adequadamente.",
            data_envio: new Date('2026-01-15T11:30:00').toISOString(),
            status: "Pendente"
        }
    ];
    
    return denuncias.sort((a, b) => new Date(b.data_envio) - new Date(a.data_envio));
}

// Inicializar dados fictícios se não existirem no localStorage
function inicializarDadosFicticios() {
    const dadosLocal = localStorage.getItem('denuncias');
    // Se não houver dados ou houver menos de 13, inicializar com os 13 registros
    if (!dadosLocal || JSON.parse(dadosLocal).length < 13) {
        const dados = gerarDadosFicticios();
        localStorage.setItem('denuncias', JSON.stringify(dados));
        return dados;
    }
    return JSON.parse(dadosLocal);
}

const dadosFicticios = {
    denuncias: inicializarDadosFicticios()
};

// Carregar estatísticas
async function carregarEstatisticas() {
    try {
        // Primeiro, tentar ler do localStorage
        const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
        let denuncias = [];
        
        if (denunciasLocal.length > 0) {
            denuncias = denunciasLocal;
        } else {
            // Usar dados fictícios se não houver no localStorage
            denuncias = dadosFicticios.denuncias;
        }
        
        // Calcular estatísticas a partir dos dados
        const hoje = new Date().toISOString().split('T')[0];
        const denunciasHoje = denuncias.filter(d => {
            const dataDenuncia = new Date(d.data_envio).toISOString().split('T')[0];
            return dataDenuncia === hoje;
        }).length;
        
        const inicioSemana = new Date();
        inicioSemana.setDate(inicioSemana.getDate() - inicioSemana.getDay());
        const denunciasSemana = denuncias.filter(d => {
            const dataDenuncia = new Date(d.data_envio);
            return dataDenuncia >= inicioSemana;
        }).length;
        
        // Tipo mais frequente
        const tiposCount = {};
        denuncias.forEach(d => {
            tiposCount[d.tipo_situacao] = (tiposCount[d.tipo_situacao] || 0) + 1;
        });
        const tipoMaisFrequente = Object.keys(tiposCount).length > 0 
            ? Object.keys(tiposCount).reduce((a, b) => tiposCount[a] > tiposCount[b] ? a : b)
            : '-';
        
        const totalEl = document.getElementById('totalDenuncias');
        if (totalEl) totalEl.textContent = denuncias.length;
        
        const denunciasHojeEl = document.getElementById('denunciasHoje');
        if (denunciasHojeEl) denunciasHojeEl.textContent = denunciasHoje;
        
        const denunciasSemanaEl = document.getElementById('denunciasSemana');
        if (denunciasSemanaEl) denunciasSemanaEl.textContent = denunciasSemana;
        
        const tiposMaisFrequentesEl = document.getElementById('tiposMaisFrequentes');
        if (tiposMaisFrequentesEl) tiposMaisFrequentesEl.textContent = tipoMaisFrequente;
        
        // Atualizar gráficos
        criarGraficos(denuncias);
    } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
    }
}

// Variáveis globais para os gráficos
let chartTipos = null;
let chartStatus = null;
let chartTimeline = null;

// Criar gráficos
function criarGraficos(denuncias) {
    // Gráfico de Tipos de Bullying
    const tiposCount = {};
    denuncias.forEach(d => {
        const tipo = d.tipo_situacao || 'Não especificado';
        tiposCount[tipo] = (tiposCount[tipo] || 0) + 1;
    });
    
    const ctxTipos = document.getElementById('chartTipos');
    if (ctxTipos) {
        if (chartTipos) chartTipos.destroy();
        chartTipos = new Chart(ctxTipos, {
            type: 'doughnut',
            data: {
                labels: Object.keys(tiposCount),
                datasets: [{
                    label: 'Quantidade',
                    data: Object.values(tiposCount),
                    backgroundColor: [
                        '#ffc107',
                        '#ff9800',
                        '#f44336',
                        '#e91e63',
                        '#9c27b0',
                        '#673ab7',
                        '#3f51b5',
                        '#2196f3'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${context.parsed} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Gráfico de Status
    const statusCount = {};
    denuncias.forEach(d => {
        const status = d.status || 'Pendente';
        statusCount[status] = (statusCount[status] || 0) + 1;
    });
    
    const ctxStatus = document.getElementById('chartStatus');
    if (ctxStatus) {
        if (chartStatus) chartStatus.destroy();
        chartStatus = new Chart(ctxStatus, {
            type: 'bar',
            data: {
                labels: Object.keys(statusCount),
                datasets: [{
                    label: 'Quantidade',
                    data: Object.values(statusCount),
                    backgroundColor: [
                        '#ffc107',
                        '#17a2b8',
                        '#28a745',
                        '#6c757d'
                    ],
                    borderWidth: 1,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed.y} denúncia(s)`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
    
    // Gráfico de Timeline (últimos 30 dias)
    const ultimos30Dias = [];
    const hoje = new Date();
    for (let i = 29; i >= 0; i--) {
        const data = new Date(hoje);
        data.setDate(data.getDate() - i);
        ultimos30Dias.push(data.toISOString().split('T')[0]);
    }
    
    const timelineData = ultimos30Dias.map(data => {
        return denuncias.filter(d => {
            const dataDenuncia = new Date(d.data_envio).toISOString().split('T')[0];
            return dataDenuncia === data;
        }).length;
    });
    
    const ctxTimeline = document.getElementById('chartTimeline');
    if (ctxTimeline) {
        if (chartTimeline) chartTimeline.destroy();
        chartTimeline = new Chart(ctxTimeline, {
            type: 'line',
            data: {
                labels: ultimos30Dias.map(d => {
                    const date = new Date(d);
                    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                }),
                datasets: [{
                    label: 'Denúncias por Dia',
                    data: timelineData,
                    borderColor: '#ffc107',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#ffc107',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const index = context[0].dataIndex;
                                const date = new Date(ultimos30Dias[index]);
                                return date.toLocaleDateString('pt-BR', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                });
                            },
                            label: function(context) {
                                return `Denúncias: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }
}

// Carregar denúncias
async function carregarDenuncias() {
    const tipoFilter = document.getElementById('filtroTipo');
    const dataFilter = document.getElementById('filtroData');
    const buscaInput = document.getElementById('buscaInput');
    
    let denuncias = [];
    
    try {
        // Primeiro, tentar ler do localStorage
        const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
        
        if (denunciasLocal.length > 0) {
            // Usar dados do localStorage (ordenar por data, mais recentes primeiro)
            denuncias = denunciasLocal.sort((a, b) => {
                return new Date(b.data_envio) - new Date(a.data_envio);
            });
        } else {
            // Se não houver dados no localStorage, usar dados fictícios
            denuncias = [...dadosFicticios.denuncias].sort((a, b) => {
                return new Date(b.data_envio) - new Date(a.data_envio);
            });
        }
        
        // Aplicar filtros
        if (tipoFilter && tipoFilter.value) {
            denuncias = denuncias.filter(d => d.tipo_situacao === tipoFilter.value);
        }
        
        if (dataFilter && dataFilter.value) {
            const hoje = new Date();
            const inicioSemana = new Date(hoje);
            inicioSemana.setDate(hoje.getDate() - hoje.getDay());
            const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
            
            denuncias = denuncias.filter(d => {
                const dataDenuncia = new Date(d.data_envio);
                if (dataFilter.value === 'hoje') {
                    return dataDenuncia.toDateString() === hoje.toDateString();
                } else if (dataFilter.value === 'semana') {
                    return dataDenuncia >= inicioSemana;
                } else if (dataFilter.value === 'mes') {
                    return dataDenuncia >= inicioMes;
                }
                return true;
            });
        }
        
        if (buscaInput && buscaInput.value) {
            const busca = buscaInput.value.toLowerCase();
            denuncias = denuncias.filter(d => 
                d.descricao.toLowerCase().includes(busca) ||
                d.tipo_situacao.toLowerCase().includes(busca) ||
                (d.descricao_agressor && d.descricao_agressor.toLowerCase().includes(busca))
            );
        }
        
        // Atualizar contador
        const totalExibido = document.getElementById('totalExibido');
        if (totalExibido) {
            totalExibido.textContent = `${denuncias.length} denúncia${denuncias.length !== 1 ? 's' : ''}`;
        }
        
        // Calcular denúncias de hoje
        const hoje = new Date().toISOString().split('T')[0];
        const denunciasHoje = denuncias.filter(d => {
            const dataDenuncia = new Date(d.data_envio).toISOString().split('T')[0];
            return dataDenuncia === hoje;
        }).length;
        const denunciasHojeEl = document.getElementById('denunciasHoje');
        if (denunciasHojeEl) denunciasHojeEl.textContent = denunciasHoje;
        
        // Calcular denúncias desta semana
        const inicioSemana = new Date();
        inicioSemana.setDate(inicioSemana.getDate() - inicioSemana.getDay());
        const denunciasSemana = denuncias.filter(d => {
            const dataDenuncia = new Date(d.data_envio);
            return dataDenuncia >= inicioSemana;
        }).length;
        const denunciasSemanaEl = document.getElementById('denunciasSemana');
        if (denunciasSemanaEl) denunciasSemanaEl.textContent = denunciasSemana;
        
        const listContainer = document.getElementById('denunciasContainer');
        
        if (denuncias.length === 0) {
            listContainer.innerHTML = '<div class="text-center py-5"><p class="text-muted">Nenhuma denúncia encontrada.</p></div>';
            return;
        }
        
        listContainer.innerHTML = denuncias.map(denuncia => criarCardDenuncia(denuncia)).join('');
        
        // Adicionar event listeners para modais (se existirem)
        denuncias.forEach(denuncia => {
            const btnView = document.getElementById(`btn-view-${denuncia.id}`);
            if (btnView) {
                btnView.addEventListener('click', (e) => {
                    e.stopPropagation();
                    abrirModal(denuncia);
                });
            }
            
            const btnUpdate = document.getElementById(`btn-update-${denuncia.id}`);
            if (btnUpdate) {
                btnUpdate.addEventListener('click', (e) => {
                    e.stopPropagation();
                    atualizarStatus(denuncia.id);
                });
            }
        });
    } catch (error) {
        console.error('Erro ao carregar denúncias:', error);
        const listContainer = document.getElementById('denunciasContainer');
        if (listContainer) {
            listContainer.innerHTML = 
                '<div class="text-center py-5"><p class="text-danger">Erro ao carregar denúncias. Verifique se o servidor está rodando.</p></div>';
        }
    }
}

// Criar card de denúncia
function criarCardDenuncia(denuncia) {
    const dataFormatada = new Date(denuncia.data_envio).toLocaleString('pt-BR');
    const statusBadgeClass = denuncia.status === 'Pendente' ? 'bg-warning' : 
                            denuncia.status === 'Em Análise' ? 'bg-info' :
                            denuncia.status === 'Resolvido' ? 'bg-success' : 'bg-secondary';
    const descricaoResumida = denuncia.descricao.length > 150 
        ? denuncia.descricao.substring(0, 150) + '...' 
        : denuncia.descricao;
    
    return `
        <div class="card denuncia-card mb-4 shadow-sm" id="denuncia-${denuncia.id}">
            <div class="card-header d-flex justify-content-between align-items-center bg-white border-bottom">
                <div class="d-flex align-items-center">
                    <i class="bi bi-exclamation-triangle-fill text-warning me-2 fs-5"></i>
                    <h5 class="mb-0 fw-bold">Denúncia #${denuncia.id}</h5>
                </div>
                <span class="badge ${statusBadgeClass} px-3 py-2">${denuncia.status}</span>
            </div>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <small class="text-muted">Tipo:</small>
                        <p class="mb-2"><strong>${denuncia.tipo_situacao}</strong></p>
                    </div>
                    <div class="col-md-6">
                        <small class="text-muted">Quando:</small>
                        <p class="mb-2"><strong>${denuncia.quando}</strong></p>
                    </div>
                    <div class="col-md-6">
                        <small class="text-muted">Onde:</small>
                        <p class="mb-2"><strong>${denuncia.onde}</strong></p>
                    </div>
                    <div class="col-md-6">
                        <small class="text-muted">Data do Relato:</small>
                        <p class="mb-2"><strong>${dataFormatada}</strong></p>
                    </div>
                </div>
                <div class="mb-3">
                    <small class="text-muted">Descrição:</small>
                    <p class="mb-0">${descricaoResumida}</p>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-primary" id="btn-view-${denuncia.id}">
                        <i class="bi bi-eye"></i> Ver Detalhes
                    </button>
                    <button class="btn btn-sm btn-warning" id="btn-update-${denuncia.id}">
                        <i class="bi bi-pencil"></i> Atualizar Status
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Abrir modal com detalhes
function abrirModal(denuncia) {
    const modal = new bootstrap.Modal(document.getElementById('modalDenuncia'));
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modalDenunciaLabel');
    
    const dataFormatada = new Date(denuncia.data_envio).toLocaleString('pt-BR');
    const statusBadgeClass = denuncia.status === 'Pendente' ? 'bg-warning' : 
                            denuncia.status === 'Em Análise' ? 'bg-info' :
                            denuncia.status === 'Resolvido' ? 'bg-success' : 'bg-secondary';
    
    if (modalTitle) {
        modalTitle.textContent = `Denúncia #${denuncia.id}`;
    }
    
    modalBody.innerHTML = `
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="mb-0 fw-bold">Detalhes da Denúncia #${denuncia.id}</h4>
                <span class="badge ${statusBadgeClass} px-3 py-2">${denuncia.status}</span>
            </div>
            <h5 class="border-bottom pb-2 mb-3 fw-semibold">
                <i class="bi bi-info-circle me-2 text-warning"></i>Informações Básicas
            </h5>
            <table class="info-table mb-4">
                <tr>
                    <td><i class="bi bi-calendar3 me-2 text-muted"></i>Data do Relato:</td>
                    <td><strong>${dataFormatada}</strong></td>
                </tr>
                <tr>
                    <td><i class="bi bi-tag me-2 text-muted"></i>Tipo de Situação:</td>
                    <td><strong>${denuncia.tipo_situacao}</strong></td>
                </tr>
                <tr>
                    <td><i class="bi bi-clock me-2 text-muted"></i>Quando aconteceu:</td>
                    <td>${denuncia.quando}</td>
                </tr>
                <tr>
                    <td><i class="bi bi-geo-alt me-2 text-muted"></i>Onde aconteceu:</td>
                    <td>${denuncia.onde}</td>
                </tr>
                <tr>
                    <td><i class="bi bi-person me-2 text-muted"></i>Aconteceu com:</td>
                    <td>${denuncia.aconteceu_com || 'Não informado'}</td>
                </tr>
            </table>
        </div>
        
        ${(denuncia.aconteceu_com === 'Com outra pessoa' || denuncia.sabe_vitima) ? `
        <div class="mb-4">
            <h5 class="border-bottom pb-2 mb-3 fw-semibold">
                <i class="bi bi-person-heart me-2 text-warning"></i>Informações sobre a Vítima
            </h5>
            <table class="info-table">
                <tr>
                    <td>Sabe quem é a vítima:</td>
                    <td>${denuncia.sabe_vitima || 'Não informado'}</td>
                </tr>
                ${denuncia.descricao_vitima ? `
                <tr>
                    <td>Descrição da vítima:</td>
                    <td>${denuncia.descricao_vitima}</td>
                </tr>
                ` : ''}
            </table>
        </div>
        ` : ''}
        
        <div class="mb-4">
            <h5 class="border-bottom pb-2 mb-3 fw-semibold">
                <i class="bi bi-person-x me-2 text-warning"></i>Informações sobre o Agressor
            </h5>
            <table class="info-table">
                <tr>
                    <td>Sabe quem praticou:</td>
                    <td>${denuncia.sabe_agressor || 'Não informado'}</td>
                </tr>
                ${denuncia.descricao_agressor ? `
                <tr>
                    <td>Descrição do agressor:</td>
                    <td>${denuncia.descricao_agressor}</td>
                </tr>
                ` : ''}
            </table>
        </div>
        
        <div class="mb-4">
            <h5 class="border-bottom pb-2 mb-3 fw-semibold">
                <i class="bi bi-file-text me-2 text-warning"></i>Descrição do Incidente
            </h5>
            <div class="p-3 bg-light rounded" style="white-space: pre-wrap; line-height: 1.6;">${denuncia.descricao}</div>
        </div>
        
        <div class="mb-4">
            <h5 class="border-bottom pb-2 mb-3 fw-semibold">
                <i class="bi bi-info-circle me-2 text-warning"></i>Informações Adicionais
            </h5>
            <table class="info-table">
                <tr>
                    <td>Já aconteceu outras vezes:</td>
                    <td><strong>${denuncia.ja_aconteceu}</strong></td>
                </tr>
                <tr>
                    <td>Houve ameaça, medo ou risco:</td>
                    <td><strong>${denuncia.houve_ameaca}</strong></td>
                </tr>
                ${denuncia.quer_contato === 'Sim' ? `
                <tr>
                    <td>Forma de contato:</td>
                    <td><strong>${denuncia.forma_contato || 'Não informado'}</strong></td>
                </tr>
                ` : ''}
                ${denuncia.informacoes_adicionais ? `
                <tr>
                    <td>Informações adicionais:</td>
                    <td style="white-space: pre-wrap;">${denuncia.informacoes_adicionais}</td>
                </tr>
                ` : ''}
            </table>
        </div>
        
        <div class="border-top pt-3">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <label for="status-select" class="form-label"><strong>Atualizar Status:</strong></label>
                    <select id="status-select" class="form-select">
                        <option value="Pendente" ${denuncia.status === 'Pendente' ? 'selected' : ''}>Pendente</option>
                        <option value="Em Análise" ${denuncia.status === 'Em Análise' ? 'selected' : ''}>Em Análise</option>
                        <option value="Resolvido" ${denuncia.status === 'Resolvido' ? 'selected' : ''}>Resolvido</option>
                        <option value="Arquivado" ${denuncia.status === 'Arquivado' ? 'selected' : ''}>Arquivado</option>
                    </select>
                </div>
                <div class="col-md-6 text-end">
                    <button class="btn btn-warning" onclick="salvarStatus(${denuncia.id})">
                        <i class="bi bi-save"></i> Salvar Status
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.show();
}

// Função para salvar status (chamada do modal)
window.salvarStatus = async function(denunciaId) {
    const statusSelect = document.getElementById('status-select');
    if (!statusSelect) return;
    
    const novoStatus = statusSelect.value;
    
    try {
        // Atualizar no localStorage primeiro
        const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
        const denunciaLocal = denunciasLocal.find(d => d.id === denunciaId);
        
        if (denunciaLocal) {
            denunciaLocal.status = novoStatus;
            localStorage.setItem('denuncias', JSON.stringify(denunciasLocal));
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalDenuncia'));
            if (modal) modal.hide();
            
            alert('Status atualizado com sucesso!');
            carregarDenuncias();
            carregarEstatisticas();
            return;
        }
        
        // Se não encontrou no localStorage, tentar dados fictícios
        const denuncia = dadosFicticios.denuncias.find(d => d.id === denunciaId);
        if (denuncia) {
            denuncia.status = novoStatus;
            // Atualizar também no localStorage se existir
            const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
            const denunciaLocal = denunciasLocal.find(d => d.id === denunciaId);
            if (denunciaLocal) {
                denunciaLocal.status = novoStatus;
                localStorage.setItem('denuncias', JSON.stringify(denunciasLocal));
            }
        }
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalDenuncia'));
        if (modal) modal.hide();
        
        alert('Status atualizado com sucesso!');
        carregarDenuncias();
        carregarEstatisticas();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar status');
    }
}

// Atualizar status
async function atualizarStatus(denunciaId) {
    const novoStatus = prompt('Digite o novo status (Pendente, Em Análise, Resolvido, Arquivado):');
    if (!novoStatus) return;
    
    try {
        // Atualizar no localStorage primeiro
        const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
        const denunciaLocal = denunciasLocal.find(d => d.id === denunciaId);
        
        if (denunciaLocal) {
            denunciaLocal.status = novoStatus;
            localStorage.setItem('denuncias', JSON.stringify(denunciasLocal));
            alert('Status atualizado com sucesso!');
            carregarDenuncias();
            carregarEstatisticas();
            return;
        }
        
        // Se não encontrou no localStorage, tentar dados fictícios
        const denuncia = dadosFicticios.denuncias.find(d => d.id === denunciaId);
        if (denuncia) {
            denuncia.status = novoStatus;
            // Atualizar também no localStorage se existir
            const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
            const denunciaLocal = denunciasLocal.find(d => d.id === denunciaId);
            if (denunciaLocal) {
                denunciaLocal.status = novoStatus;
                localStorage.setItem('denuncias', JSON.stringify(denunciasLocal));
            }
        }
        
        alert('Status atualizado com sucesso!');
        carregarDenuncias();
        carregarEstatisticas();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar status');
    }
}

// Salvar status do modal
function salvarStatus(denunciaId) {
    const statusSelect = document.getElementById('status-select');
    const novoStatus = statusSelect.value;
    
    try {
        // Atualizar no localStorage
        const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
        const denunciaLocal = denunciasLocal.find(d => d.id === denunciaId);
        
        if (denunciaLocal) {
            denunciaLocal.status = novoStatus;
            localStorage.setItem('denuncias', JSON.stringify(denunciasLocal));
        }
        
        // Atualizar também nos dados fictícios
        const denuncia = dadosFicticios.denuncias.find(d => d.id === denunciaId);
        if (denuncia) {
            denuncia.status = novoStatus;
        }
        
        alert('Status atualizado com sucesso!');
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalDenuncia'));
        if (modal) modal.hide();
        carregarDenuncias();
        carregarEstatisticas();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar status');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Filtros
    const filtroTipo = document.getElementById('filtroTipo');
    const filtroData = document.getElementById('filtroData');
    const buscaInput = document.getElementById('buscaInput');
    
    if (filtroTipo) {
        filtroTipo.addEventListener('change', () => {
            carregarDenuncias();
        });
    }
    
    if (filtroData) {
        filtroData.addEventListener('change', () => {
            carregarDenuncias();
        });
    }
    
    if (buscaInput) {
        buscaInput.addEventListener('input', () => {
            carregarDenuncias();
        });
    }
    
    // Carregar dados ao iniciar
    carregarEstatisticas();
    carregarDenuncias();
    
    // Atualizar gráficos periodicamente (a cada 5 segundos)
    setInterval(() => {
        const denunciasLocal = JSON.parse(localStorage.getItem('denuncias') || '[]');
        let denuncias = denunciasLocal.length > 0 ? denunciasLocal : dadosFicticios.denuncias;
        criarGraficos(denuncias);
    }, 5000);
});

