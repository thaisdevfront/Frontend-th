 const items = document.querySelectorAll(".scroll-item");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.95;
  const triggerTop = window.innerHeight * 0.2;

  items.forEach(item => {
    const box = item.getBoundingClientRect();

    // ENTRADA
    if (box.top < triggerBottom && box.bottom > triggerTop) {
      item.classList.add("show");
      item.classList.remove("hide");
    }

    // SAÍDA
    else if (box.top <= triggerTop) {
      item.classList.remove("show");
      item.classList.add("hide");
    }

    else {
      item.classList.remove("show", "hide");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

//whatsapp
function abrirWhatsApp() {
const telefone = "5512981021517"; // DDI + DDD + número
const mensagem = "Olá! Gostaria de mais informações";


const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
window.open(url, "_blank");
}

// Form submission to WhatsApp
        document.getElementById("contact-form").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const product = document.getElementById("product").value;
            const message = document.getElementById("message").value;
            
            const whatsappMessage = `Olá, vim do site ThMariano-dev e gostaria de solicitar um orçamento!\n\nNome: ${name}\nWhatsApp: ${phone}\nE-mail: ${email}\nProduto: ${product}\nMensagem: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/5512981021517?text=${encodedMessage}`, "_blank");
            
            // Reset form
            this.reset();
            
            // Show success message (you can customize this)
            alert("Seu pedido foi enviado! Entraremos em contato em breve.");
        });


// naav
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// scroll header
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 80);
});

// abrir / fechar menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// fechar menu ao clicar em um link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});



// portfólio

const projects = [
    {
        id: "SiteInstitucional–Omega",
        title: "Site Institucional – Omega Governança Tributária",
        image: "assets/img/projetos/omega.png",
        demo: "https://wheat-chough-976097.hostingersite.com/",
       


        tech: "WordPress · HTML5 · CSS3 · JavaScript · Design Responsivo",


        dev: "Desenvolvi o site institucional da Omega Governança Tributária utilizando WordPress, com foco na construção e personalização do front-end.Atuei na estruturação das páginas, organização do conteúdo e ajustes em HTML, CSS e JavaScript para garantir uma apresentação profissional, clara e responsiva.",


        challenges: "Transmitir credibilidade e clareza em um site voltado para governança tributária, organizando informações técnicas de forma acessível e garantindo boa experiência do usuário em diferentes dispositivos.",


        solutions: [
        "Customização de layout no WordPress",
        "Estruturação de páginas com HTML semântico",
        "Ajustes em CSS para responsividade e identidade visual",
        "Boas práticas de UX/UI focadas em clareza e confiança",
        "Otimização básica de SEO on-page"
        ],


        result: "Site institucional funcional, responsivo e profissional, desenvolvido para fortalecer a presença digital da empresa e comunicar seus serviços de forma clara e confiável."
    },

    {
        id: "LandingPage–FlixSeguroResidencial",
        title: "Landing Page – Flix Seguro Residencial",
        image: "assets/img/projetos/flix.png",
        demo: "https://aqua-elephant-869860.hostingersite.com/",
       


        tech: "WordPress · HTML5 · CSS3 · JavaScript · Design Responsivo",


        dev: "Desenvolvi a landing page do Flix Seguro Residencial utilizando WordPress, atuando na construção e personalização do front-end, organização das seções e adaptação responsiva.Realizei ajustes em HTML, CSS e JavaScript para garantir uma navegação clara, visual profissional e foco em conversão.",


        challenges: "Apresentar informações sobre um serviço de seguro de forma simples, confiável e objetiva, facilitando a compreensão do usuário e direcionando para a ação desejada.",


        solutions: [
        "Customização de layout no WordPress",
        "Ajustes em HTML e CSS para identidade visual e responsividade",
        "Estruturação clara das seções e CTAs estratégicos",
        "Boas práticas de UX/UI para transmitir credibilidade",
        "Otimização básica de SEO on-page"
        ],


        result: "Landing page funcional, responsiva e focada em conversão, desenvolvida para apresentação do serviço de seguro residencial e captação de leads de forma clara e eficiente."
    },

    {
        id: "LandingPage–UBKSistemas",
        title: "Landing Page – UBK Sistemas | Sistema de Gestão Completo",
        image: "assets/img/projetos/ubk.png",
        demo: "https://ubksistemas.com.br/",
        


        tech: "HTML5 · CSS3 · JavaScript · Design Responsivo",


        dev: "Desenvolvi a landing page da UBK Sistemas, um sistema de gestão completo, utilizando WordPress.Atuei na construção e personalização do front-end, organização das seções e ajustes em HTML, CSS e JavaScript para garantir clareza das informações, boa usabilidade e foco em conversão.",


        challenges: "Apresentar um sistema de gestão com múltiplas funcionalidades de forma clara e objetiva, evitando excesso de informação e guiando o usuário para a ação principal.",


        solutions: [
        "Customização de layout no WordPress",
        "Estruturação clara das seções e diferenciais do sistema",
        "Ajustes em HTML e CSS para responsividade e identidade visual",
        "Boas práticas de UX/UI focadas em conversão",
        "Otimização básica de SEO on-page"
        ],


        result: "Landing page funcional, responsiva e orientada à conversão, desenvolvida para apresentar o sistema de gestão de forma clara e profissional, facilitando a captação de leads e o entendimento do produto."
    },

    {
        id: "ProtótipodeLojaVirtual–VendadeTênisNike",
        title: "Protótipo de Loja Virtual – Venda de Tênis Nike",
        image: "assets/img/projetos/nike.png",
        demo: "https://thaisdevfront.github.io/Nike-th/",
        code: "https://github.com/thaisdevfront/Nike-th",


        tech: "Figma · UI/UX Design · Prototipação de Interfaces · Design Responsivo",


        dev: "Desenvolvi o protótipo de uma loja virtual para venda de tênis Nike, focado na experiência do usuário, navegação intuitiva e apresentação visual do produto.Atuei na criação do layout, organização das seções, hierarquia visual e fluxo de compra, considerando boas práticas de e-commerce.",


        challenges: "Criar uma interface atrativa e funcional para e-commerce, garantindo fácil navegação, destaque para os produtos e um fluxo de compra simples e intuitivo.",


        solutions: [
        "Criação de layout no Figma",
        "Definição de hierarquia visual e grid",
        "Prototipação de telas e fluxo de navegação",
        "Design responsivo para desktop e mobile",
        "Boas práticas de UX/UI aplicadas ao e-commerce"
        ],


        result: "Protótipo funcional e responsivo, desenvolvido para simular uma experiência de compra intuitiva e visualmente atrativa em uma loja virtual de tênis."
    },

    {
        id: "OlfatiAromatizantes",
        title: "Protótipo de Loja Virtual – Olfati Aromatizantes",
        image: "assets/img/projetos/olfati.png",
        demo: "https://thaisdevfront.github.io/Olfati/",
        code: "https://github.com/thaisdevfront/Olfati",


        tech: "Figma · HTML5 · CSS3 · JavaScript · Design Responsivo",


        dev: "Desenvolvi o protótipo e o front-end de uma loja virtual para venda de produtos aromatizantes da marca Olfati, atuando desde a concepção da interface no Figma até a implementação em código com HTML, CSS e JavaScript.Fui responsável pela estruturação do layout, organização do conteúdo e desenvolvimento da interface responsiva, com foco em usabilidade e experiência do usuário.",


        challenges: "Criar uma experiência de e-commerce atrativa e funcional, transmitindo a identidade da marca e garantindo navegação intuitiva em diferentes dispositivos.",


        solutions: [
        "Prototipação da interface no Figma",
        "Definição de layout, grid e hierarquia visual",
        "Estruturação do projeto com HTML semântico",
        "Estilização em CSS3 com foco em responsividade",
        "Implementação de interações básicas com JavaScript",
        "Boas práticas de UX/UI aplicadas ao e-commerce"
        ],


        result: "Projeto funcional, responsivo e organizado, simulando uma loja virtual de aromatizantes, integrando design e desenvolvimento front-end de forma consistente."
    },

    {
        id: "CatálogodeImóveis",
        title: "Protótipo de Site – Catálogo de Imóveis | Bruno Colleto",
        image: "assets/img/projetos/bc.png",
        demo: "https://www.figma.com/design/Dq3ZV6l1JUNQnoPHPGFwTz/Bruno-colleto?node-id=0-1&t=GyiU0DHVFRxY1P0r-1",
        


        tech: "Figma · UI/UX Design · Prototipação de Interfaces · Design Responsivo",


        dev: "Desenvolvi o protótipo de um site catálogo de imóveis para venda, voltado ao corretor Bruno Colleto, com foco na apresentação clara dos imóveis e na experiência do usuário.Atuei na criação do layout, organização das seções, definição de hierarquia visual e prototipação do fluxo de navegação, considerando boas práticas do mercado imobiliário.",


        challenges: "Organizar múltiplos imóveis de forma clara e intuitiva, facilitando a navegação, visualização das informações e o contato com o corretor.",


        solutions: [
        "Criação do layout no Figma",
        "Estruturação de páginas para listagem e detalhes dos imóveis",
        "Definição de grid e hierarquia visual",
        "Prototipação do fluxo de navegação",
        "Design responsivo para desktop e mobile",
        "Boas práticas de UX/UI aplicadas ao setor imobiliário"
        ],


        result: "Protótipo funcional e responsivo, desenvolvido para simular um catálogo de imóveis com navegação intuitiva, visual profissional e foco em conversão de contato."
    },
    

];


const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

const projectTitle = document.getElementById("projectTitle");
const projectImage = document.getElementById("projectImage");
const projectName = document.getElementById("projectName");
const projectTech = document.getElementById("projectTech");
const projectDev = document.getElementById("projectDev");
const projectChallenges = document.getElementById("projectChallenges");
const projectSolutions = document.getElementById("projectSolutions");
const projectResult = document.getElementById("projectResult");
const demoLink = document.getElementById("demoLink");
const codeLink = document.getElementById("codeLink");


const buttons = document.querySelectorAll(".btn-port");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const projectId = button.dataset.project;
    const project = projects.find(p => p.id === projectId);

    if (!project) return;
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectImage.style.display = "block";
    if (project.image) {
      projectImage.src = project.image;
      projectImage.alt = project.title;
      projectImage.style.display = "block";
    } else {
      projectImage.style.display = "none";
    }
    
    // preencher modal
    projectTitle.innerText = project.title;

    
    projectName.innerText = project.title;
    projectTech.innerText = project.tech;
    projectDev.innerText = project.dev;
    projectChallenges.innerText = project.challenges;
    projectResult.innerText = project.result;

    projectSolutions.innerHTML = "";
    project.solutions.forEach(solution => {
      const li = document.createElement("li");
      li.innerText = solution;
      projectSolutions.appendChild(li);
    });

    demoLink.href = project.demo;
    demoLink.style.display = "inline-block";

    if (project.code) {
      codeLink.href = project.code;
      codeLink.style.display = "inline-block";
    } else {
      codeLink.style.display = "none";
    }

    modal.style.display = "flex";
  });
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // 🛑 impede conflito com o clique do modal
  modal.style.display = "none";
});
document.querySelector(".modal-content").addEventListener("click", e => {
  e.stopPropagation();
});


// lógica do “Ver mais”
const btnMais = document.querySelector(".btn-mais");
const maisPort = document.querySelector(".maisport");

btnMais.addEventListener("click", () => {
  maisPort.classList.toggle("aberto");

  btnMais.innerText = maisPort.classList.contains("aberto")
    ? "Ver menos"
    : "Ver mais";
});


// Bloquear tecla Print Screen
document.addEventListener('keydown', function (e) {
  if (e.key === 'PrintScreen') {
    e.preventDefault();
    alert('Captura de tela bloqueada');
  }
});

// Bloquear Ctrl + P
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'p') {
    e.preventDefault();
    alert('Impressão desativada');
  }
});

// Desativar botão direito (copiar / salvar)
document.addEventListener('contextmenu', e => e.preventDefault());