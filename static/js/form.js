// Formulário simplificado - sem backend, usando localStorage

// Mostrar campos condicionais
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar campo "Outro" para tipo de situação
    const tipoSituacaoRadios = document.querySelectorAll('input[name="tipo_situacao"]');
    const tipoSituacaoOutro = document.getElementById('outro_tipo');
    
    if (tipoSituacaoOutro) {
        tipoSituacaoRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Outro') {
                    tipoSituacaoOutro.classList.remove('d-none');
                    tipoSituacaoOutro.required = true;
                } else {
                    tipoSituacaoOutro.classList.add('d-none');
                    tipoSituacaoOutro.required = false;
                    tipoSituacaoOutro.value = '';
                }
            });
        });
    }

    // Mostrar campo "Outro" para local
    const ondeRadios = document.querySelectorAll('input[name="onde"]');
    const ondeOutro = document.getElementById('outro_local');
    
    if (ondeOutro) {
        ondeRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Outro local') {
                    ondeOutro.classList.remove('d-none');
                    ondeOutro.required = true;
                } else {
                    ondeOutro.classList.add('d-none');
                    ondeOutro.required = false;
                    ondeOutro.value = '';
                }
            });
        });
    }

    // Mostrar campo de descrição da vítima
    const sabeVitimaRadios = document.querySelectorAll('input[name="sabe_vitima"]');
    const descricaoVitima = document.getElementById('descricao_vitima');
    
    if (descricaoVitima) {
        sabeVitimaRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Sim') {
                    descricaoVitima.classList.remove('d-none');
                    descricaoVitima.required = false;
                } else {
                    descricaoVitima.classList.add('d-none');
                    descricaoVitima.value = '';
                    descricaoVitima.required = false;
                }
            });
        });
    }

    // Mostrar campo de descrição do agressor
    const sabeAgressorRadios = document.querySelectorAll('input[name="sabe_agressor"]');
    const descricaoAgressor = document.getElementById('descricao_agressor');
    
    if (descricaoAgressor) {
        sabeAgressorRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Sim') {
                    descricaoAgressor.classList.remove('d-none');
                    descricaoAgressor.required = false;
                } else {
                    descricaoAgressor.classList.add('d-none');
                    descricaoAgressor.value = '';
                    descricaoAgressor.required = false;
                }
            });
        });
    }

    // Mostrar campo de contato
    const desejaContatoRadios = document.querySelectorAll('input[name="deseja_contato"]');
    const formaContato = document.getElementById('contato');
    
    if (formaContato) {
        desejaContatoRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Sim') {
                    formaContato.classList.remove('d-none');
                    formaContato.required = false; // Opcional
                } else {
                    formaContato.classList.add('d-none');
                    formaContato.required = false;
                    formaContato.value = '';
                }
            });
        });
    }

    // Mostrar/ocultar pergunta 5 baseado na resposta da pergunta 4
    const comQuemRadios = document.querySelectorAll('input[name="com_quem"]');
    const pergunta5Card = document.getElementById('pergunta5-card');
    
    if (pergunta5Card && comQuemRadios.length > 0) {
        comQuemRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Com outra pessoa') {
                    pergunta5Card.classList.remove('d-none');
                } else {
                    pergunta5Card.classList.add('d-none');
                    // Limpar valores da pergunta 5
                    document.querySelectorAll('input[name="sabe_vitima"]').forEach(r => r.checked = false);
                    const descVitima = document.getElementById('descricao_vitima');
                    if (descVitima) {
                        descVitima.value = '';
                        descVitima.classList.add('d-none');
                    }
                }
            });
        });
    }
});

// Envio do formulário - usando localStorage
document.getElementById('denunciaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    // Converter FormData para objeto
    for (let [key, value] of formData.entries()) {
        // Para campos de texto, ignorar apenas espaços vazios
        if (value && typeof value === 'string' && value.trim() !== '') {
            data[key] = value.trim();
        } else if (value && typeof value !== 'string') {
            // Para valores não-string (não deve acontecer, mas por segurança)
            data[key] = value;
        }
    }
    
    // Capturar campos de radio button mesmo que não estejam no FormData
    // (pode acontecer se o campo estiver oculto)
    const radioFields = {
        'tipo_situacao': document.querySelector('input[name="tipo_situacao"]:checked'),
        'quando': document.querySelector('input[name="quando"]:checked'),
        'onde': document.querySelector('input[name="onde"]:checked'),
        'com_quem': document.querySelector('input[name="com_quem"]:checked'),
        'sabe_vitima': document.querySelector('input[name="sabe_vitima"]:checked'),
        'sabe_agressor': document.querySelector('input[name="sabe_agressor"]:checked'),
        'ja_aconteceu': document.querySelector('input[name="ja_aconteceu"]:checked'),
        'houve_ameaca': document.querySelector('input[name="houve_ameaca"]:checked'),
        'deseja_contato': document.querySelector('input[name="deseja_contato"]:checked')
    };
    
    // Adicionar valores dos radio buttons selecionados
    for (const [fieldName, radioElement] of Object.entries(radioFields)) {
        if (radioElement && !data[fieldName]) {
            data[fieldName] = radioElement.value;
        }
    }
    
    // Capturar campos de texto que podem estar ocultos mas preenchidos
    const textFields = {
        'outro_tipo': document.getElementById('outro_tipo'),
        'outro_local': document.getElementById('outro_local'),
        'descricao_vitima': document.getElementById('descricao_vitima'),
        'descricao_agressor': document.getElementById('descricao_agressor'),
        'descricao': document.querySelector('textarea[name="descricao"]'),
        'contato': document.getElementById('contato'),
        'info_adicional': document.querySelector('textarea[name="info_adicional"]')
    };
    
    // Adicionar valores dos campos de texto se existirem e tiverem valor
    for (const [fieldName, fieldElement] of Object.entries(textFields)) {
        if (fieldElement && fieldElement.value && fieldElement.value.trim() !== '' && !data[fieldName]) {
            data[fieldName] = fieldElement.value.trim();
        }
    }

    // Processar campos condicionais
    if (data.tipo_situacao === 'Outro' && data.outro_tipo) {
        data.tipo_situacao = `Outro: ${data.outro_tipo}`;
    }
    delete data.outro_tipo;

    if (data.onde === 'Outro local' && data.outro_local) {
        data.onde = `Outro: ${data.outro_local}`;
    }
    delete data.outro_local;

    // Mapear nomes dos campos para o formato esperado pelo admin
    // com_quem -> aconteceu_com
    if (data.com_quem) {
        data.aconteceu_com = data.com_quem;
        delete data.com_quem;
    }

    // deseja_contato -> quer_contato
    if (data.deseja_contato !== undefined) {
        data.quer_contato = data.deseja_contato;
        delete data.deseja_contato;
    }

    // contato -> forma_contato (apenas se deseja_contato for "Sim")
    if (data.contato) {
        data.forma_contato = data.contato;
        delete data.contato;
    } else if (data.quer_contato === 'Não') {
        data.forma_contato = null;
    }

    // info_adicional -> informacoes_adicionais
    if (data.info_adicional) {
        data.informacoes_adicionais = data.info_adicional;
        delete data.info_adicional;
    } else {
        data.informacoes_adicionais = null;
    }

    // Limpar campos condicionais não preenchidos ou não aplicáveis
    if (data.aconteceu_com !== 'Com outra pessoa') {
        data.sabe_vitima = null;
        data.descricao_vitima = null;
    } else if (!data.sabe_vitima || data.sabe_vitima !== 'Sim') {
        // Se não sabe a vítima ou não respondeu, limpar descrição
        data.descricao_vitima = null;
    }
    
    // Limpar descrição do agressor se não souber ou não respondeu
    if (!data.sabe_agressor || data.sabe_agressor !== 'Sim') {
        data.descricao_agressor = null;
    }
    
    // Limpar forma de contato se não desejar contato
    if (data.quer_contato !== 'Sim') {
        data.forma_contato = null;
    }
    
    // Garantir que campos opcionais sejam null ao invés de undefined
    if (!data.sabe_vitima) data.sabe_vitima = null;
    if (!data.sabe_agressor) data.sabe_agressor = null;
    if (!data.descricao_vitima) data.descricao_vitima = null;
    if (!data.descricao_agressor) data.descricao_agressor = null;
    if (!data.forma_contato) data.forma_contato = null;
    if (!data.informacoes_adicionais) data.informacoes_adicionais = null;

    // Adicionar ID e timestamp
    const denuncias = JSON.parse(localStorage.getItem('denuncias') || '[]');
    data.id = denuncias.length > 0 ? Math.max(...denuncias.map(d => d.id || 0)) + 1 : 1;
    data.data_envio = new Date().toISOString();
    data.status = 'Pendente';

    // Salvar no localStorage
    denuncias.push(data);
    localStorage.setItem('denuncias', JSON.stringify(denuncias));

    // Mostrar mensagem de sucesso
    document.getElementById('denunciaForm').style.display = 'none';
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.remove('d-none');
        successMessage.scrollIntoView({ behavior: 'smooth' });
    }
});
