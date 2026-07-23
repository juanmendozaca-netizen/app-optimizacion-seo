import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
  'React & Next.js',
  'JavaScript',
  'Node.js, Express & Laravel',
  'React Native & Flutter',
  'PostgreSQL, MySQL & SQLite',
  'Tailwind CSS',
  'Docker & AWS',
  'Scrum & Metodologías Ágiles',
  'Git & GitHub',
  'Figma',
  ];
  

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre Mí</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
  <div className="relative w-full max-w-[240px] mx-auto md:max-w-none aspect-square rounded-lg overflow-hidden">
    <Image
      src={personalInfo.avatar}
      alt={personalInfo.name}
      fill
      className="object-cover"
      loading="lazy"
      sizes="(max-width: 768px) 240px, 33vw"
    />
  </div>
          </div>
          
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                Soy estudiante del último ciclo de Diseño y Desarrollo de Software en TECSUP, apasionado por crear
  experiencias web y móviles completas, de principio a fin. He construido y desplegado
  varios proyectos full stack desde plataformas web hasta aplicaciones móviles
  aplicando buenas prácticas en cada etapa del desarrollo.
              </p>
              <p>
                 Me caracterizo por el aprendizaje continuo y la adaptabilidad. Disfruto explorando
  nuevas tecnologías y aplicándolas en proyectos reales para seguir creciendo como
  desarrollador full stack.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section con lazy loading implícito */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}