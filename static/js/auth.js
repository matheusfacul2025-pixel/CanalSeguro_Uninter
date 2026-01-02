// Sistema de Autenticação - Front-end apenas (sem backend)

// Obter token de autenticação
function getAuthToken() {
    return localStorage.getItem('auth_token');
}

// Obter tipo de usuário
function getUserType() {
    return localStorage.getItem('user_type');
}

// Obter nome de usuário
function getUsername() {
    return localStorage.getItem('username');
}

// Fazer logout
function logout() {
    // Limpar dados locais
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('username');
    
    // Redirecionar para login
    window.location.href = 'login.html';
}

// Verificar se está autenticado
function verificarAutenticacao() {
    const token = getAuthToken();
    const userType = getUserType();
    
    if (!token || !userType) {
        window.location.href = 'login.html';
        return false;
    }
    
    return true;
}

