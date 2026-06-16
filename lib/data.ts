import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL',
    // Reducido el ancho a 800px y la calidad a 75 (ideal para tarjetas)
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=75',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación y tiempo real',
    // Reducido el ancho a 800px y la calidad a 75
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=75',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos',
    // ¡De 2106px lo bajamos a 800px! Mucho más ligero
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=75',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Juan Carlos',
  title: 'Full Stack Developer',
  description: 'Desarrollador apasionado por crear experiencias web excepcionales',
  email: 'juanmendozacalderon17@gmail.com',
  github: 'https://github.com/juanmendozaca-netizen',
  linkedin: 'https://www.linkedin.com/in/juancarlos-mendozacalderon11',
  siteUrl: 'https://app-optimizacion-seo.vercel.app',
  // ¡De 1740px a solo 150px! Tu avatar cargará instantáneamente en el móvil
  avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?auto=format&fit=crop&w=150&h=150&q=80',
};