// Sistema de Login
(function() {
    'use strict';
    
    const form = document.getElementById('loginForm');
    const errorDiv = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Esconder mensagem de erro anterior
        errorDiv.classList.add('d-none');

        // Validação Bootstrap
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user_type').value;

        // Sistema de login totalmente front-end (sem backend)
        if (username === 'aluno' && password === 'aluno123' && userType === 'aluno') {
            localStorage.setItem('auth_token', 'demo_token');
            localStorage.setItem('user_type', 'aluno');
            localStorage.setItem('username', 'aluno');
            window.location.href = 'index.html';
            return;
        }
        
        if (username === 'admin' && password === 'admin123' && userType === 'admin') {
            localStorage.setItem('auth_token', 'demo_token');
            localStorage.setItem('user_type', 'admin');
            localStorage.setItem('username', 'admin');
            window.location.href = 'admin.html';
            return;
        }
        
        // Credenciais inválidas
        errorText.textContent = 'Credenciais inválidas. Use: aluno/aluno123 ou admin/admin123';
        errorDiv.classList.remove('d-none');
        form.classList.remove('was-validated');
    });
})();

// Verificar se já está logado (opcional - pode comentar para permitir múltiplos logins)
// window.addEventListener('DOMContentLoaded', function() {
//     const token = localStorage.getItem('auth_token');
//     const userType = localStorage.getItem('user_type');
//     
//     if (token && userType) {
//         // Se já está logado, redirecionar
//         if (userType === 'admin') {
//             window.location.href = 'admin.html';
//         } else {
//             window.location.href = 'denuncia.html';
//         }
//     }
// });

