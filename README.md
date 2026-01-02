# 🛡️ Canal Seguro

> **Não fique calado, diga não ao bullying!**

Plataforma web para denúncias anônimas de bullying em ambiente escolar, desenvolvida como projeto de extensão universitária.

---

## 📖 Sobre o Projeto

O **Canal Seguro** é uma solução tecnológica completa que visa combater o bullying nas escolas através de um sistema digital seguro e anônimo. A plataforma permite que alunos registrem denúncias de forma totalmente anônima, enquanto a equipe pedagógica pode visualizar, acompanhar e gerenciar os casos através de um painel administrativo moderno e intuitivo.

### 🎯 Objetivo Principal

Facilitar a identificação e o combate ao bullying escolar através de uma ferramenta tecnológica acessível, segura e eficiente, promovendo um ambiente escolar mais acolhedor e livre de violência.

---

## ✨ Características Principais

### 🔒 Para Alunos
- ✅ **Anonimato Total**: Sistema 100% anônimo - nenhuma informação pessoal é solicitada
- ✅ **Formulário Completo**: 11 questões detalhadas baseadas em metodologias de combate ao bullying
- ✅ **Interface Moderna**: Design responsivo com cards clicáveis e navegação intuitiva
- ✅ **Acesso Rápido**: Login simples e direto ao formulário de denúncia
- ✅ **Campos Inteligentes**: Campos condicionais que aparecem conforme as respostas

### 📊 Para Administradores
- ✅ **Dashboard Completo**: Estatísticas em tempo real com 4 métricas principais
- ✅ **Gráficos Interativos**: 3 tipos de visualizações (pizza, barras, linha temporal)
- ✅ **Gestão de Denúncias**: Lista completa com filtros avançados e busca
- ✅ **Visualização Detalhada**: Modal com todas as informações de cada denúncia
- ✅ **Controle de Status**: Sistema de atualização de status (Pendente, Em Análise, Resolvido, Arquivado)
- ✅ **Análise de Dados**: Identificação dos tipos de bullying mais frequentes

---

## 🚀 Como Usar

### Pré-requisitos

Nenhum! O sistema funciona totalmente no navegador, sem necessidade de instalação ou servidor.

### Instalação e Execução

#### Opção 1: Abrir Diretamente (Recomendado)

1. Baixe ou clone este repositório
2. Abra o arquivo `login.html` no seu navegador
3. Use as credenciais de demonstração:
   - **Aluno:** `aluno` / `aluno123`
   - **Admin:** `admin` / `admin123`

#### Opção 2: Servidor Local (Opcional)

Para melhor experiência, você pode usar um servidor local simples:

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

Depois acesse: `http://localhost:8000/login.html`

---

## 📁 Estrutura do Projeto

```
CanalSeguro/
│
├── 📄 login.html              # Página de autenticação (aluno/admin)
├── 📄 index.html              # Página inicial para alunos
├── 📄 denuncia.html           # Formulário de denúncia anônima
├── 📄 admin.html              # Painel administrativo completo
│
├── 📁 static/
│   ├── 📁 css/
│   │   ├── style.css          # Estilos principais e formulário
│   │   ├── admin.css          # Estilos do painel administrativo
│   │   ├── login.css          # Estilos da página de login
│   │   └── index.css          # Estilos da página inicial
│   │
│   └── 📁 js/
│       ├── login.js           # Lógica de autenticação
│       ├── auth.js            # Sistema de autenticação e logout
│       ├── form.js            # Lógica do formulário de denúncia
│       └── admin.js           # Lógica do painel administrativo
│
├── 📄 README.md               # Este arquivo
├── 📄 DOCUMENTACAO_PROJETO.md # Documentação técnica completa
└── 📄 TRABALHO_FINAL_FORMATADO.txt # Texto formatado para trabalho acadêmico
```

---

## 🎯 Funcionalidades Detalhadas

### Sistema de Autenticação
- Login diferenciado para alunos e administradores
- Redirecionamento automático baseado no tipo de usuário
- Validação de credenciais com feedback visual
- Sistema de logout seguro

### Formulário de Denúncia
- **11 Questões Completas:**
  1. Tipo de situação (7 opções + campo "Outro")
  2. Quando aconteceu (5 opções)
  3. Onde ocorreu (7 opções + campo "Outro")
  4. Aconteceu com (4 opções)
  5. Informações sobre a vítima (condicional)
  6. Informações sobre o agressor
  7. Descrição detalhada do incidente
  8. Frequência do ocorrido
  9. Presença de ameaças
  10. Desejo de contato (opcional)
  11. Informações adicionais (opcional)

- Campos condicionais que aparecem/desaparecem conforme as respostas
- Validação completa de campos obrigatórios
- Interface com cards clicáveis (melhor UX)
- Design responsivo para todos os dispositivos

### Painel Administrativo

#### Dashboard
- **Total de Denúncias**: Contador geral de todas as denúncias
- **Denúncias Hoje**: Contador de denúncias do dia atual
- **Esta Semana**: Contador de denúncias da semana
- **Tipo Mais Frequente**: Identificação automática do tipo de bullying mais comum

#### Gráficos Interativos
1. **Gráfico de Pizza (Doughnut)**: Distribuição por tipos de bullying
2. **Gráfico de Barras**: Status das denúncias (Pendente, Em Análise, Resolvido, Arquivado)
3. **Gráfico de Linha**: Evolução temporal dos últimos 30 dias

#### Lista de Denúncias
- Cards informativos com resumo de cada caso
- Badges coloridos de status
- Data e hora do relato formatadas
- Informações principais visíveis (tipo, local, quando)

#### Sistema de Filtros
- **Filtro por Tipo**: Filtrar por tipo específico de bullying
- **Filtro por Data**: Hoje, Esta semana, Este mês
- **Busca**: Busca por palavra-chave na descrição
- **Contador**: Exibe quantidade de resultados filtrados

#### Visualização Detalhada
- Modal completo com todas as 11 respostas
- Informações sobre vítima e agressor (quando disponível)
- Descrição completa do incidente
- Informações adicionais fornecidas
- Sistema de atualização de status integrado

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com gradientes, animações e design responsivo
- **JavaScript (ES6+)**: Lógica de negócio, manipulação de DOM e interatividade

### Frameworks e Bibliotecas
- **Bootstrap 5.3.2**: Framework CSS para layout responsivo e componentes
- **Bootstrap Icons**: Biblioteca de ícones moderna e consistente
- **Chart.js 4.4.0**: Biblioteca para criação de gráficos interativos
- **Google Fonts (Poppins)**: Tipografia moderna e legível

### Armazenamento
- **localStorage**: Armazenamento local no navegador para persistência de dados
- **JSON**: Formato de dados estruturado para denúncias

### Design
- Design System baseado em cores amarelo/preto (tema de alerta e segurança)
- Interface responsiva (mobile-first)
- Animações suaves e transições
- Feedback visual em todas as interações
- Acessibilidade: contraste adequado, navegação por teclado

---

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| **Amarelo (Primary)** | `#ffc107` | Cor principal, alertas, destaques |
| **Laranja (Warning)** | `#ff9800` | Avisos, ações importantes |
| **Preto (Dark)** | `#212529` | Textos, fundos escuros |
| **Branco** | `#ffffff` | Fundos, textos sobre cores escuras |
| **Cinza** | `#6c757d` | Textos secundários, bordas |

---

## 📊 Dados de Demonstração

O sistema inclui **13 denúncias fictícias** de janeiro de 2026 para demonstração, cobrindo:

- ✅ Todos os tipos de bullying (Físico, Verbal, Cyberbullying, Exclusão Social, Discriminação, Violência Psicológica)
- ✅ Diferentes status (Pendente, Em Análise, Resolvido, Arquivado)
- ✅ Variações de cenários (comigo, com outra pessoa, grupo)
- ✅ Informações completas e realistas
- ✅ Datas distribuídas ao longo do mês

Os dados são inicializados automaticamente na primeira execução.

---

## 📊 Objetivos de Desenvolvimento Sustentável (ODS)

Este projeto contribui para os seguintes ODS da ONU:

- **ODS 4 - Educação de qualidade**: Promove ambiente escolar seguro e acolhedor
- **ODS 10 - Redução das desigualdades**: Combate discriminação e exclusão
- **ODS 16 - Paz, justiça e instituições eficazes**: Fortalece mecanismos de denúncia e proteção

---

## 🎓 Informações Acadêmicas

**Projeto:** Atividade Extensionista I - Tecnologia Aplicada à Inclusão Digital  
**Curso:** CST em Redes de Computadores  
**Instituição:** UNINTER  

**Desenvolvido por:**  
👤 **Matheus Ribeiro Andrade**  
📧 RU: 4786615  
📅 Ano: 2026

---

## 📚 Documentação Adicional

- **[DOCUMENTACAO_PROJETO.md](./DOCUMENTACAO_PROJETO.md)**: Documentação técnica completa do projeto
- **[TRABALHO_FINAL_FORMATADO.txt](./TRABALHO_FINAL_FORMATADO.txt)**: Texto formatado para trabalho acadêmico

---

## 🔐 Credenciais de Acesso

### Modo Demonstração

**Aluno:**
- Usuário: `aluno`
- Senha: `aluno123`

**Administrador:**
- Usuário: `admin`
- Senha: `admin123`

> ⚠️ **Nota**: Estas credenciais são apenas para demonstração. Em produção, implemente um sistema de autenticação seguro.

---

## 🚧 Próximas Melhorias Sugeridas

- [ ] Integração com banco de dados para produção
- [ ] Sistema de notificações para a equipe pedagógica
- [ ] Relatórios em PDF para impressão
- [ ] Dashboard com mais métricas e análises
- [ ] Sistema de acompanhamento de casos resolvidos
- [ ] Integração com sistemas escolares existentes
- [ ] Sistema de backup automático
- [ ] Modo escuro/claro
- [ ] Multi-idioma

---

## 📄 Licença

Este projeto foi desenvolvido como trabalho acadêmico de extensão universitária. Todos os direitos reservados ao autor.

---

## 🤝 Contribuições

Este é um projeto acadêmico, mas sugestões e melhorias são bem-vindas!

---

## 📞 Contato

Para dúvidas ou informações sobre o projeto:

**Matheus Ribeiro Andrade**  
RU: 4786615  
Curso: CST em Redes de Computadores  
Disciplina: Atividade Extensionista I

---

<div align="center">

### 🛡️ Canal Seguro: Não fique calado, diga não ao bullying! 🛡️

*Promovendo ambientes escolares mais seguros e acolhedores através da tecnologia*

</div>
