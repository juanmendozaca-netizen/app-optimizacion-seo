import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo para colaboraciones o proyectos.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
  Contacto
</h1>

      <p className="text-lg text-gray-700 mb-4">
        Puedes comunicarte conmigo mediante los siguientes medios:
      </p>

      <div className="space-y-3">
      <p className="text-gray-800">
  <strong>Email:</strong> {personalInfo.email}
</p>

<p className="text-gray-800">
  <strong>GitHub:</strong> {personalInfo.github}
</p>

<p className="text-gray-800">
  <strong>LinkedIn:</strong> {personalInfo.linkedin}
        </p>
        
      </div>
    </div>
  );
}