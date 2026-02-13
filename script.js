// 1. INICIALIZACIÓN DE LENIS (Scroll Suave)
const lenis = new Lenis({ 
    lerp: 0.1,
    wheelMultiplier: 1,
    gestureOrientation: 'vertical',
    normalizeWheel: true,
    smoothWheel: true
});

function raf(time) { 
    lenis.raf(time); 
    requestAnimationFrame(raf); 
}
requestAnimationFrame(raf);

// 2. BASE DE DATOS DE VISTAS
const datosVistas = {
    'scp': {
        banner: "img/IMAGENES/Sistema de Control Policial/apaisada_scp.webp",
        circulo: "img/IMAGENES/Sistema de Control Policial/circular-scp.webp",
        titulo: "Sistema de Control Policial (SCP)",
        subtitulo: "La Plataforma SCP",
        descripcion: "Gestión operativa integral y seguimiento en tiempo real para fuerzas de seguridad.",
        detalle1: "Es la combinación de hardware y software que facilita las tareas diarias de los distintos cuerpos policiacos, proporcionando herramientas automatizadas para las instituciones de Seguridad Pública, áreas de inteligencia policial, gestión de alertas y el factor humano de las instituciones.",
        detalle2: `<strong>Objetivos Plataforma SCP</strong><br>1. Mejorar la percepción de atención a los ciudadanos.<br>2. Mejorar los tiempos de reacción de los oficiales.<br>3. Optimización, homologación y centralización de la información.<br>4. Control y medición de los rendimientos de trabajo.<br>5. Fortalecer base de datos de inteligencia policial.<br>6. Información clave para la toma de decisiones.`
    },
    'infraccion': {
        banner: "img/IMAGENES/INFRACCION DIGITAL/apaisada_infraccion",
        circulo: "img/IMAGENES/INFRACCION DIGITAL/circular_infraccion.webp",
        titulo: "Infracción Digital",
        subtitulo: "SCP Infracción Digital",
        descripcion: "Modernización del proceso de sanciones con tecnología móvil y transparencia total.",
        detalle1: "Automatiza la gestión de infracciones, reduciendo costos y mejorando los tiempos de llenado y la transparencia de las mismas.",
        detalle2: "Se integra fácilmente con sistemas existentes ya que es adaptable y escalable."
    },
    'investigacion': {
        banner: "img/IMAGENES/POLICIA E INVESTIGACION/apaisada_policieeinv",
        circulo: "img/IMAGENES/POLICIA E INVESTIGACION/circular_policiaeinv.webp",
        titulo: "Policía de Investigación",
        subtitulo: "SCP Policía de Investigación",
        descripcion: "Herramientas de análisis criminal y gestión de evidencia para el esclarecimiento de hechos.",
        detalle1: "Automatiza la gestión de infracciones, reduciendo costos y mejorando los tiempos de llenado y la transparencia de las mismas.",
        detalle2: "Se integra fácilmente con sistemas existentes ya que es adaptable y escalable."
    },
    'inteligencia': {
        banner: "img/IMAGENES/PLATAFORMA DE INTELIGENCIA/apaidadainteligencia",
        circulo: "img/IMAGENES/PLATAFORMA DE INTELIGENCIA/circular_inteligencia",
        titulo: "Plataforma de Inteligencia",
        subtitulo: "Plataforma de Inteligencia",
        descripcion: "Nuestra plataforma de inteligencia combina módulos especializados para ofrecer una solución integral en análisis y correlación de datos en tiempo real.",
        detalle1: ` • Consulta Redes Sociales Y Fuentes Abiertas<br>• Procesamiento CDR<br>• Análisis de Vínculos<br>• Identificación Facial<br>• Reconocimiento de Placas`,
        detalle2: `<strong>OSINT (Inteligencia de Fuentes Abiertas)</strong> <br> Recolecta y analiza datos públicos para obtener información estratégica ayudando a identificar tendencias o amenazas.`
    },
    'cautelares': {
        banner: "img/IMAGENES/MEDIDAS CAUTELARES/apaisadacautelar.webp",
        circulo: "img/IMAGENES/MEDIDAS CAUTELARES/circulacautelares",
        titulo: "SCP Medidas Cautelares",
        subtitulo: "Sobre las Medidas Cautelares",
        descripcion: `Es una solución tecnológica diseñada para monitorear en línea a personas que continúan su proceso legal en libertad.`,
        detalle1: `A través de un brazalete electrónico, las autoridades pueden rastrear su ubicación y establecer geocercas.`,
        detalle2: `<strong>¿Qué soluciones ofrece?</strong><br>• Monitoreo 24/7 de los usuarios con brazalete.<br>• Alertas inmediatas por violaciones.<br>• Optimización de recursos.`
    },
    'visitas': {
        banner: "img/IMAGENES/CONTROL DE VISITAS/apaisada_controldevisitas",
        circulo: "img/IMAGENES/CONTROL DE VISITAS/circular_controldevisitas.webp",
        titulo: "SCP Control de visitas a centros penitenciarios",
        subtitulo: "Control de visitas (SVP)",
        descripcion: "Gestión eficiente y segura las visitas a personas privadas de su libertad (PPL).",
        detalle1: "El sistema registra la entrada y salida de cada visitante, verifica la identidad mediante documentos oficiales y fotografía.",
        detalle2: `<strong>¿Qué soluciones ofrece?</strong><br>• Registro automatizado de visitantes.<br>• Verificación de identidad en línea.<br>• Monitoreo continuo de entradas.`
    },
    'lpr_sol': {
        banner: "img/IMAGENES/Plataforma de inteligencia LPR/apaisada_LPR.webp",
        circulo: "img/IMAGENES/Plataforma de inteligencia LPR/circular_lrp.webp",
        titulo: "Plataforma Inteligencia LPR",
        subtitulo: "Sobre la Plataforma Inteligencia LPR",
        descripcion: "Reconocimiento automático de matrículas integrado a bases de datos nacionales.",
        detalle1: "Lectura automática de placas vehiculares en tiempo real.",
        detalle2: `<strong>Plataforma de Inteligencia Integral</strong><br> • SmartFace: Identificación avanzada de rostros.<br> • Moncon (LPR): Reconocimiento y alertamiento en tiempo real.`
    },
    'ciberseguridad': {
        banner: "img/ser/Ciber Seguridad BG.webp",
        circulo: "img/ser/Ciber Seguridad C.webp",
        titulo: "Servicios de Ciberseguridad",
        subtitulo: "Sobre los Servicios de Ciberseguridad",
        descripcion: "Protección integral de sistemas, redes y datos.",
        detalle1: "Protección de infraestructura tecnológica frente a ciberataques.",
        detalle2: `• Evaluación de vulnerabilidades.<br>• Pruebas de penetración.<br>• Forensia digital de eventos.`
    },
    'desarrollo': {
        banner: "img/ser/Desarrollo de Sitema BG.webp",
        circulo: "img/ser/Desarrollo de Sitema C.webp",
        titulo: "Desarrollo de Sistemas",
        subtitulo: "Sobre el Desarrollo de Sistemas",
        descripcion: "Diseño y desarrollo de software a la medida.",
        detalle1: "Soluciones tecnológicas personalizadas.",
        detalle2: "Escalabilidad y altos estándares de calidad."
    },
    'tacticos_imp': {
        banner: "img/ser/Implementacion de tacticos BG.webp",
        circulo: "img/ser/Implementacion de tacticos C.webp",
        titulo: "Implementación de Tácticos",
        subtitulo: "Sobre la Implementación de Tácticos",
        descripcion: "Despliegue de soluciones tecnológicas tácticas.",
        detalle1: "Equipos Tácticos de Localización.",
        detalle2: `<strong>Búsqueda y Rescate:</strong> Vital para localizar rápidamente a personas en desastres o desapariciones.`
    },
    'mantenimiento': {
        banner: "img/ser/Matenimiento BG.webp",
        circulo: "img/ser/Matenimiento C.webp",
        titulo: "Mantenimiento Preventivo (PM)",
        subtitulo: "Sobre el Mantenimiento Preventivo",
        descripcion: "Soporte técnico y mantenimiento continuo.",
        detalle1: "Mantenimiento preventivo y correctivo.",
        detalle2: "Optimiza rendimiento y reduce fallas."
    },
    'transcripcion': {
        banner: "img/ser/Transcricion BG.webp",
        circulo: "img/ser/Transcricion C.webp",
        titulo: "Servicio de Transcripción",
        subtitulo: "SCP Transcripción",
        descripcion: "Para búsqueda, correlación y explotación de la información.",
        detalle1: "<strong>Audios provenientes de:</strong>",
        detalle2: `• Canales PTT.<br>• Radiocomunicación Policial.<br>• Entrevistas de investigación.`
    },
    'forensia': {
        banner: "img/equi/Forencia Digital BG.webp",
        circulo: "img/equi/Forencia Digital C.webp",
        titulo: "Equipamiento Forense Digital",
        subtitulo: "Sobre el Equipamiento Forense Digital",
        descripcion: "Extracción y preservación de evidencia digital.",
        detalle1: "Forensia Digital: Resuelve casos con mayor rapidez.",
        detalle2: `• Extracción física y lógica de información.<br>• Gestión segura de evidencias.`
    },
    'tactico_eq': {
        banner: "img/equi/apaisado_tacticos.webp",
        circulo: "img/equi/circular_tacticoswebp",
        titulo: "Equipamiento Táctico",
        subtitulo: "Sobre el Equipamiento Táctico",
        descripcion: "Tecnología de protección y comunicación.",
        detalle1: "<strong>Equipos Tácticos</strong>",
        detalle2: `o IMSI-Catcher.<br>o Intercepción de señales.<br>o Rastreo de ubicación.`
    },
    'lpr_sistemas': {
        banner: "img/equi/Sistema LPR BG.webp",
        circulo: "img/equi/Sistema LPR C.webp",
        titulo: "Sistemas LPR Hardware",
        subtitulo: "Sobre los Sistemas LPR Hardware",
        descripcion: "Cámaras y sensores de alta velocidad.",
        detalle1: `Lectura automática de placas y antenas RFID.`,
        detalle2: `o Foto multas.<br>o Recuperación de vehículos.<br>o Control de acceso.`
    },
    'areas': {
        banner: "img/equi/Plataforma AereaBG.webp",
        circulo: "img/equi/Plataforma Aerea C.webp",
        titulo: "Plataforma Áreas",
        subtitulo: "Sobre la Plataforma Áreas",
        descripcion: "Vigilancia aérea estratégica.",
        detalle1: `• Resistencia de vuelo de 12 horas.<br>• Transmisión de video en tiempo real.`,
        detalle2: `<strong>Datacenters:</strong> Soluciones de sistemas tecnológicos críticos.`
    },
    'acceso': {
        banner: "img/equi/apaisada_controlaccesos.webp",
        circulo: "img/equi/circularaccesos.webp",
        titulo: "Control de Acceso",
        subtitulo: "Sobre el Control de Acceso",
        descripcion: "Validación de identidad.",
        detalle1: "Seguridad inteligente, acceso garantizado.",
        detalle2: `• Credencialización.<br>• Rayos X e inspección.<br>• Video Vigilancia.`
    },
    'moviles': {
        banner: "img/equi/Pm95 BK.webp",
        circulo: "img/equi/PM95.png",
        titulo: "Dispositivos Móviles",
        subtitulo: "Sobre los Dispositivos Móviles",
        descripcion: "Terminales robustas para uso rudo.",
        detalle1: "Diseñados para campo.",
        detalle2: "Conectividad segura."
    },
    'pmi': {
        banner: "img/equi/Pm95 BK.webp",
        circulo: "img/equi/PM95.png",
        titulo: "PMI - Gestión de Proyectos",
        subtitulo: "Sobre la Gestión de Proyectos PMI",
        descripcion: "Control de grandes proyectos tecnológicos.",
        detalle1: "Gestión bajo estándares PMI.",
        detalle2: "Cumplimiento de tiempo, costo y calidad."
    },
    'uvm': {
        banner: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
        circulo: "https://i.postimg.cc/0jXmR0vH/grafico-circulo.png",
        titulo: "Traje UVM",
        subtitulo: "Sobre el Traje UVM",
        descripcion: "Unidad de Vigilancia Móvil.",
        detalle1: "Tecnología táctica portable.",
        detalle2: "Vigilancia y control operativo."
    }
};

// 3. FUNCIÓN PARA ANIMAR ESTADÍSTICAS (GSAP + Intersection Observer)
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const targetValue = parseInt(el.getAttribute('data-target'));
                const hasPlus = el.getAttribute('data-target').includes('+') || el.innerText.includes('+');

                // Objeto dummy para que GSAP anime el valor numérico
                let countObj = { val: 0 };

                gsap.to(countObj, {
                    val: targetValue,
                    duration: 2.5,
                    ease: "power3.out",
                    onUpdate: function() {
                        // Formateamos con comas de miles y el signo + si aplica
                        let formattedNumber = Math.floor(countObj.val).toLocaleString('en-US');
                        el.innerText = (hasPlus ? "+" : "") + formattedNumber;
                    }
                });

                observer.unobserve(el); // Solo animar una vez
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

// 4. GENERACIÓN DE FORMULARIO
const obtenerHtmlForm = (tituloPersonalizado) => {
    return `
    <section class="project-form-section" id="contacto">
        <div class="blue-container">
            <div class="form-header">
                <h2>${tituloPersonalizado || '¿Tienes un proyecto?<br>Hablemos →'}</h2>
                <p><i class="fa-solid fa-phone"></i> 222 970 39 85</p>
                <p><i class="fa-solid fa-envelope"></i> contacto@sysne.com.mx</p>
            </div>
            <form class="form-body" onsubmit="event.preventDefault(); alert('Solicitud enviada'); volverInicio();">
                <div class="form-fields">
                    <input type="text" placeholder="Nombre" required>
                    <input type="email" placeholder="Correo" required>
                    <input type="text" placeholder="Teléfono">
                    <select required>
                        <option value="" disabled selected>Sector...</option>
                        <option>Gobierno</option>
                        <option>Privado</option>
                    </select>
                    <textarea placeholder="Mensaje" rows="4"></textarea>
                    <button type="submit" class="btn-submit">Enviar solicitud</button>
                </div>
            </form>
        </div>
    </section>`;
};

// 5. NAVEGACIÓN ENTRE VISTAS
function cargarVista(id) {
    const inicio = document.getElementById('vista-inicio');
    const detalle = document.getElementById('vista-detalle');
    const contenedor = document.getElementById('contenido-dinamico');
    let data = datosVistas[id] || datosVistas['scp'];

    gsap.to(inicio, { opacity: 0, duration: 0.3, onComplete: () => {
        inicio.style.display = 'none';
        detalle.style.display = 'block';

        contenedor.innerHTML = `
            <section class="prod-hero" style="background-image: url('${data.banner}');">
                <div class="prod-hero-content">
                    <span style="color:var(--celeste); font-weight:800; letter-spacing:2px;">SOLUCIÓN SYSNE</span>
                    <h1>${data.titulo}</h1>
                    <p>${data.descripcion}</p>
                </div>
            </section>
            <section class="prod-content-dual">
                <div class="prod-text-col">
                    <h2>${data.subtitulo}</h2>
                    <p>${data.detalle1}</p>
                    <div class="box-detalle">${data.detalle2}</div>
                </div>
                <div class="prod-img-col">
                    <img src="${data.circulo}" class="circular-img">
                </div>
            </section>
            ${obtenerHtmlForm('Cotizar ' + data.titulo)}
        `;
        gsap.to(detalle, { opacity: 1, duration: 0.4 });
        lenis.scrollTo(0, { immediate: true });
    }});
}

function volverInicio() {
    const inicio = document.getElementById('vista-inicio');
    const detalle = document.getElementById('vista-detalle');
    gsap.to(detalle, { opacity: 0, duration: 0.3, onComplete: () => {
        detalle.style.display = 'none';
        inicio.style.display = 'block';
        gsap.to(inicio, { opacity: 1, duration: 0.4 });
        lenis.scrollTo(0, { immediate: true });
        
        // Al volver al inicio, reiniciamos el observador para las stats
        initStatsAnimation();
    }});
}

// 6. EVENTOS DE CARGA Y SCROLL
window.addEventListener('load', () => {
    // Inyectar el formulario de inicio
    const formInicioContainer = document.getElementById('contenedor-formulario-inicio');
    if (formInicioContainer) formInicioContainer.innerHTML = obtenerHtmlForm();
    
    // Iniciar la animación de los números
    initStatsAnimation();
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
});
