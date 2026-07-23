import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'lms-platform',
    title: 'Plataforma de Cursos Online (LMS)',
    description: 'Plataforma educativa full stack con gestión de cursos, inscripción y seguimiento de avance',
    image: '/lms.png',
    technologies: ['Next.js', 'Node.js', 'MySQL', 'JWT', 'REST API'],
    demoUrl: 'https://demo.example.com',
    githubFrontendUrl: 'https://github.com/juanmendozaca-netizen/plataf-de-cursos-frontend.git',
    githubBackendUrl: 'https://github.com/juanmendozaca-netizen/plataf-de-cursos-backend.git',
    featured: true,
  },
  {
    slug: 'crud-equipos-mineros',
    title: 'Gestion Equipos Mineros',
    description: 'Aplicación móvil Flutter para gestión de flota de equipos mineros con base de datos SQLite local, búsqueda, filtros por estado y generación automática de códigos por tipo de equipo.',
    // Reducido el ancho a 800px y la calidad a 75
    image: '/equipos_minero.png',
    technologies: ['Flutter', 'Dart', 'SQLite', 'sqflite'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/juanmendozaca-netizen/Flutter_equipos_mineros.git',
    featured: true,
  },
  {
    slug: 'gestion-joyeria',
    title: 'Sistema de Gestión de Joyería',
    description: 'Plataforma fullstack e-commerce con autenticación por Token y sesiones, pasarela de pagos Stripe con tarjeta, historial de órdenes por usuario y sincronización en tiempo real con React Query y optimistic updates.',
    // ¡De 2106px lo bajamos a 800px! Mucho más ligero
    image: '/gest_joyeria.png',
    technologies: ['React', 'Django', 'Stripe', 'React Query', 'SQLite'],
    githubUrl: 'https://github.com/juanmendozaca-netizen/gestion_joyeria.git',
    featured: true,
  },
];

export const personalInfo = {
  name: 'Juan Carlos Mendoza Calderon',
  shortName: 'Juan Carlos',
  title: 'Full Stack Developer',
  description: 'Construyo aplicaciones web y móviles completas, del backend al frontend',
  email: 'juanmendozacalderon17@gmail.com',
  github: 'https://github.com/juanmendozaca-netizen',
  linkedin: 'https://www.linkedin.com/in/juancarlos-mendozacalderon11',
  siteUrl: 'https://app-optimizacion-seo.vercel.app',
  // ¡De 1740px a solo 150px! Tu avatar cargará instantáneamente en el móvil
  avatar: '/foto_cv_oficial.png',
};