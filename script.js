//function toggleMode() {
let basePosition = {
  left: { x: 130, y: 112 },
  right: { x: 165, y: 112 }
};
  let light = localStorage.getItem('light') //ponto de amazenamento do navegador
  const Switch = document.getElementById('switch') //Declarando meu switch a um Objeto
  const img = document.querySelector("#profile img") //Pegando a tag da imagem
  
  // Declarei o Objeto caso tenha 'Light' na classlist (ON)
  const enableDarkmode = () => {
    document.body.classList.add('light')
    localStorage.setItem('light', 'active')
    img.setAttribute("src", "./assets/avatar_dark.png")
      // nova posição no dark
    basePosition = {
      left: { x: 134, y: 78},
      right: { x: 165, y: 78 }
  };

  updatePupilBase(); //altera a imagem
  }
 
  // Declarei o objeto caso nao tenha 'light' na classlist (OFF)
  const disableDarkmode = () =>{
    document.body.classList.remove('light')
    localStorage.setItem('light', null)
    img.setAttribute("src", "./assets/avatar_light.png") //mantem a imagem
      basePosition = {
        left: { x: 130, y: 112 },
        right: { x: 165, y: 112 }
  };

  updatePupilBase();
    
  }
  
function updatePupilBase() {
  const pupils = document.querySelectorAll(".pupil");

  pupils[0].setAttribute("cx", basePosition.left.x);
  pupils[0].setAttribute("cy", basePosition.left.y);

  pupils[1].setAttribute("cx", basePosition.right.x);
  pupils[1].setAttribute("cy", basePosition.right.y);
}

  if(light === "active") enableDarkmode()
    
  Switch.addEventListener("click", () => {
    light = localStorage.getItem('light')
    light !== "active" ? enableDarkmode() : disableDarkmode()
  })

//tradução

document.addEventListener("DOMContentLoaded", function () {

  const translations = {
    pt: {
      backHome: "← Voltar para Home",
      myCareer: "Minha Carreira",
      footer: "By: Paulo Melo",
      aboutMe: "Sobre Mim",
      myProjects: "Meus Projetos",
      sourcecode: "Código desse Website",
      aboutmeKnowledge: "Conhecimento: Java, Python, JavaScript, HTML, CSS, C# , R, Shell, Linux, Apache, Weblogic, SQL, .Net, ABAP, Typescript.",
      aboutmeExperience: "Tenho ampla experiência em desenvolvimento backend e frontend, atuando em projetos grandes e complexos. Estou sempre em busca de novos conhecimentos e atualizações no mundo da TI.",
      aboutmeLife: "Sou casado e estou construindo uma vida ao lado da minha esposa, aproveitando aventuras, viagens, músicas e esportes.",
      projectJava: "Desenvolvi um gerenciador de tarefas em Java que surgiu de uma necessidade pessoal: organizar e lembrar das minhas próprias tarefas do dia a dia. Desenvolvido com Java e ficou tão legal que quero levar isso para um frontend, quem sabe.... em Flutter",
      projectProffy: "Desenvolvida com HTML, CSS e JavaScript, esta aplicação web tem como objetivo ser uma plataforma de estudos. Professores e alunos podem se cadastrar para oferecer ou participar de aulas.",
      projectFakeNews: "A aplicação foi desenvolvida para fins acadêmicos, com o objetivo de interagir com usuários de redes sociais que podem estar expostos a fake news. Com base em um modelo de dados, a aplicação permite que os usuários insiram um título de notícia e verifiquem sua autenticidade. A resposta é fornecida com uma precisão baseada em um modelo treinado utilizando técnicas de aprendizado de máquina.",
      projectPortalLinks: "Um aplicativo projetado para criar um portal que reúne todos os seus links essenciais em um só lugar—seja de redes sociais, sites ou qualquer outra plataforma. O objetivo é facilitar ao máximo a navegação dos usuários e o acesso às principais plataformas de alguém, assim como o LinkTree. Desenvolvido com HTML, CSS e JavaScript.",
      projectAppointment: "Aplicação desenvolvida utilizando o framework Django com Python, HTML, CSS e JavaScript, integrada a um banco de dados SQLite. O objetivo foi criar uma interface gráfica para o gerenciamento de consultas médicas, oferecendo duas perspectivas principais: uma para os pacientes agendarem suas consultas e outra para os médicos visualizarem seus horários e atendimentos marcados.",
      sourcecodeP: "Veja o código aqui",
      careerSeniorDataAnalytics: "Desenvolvedor / Data Analytics Engineer | Auditoria Contínua | set/2025 -> atual",
      careerFullstackDev: " - Desenvolvedor de Sistemas (Java) | Pleno | nov/2024 -> set/2025 ",
      careerAnalystDev: " - Analista de Desenvolvimento de Sistemas Pleno | jun/2023 -> nov/2024 ",
      careerServiceDesk: " - Service Desk | fev/2020 -> jul/2021",
      careerInternship: " - Estagiário Vivo BPO IT | fev/2022 -> jun/2022",
      careerSAPAnalyst: " - SAP Analista de Sistemas | jun/2022 -> mai/2023",
      intership: "Trabalhei como estagiário na Telefônica Brasil (VIVO), com foco em encontrar novas ferramentas tecnológicas para aprimorar processos. Desenvolvi automações utilizando Shell e realizei análises de dados para a equipe de contabilidade com Python. Além disso, fui um dos pioneiros na integração de ferramentas por meio de código em Python e VB, com SAP e Excel. Após apenas quatro meses tive a felicidade de ser efetivado. :)",
      service: "Trabalhei como analista de service desk, sendo responsável por atender a fila de tickets relacionados à manutenção, resolução de erros e atualizações de servidores e estações de trabalho. Também fui encarregado de realizar visitas presenciais a clientes para avaliar seu ambiente de TI, incluindo computadores e salas de servidores. Meu trabalho envolvia monitoramento contínuo 24/7, gerenciamento de firewall, configuração de VPN e infraestrutura de rede.",
      auditoria: "Atuação em Auditoria Interna com foco em Data Analytics, automação e desenvolvimento de soluções para apoio à tomada de decisão. Experiência no processamento de grandes volumes de dados, criação de KPIs, dashboards (Power BI) e rotinas de ETL, utilizando Python, R, Java e SQL. Forte atuação na geração de insights estratégicos, mitigação de riscos e melhoria de processos e controles internos.",
      careerFullstackDevDetails: "Atuação como desenvolvedor em TI, focado na criação de sistemas internos, automação de processos e análise de dados para otimização operacional. Experiência com Java, Python, SQL e desenvolvimento web, além de atuação em ambientes cloud (Azure DevOps), CI/CD e Linux, contribuindo para melhorias de processos e eficiência das áreas de negócio.",
      careerSeniorDataAnalyticsDetails: "Atualmente, estou atuando como analista sênior de dados, onde fui responsável por coletar, analisar e interpretar grandes volumes de dados para fornecer insights valiosos para a tomada de decisões estratégicas. Utilizo ferramentas de análise de dados, como Python, SQL e plataformas de visualização, para identificar tendências, padrões e oportunidades de melhoria nos processos de negócios. Trabalho em estreita colaboração com equipes multidisciplinares para transformar dados em informações acionáveis que impulsionam o crescimento e a eficiência da empresa.",
      careerSAPAnalystDetails: "Atuação com suporte e evolução de módulos SAP (WF, FI e SD), focado em automação e melhoria de processos operacionais. Experiência com Python, ABAP, C# e integrações via XML, desenvolvendo soluções para otimizar rotinas e aumentar a eficiência das áreas de negócio.",
      careerAnalystDevDetails: "Atuação em BPO & Eficiência na área de Contabilidade, focado em automação de processos, desenvolvimento de sistemas e geração de KPIs. Experiência com Python, Java, C#, Power Apps e Power Automate, além de uso de Azure DevOps. Contribuição na melhoria de eficiência operacional e na transformação digital por meio de soluções tecnológicas e práticas ágeis."


    
      
    },
    en: {
      backHome: "← Back to Home",
      myCareer: "My Career",
      footer: "By: Paulo Melo",
      aboutMe: "About Me",
      myProjects: "My Projects",
      sourcecode: "Source code of this Website",
      aboutmeKnowledge: "Knowledge: Java, Python, JavaScript, HTML, CSS, C# , R, Shell, Linux, Apache, Weblogic, SQL, .Net, ABAP, Typescript.",
      aboutmeExperience: "I have extensive experience in backend and frontend development, working on large and complex projects. I am always seeking new knowledge and updates in the world of IT.",
      aboutmeLife: "I am married and building a life alongside my wife, enjoying adventures, travels, music, and sports.",
      projectJava: "I developed a task manager in Java that arose from a personal need: to organize and remember my own daily tasks. Developed with Java and it turned out so cool that I want to take this to a frontend, who knows.... in Flutter",
      projectProffy: "Developed with HTML, CSS, and JavaScript, this web application aims to be a study platform. Teachers and students can register to offer or participate in classes.",
      projectFakeNews: "The application was developed for academic purposes, with the aim of interacting with social media users who may be exposed to fake news. Based on a data model, the application allows users to input a news title and check its authenticity. The response is provided with an accuracy based on a model trained using machine learning techniques.",
      projectPortalLinks: "An application designed to create a portal that brings together all your essential links in one place—whether from social media, websites, or any other platform. The goal is to maximize user navigation and access to someone's main platforms, just like LinkTree. Developed with HTML, CSS, and JavaScript.",
      projectAppointment: "Application developed using the Django framework with Python, HTML, CSS and JavaScript, integrated with an SQLite database. The objective was to create a graphical interface for managing medical appointments, offering two main perspectives: one for patients to schedule their appointments and another for doctors to view their schedules and scheduled appointments.",
      sourcecodeP: "See the code here",
      careerSeniorDataAnalytics: " - Senior Data Analyst | Jul/2023 -> Present",
      careerFullstackDev: " - Fullstack Dev | Nov/2024 -> Sep/2025 ",
      careerAnalystDev: " - Systems Development Analyst | Jun/2023 -> Nov/2024 ",
      careerServiceDesk: " - Service Desk | Feb/2020 -> Jul/2021",
      careerInternship: " - Vivo BPO IT Intern | Feb/2022 -> Jun/2022",
      careerSAPAnalyst: " - SAP Systems Analyst | Jun/2022 -> May/2023",
      intership: "I worked as an intern at Telefônica Brasil (VIVO), focusing on finding new technological tools to improve processes. I developed automations using Shell and performed data analysis for the accounting team with Python. Additionally, I was one of the pioneers in integrating tools through code in Python and VB, with SAP and Excel. After just four months, I had the happiness of being hired. :)",
      service: "I worked as a service desk analyst, being responsible for attending to the ticket queue related to maintenance, error resolution, and updates of servers and workstations. I was also in charge of making on-site visits to clients to assess their IT environment, including computers and server rooms. My work involved continuous 24/7 monitoring, firewall management, VPN configuration, and network infrastructure.",
      auditoria: "Currently I am audit analyst, performing security and compliance analyses on SAP systems. I was responsible for identifying vulnerabilities, implementing security measures, and ensuring data integrity. I worked closely with development and operations teams to implement continuous improvements in system security.",
      careerFullstackDevDetails: "Currently, I am working as a fullstack developer, where I am responsible for designing, developing, and maintaining web applications. I work on both the frontend and backend, using technologies such as JavaScript, HTML, CSS, Python, and frameworks like Django and React. I am involved in all stages of the development cycle, from conception to implementation and maintenance of applications.",
      careerSeniorDataAnalyticsDetails: "Currently, I am working as a senior data analyst, where I am responsible for collecting, analyzing, and interpreting large volumes of data to provide valuable insights for strategic decision-making. I use data analysis tools such as Python, SQL, and visualization platforms to identify trends, patterns, and opportunities for improvement in business processes. I work closely with multidisciplinary teams to transform data into actionable information that drives company growth and efficiency.",
      careerAnalystDevDetails: "I worked as a systems development analyst, where I was responsible for analyzing, designing and implementing software solutions to meet business needs. I work closely with business teams to understand requirements and translate them into technical specifications. I participate in all stages of the development cycle, from conception to implementation and maintenance of applications, using technologies such as Java, Python and related frameworks.",
      careerSAPAnalystDetails: "I worked as a SAP systems analyst, where I was responsible for implementing, configuring, and maintaining SAP modules, ensuring the efficiency of business processes. I worked closely with business teams to understand their needs and translate that into technical solutions within the SAP environment. I performed requirements analysis, testing, and ongoing support to ensure the stability and performance of SAP systems.",
    }
  };

  const toggleLangBtn = document.getElementById("toggle-language");

  // 🔥 Detecta idioma automaticamente
  function detectLanguage() {
    const savedLang = localStorage.getItem("language");
    if (savedLang) return savedLang;

    const browserLang = navigator.language || navigator.userLanguage;

    if (browserLang.startsWith("pt")) {
      return "pt";
    } else {
      return "en";
    }
  }

  let currentLang = detectLanguage();

  function updateTexts(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    toggleLangBtn.textContent = lang === "pt" ? "PT | EN" : "EN | PT";
  }

  toggleLangBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("language", currentLang);
    updateTexts(currentLang);
  });

  updateTexts(currentLang);
});

// Avatar Follow Mouse
document.addEventListener("mousemove", function (e) {
  const pupils = document.querySelectorAll(".pupil");
  const avatar = document.querySelector(".avatar-wrapper");

  const rect = avatar.getBoundingClientRect();
  const avatarCenterX = rect.left + rect.width / 2;
  const avatarCenterY = rect.top + rect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = mouseX - avatarCenterX;
  const deltaY = mouseY - avatarCenterY;

  const angle = Math.atan2(deltaY, deltaX);

  const maxMove = 6; // limite da pupila

  const moveX = Math.cos(angle) * maxMove;
  const moveY = Math.sin(angle) * maxMove;

  pupils.forEach(pupil => {
    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

