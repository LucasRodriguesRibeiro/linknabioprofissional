/**
 * Script de Interatividade e Alta Conversão
 * Página de Captura: Link na Bio & Mini Sites
 */

document.addEventListener('DOMContentLoaded', () => {
  // CONFIGURAÇÃO DO WHATSAPP DE DESTINO
  const WHATSAPP_CONFIG = {
    destinationNumber: '5574999249182', // 74999249182 configurado com DDI Brasil (+55)
    customMessagePrefix: 'Olá! Meu nome é '
  };

  const form = document.getElementById('leadForm');
  const nameInput = document.getElementById('leadName');
  const phoneInput = document.getElementById('leadPhone');
  const submitBtn = document.getElementById('submitBtn');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const toast = document.getElementById('toastNotification');
  const captureCard = document.querySelector('.capture-card');

  /* ==========================================================================
     1. Máscara Automática de Telefone Brasileiro: (XX) 9XXXX-XXXX
     ========================================================================== */
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove não numéricos
    
    // Limita ao máximo de 11 dígitos (DDD + 9 dígitos)
    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    // Aplicação da máscara dinâmica
    if (value.length > 10) {
      // Formato celular: (XX) 9XXXX-XXXX
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length > 6) {
      // Parcial
      value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4})$/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})$/, '($1');
    }

    e.target.value = value;
    clearError(phoneInput, phoneError);
  });

  nameInput.addEventListener('input', () => {
    clearError(nameInput, nameError);
  });

  /* ==========================================================================
     2. Validações e Limpeza de Erros
     ========================================================================== */
  function showError(input, errorElement, message) {
    input.style.borderColor = '#ff6b6b';
    errorElement.textContent = message;
    errorElement.classList.add('active');
  }

  function clearError(input, errorElement) {
    input.style.borderColor = '';
    errorElement.textContent = '';
    errorElement.classList.remove('active');
  }

  /* ==========================================================================
     3. Submissão do Formulário e Redirecionamento
     ========================================================================== */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const cleanPhone = phone.replace(/\D/g, '');

    let isValid = true;

    // Validação do Nome
    if (name.length < 2) {
      showError(nameInput, nameError, 'Por favor, informe seu nome completo.');
      isValid = false;
    }

    // Validação do WhatsApp
    if (cleanPhone.length < 10) {
      showError(phoneInput, phoneError, 'Informe um número de WhatsApp válido com DDD.');
      isValid = false;
    }

    if (!isValid) return;

    // Feedback visual no botão
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="btn-cta-text">Preparando atendimento...</span>
    `;
    submitBtn.style.pointerEvents = 'none';
    submitBtn.style.opacity = '0.85';

    // Monta a mensagem personalizada para o WhatsApp
    const message = encodeURIComponent(
      `${WHATSAPP_CONFIG.customMessagePrefix}*${name}*! 👋\n` +
      `Gostaria de criar meu *Link na Bio / Mini Site Profissional* para divulgar meus serviços.\n` +
      `Meu WhatsApp para contato é: ${phone}. Como podemos começar?`
    );

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_CONFIG.destinationNumber}&text=${message}`;

    // Exibe Toast de Notificação
    showToast();

    // Redireciona após breve delay para experiência premium
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      
      // Reseta botão e formulário
      submitBtn.innerHTML = originalBtnText;
      submitBtn.style.pointerEvents = 'auto';
      submitBtn.style.opacity = '1';
      form.reset();
    }, 1200);
  });

  function showToast() {
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  /* ==========================================================================
     4. Efeito de Destaque ao Clicar nos Botões dos Mockups
     ========================================================================== */
  const mockupLinks = document.querySelectorAll('.app-btn');
  mockupLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('form-capture');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Pulso de iluminação no card
        captureCard.style.borderColor = 'rgba(226, 178, 102, 0.8)';
        captureCard.style.boxShadow = '0 0 45px rgba(226, 178, 102, 0.35)';
        
        nameInput.focus();

        setTimeout(() => {
          captureCard.style.borderColor = '';
          captureCard.style.boxShadow = '';
        }, 1500);
      }
    });
  });

  /* ==========================================================================
     5. Efeito 3D Parallax sutil ao mover o cursor (Desktop)
     ========================================================================== */
  const stage = document.querySelector('.mockups-stage');
  const mockups = document.querySelectorAll('.phone-mockup');

  if (window.innerWidth > 900 && stage) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 a 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mockups.forEach((mockup, index) => {
        const factor = (index % 2 === 0 ? 1 : -1) * 8;
        const depth = (index + 1) * 2;
        mockup.style.transition = 'transform 0.15s ease-out';
        
        if (mockup.classList.contains('phone-center-hero')) {
          mockup.style.transform = `translateY(${(-8 + y * 12)}px) scale(1.05) rotate(${x * 2}deg)`;
        } else if (mockup.classList.contains('phone-left-outer')) {
          mockup.style.transform = `translateY(${(22 + y * factor)}px) rotate(${(-3.5 + x * 4)}deg) scale(0.92)`;
        } else if (mockup.classList.contains('phone-right-inner')) {
          mockup.style.transform = `translateY(${(14 + y * factor)}px) rotate(${(1.5 + x * 3)}deg) scale(0.96)`;
        } else if (mockup.classList.contains('phone-right-outer')) {
          mockup.style.transform = `translateY(${(24 + y * factor)}px) rotate(${(3.5 + x * 4)}deg) scale(0.91)`;
        }
      });
    });

    stage.addEventListener('mouseleave', () => {
      mockups.forEach(mockup => {
        mockup.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        mockup.style.transform = '';
      });
    });
  }
});
