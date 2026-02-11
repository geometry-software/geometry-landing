import { Type, Code, Database, Box, Layers, Cpu } from "lucide-react";
import { useTranslation } from 'react-i18next'

const technologies = [
  { name: "TypeScript", color: "#3178C6", icon: Type },
  { name: "Angular", color: "#DD0031", icon: Code },
  { name: "React", color: "#61DAFB", icon: Box },
  { name: "React Native", color: "#61DAFB", icon: Layers },
  { name: "Node.js", color: "#339933", icon: Cpu },
  { name: "NestJS", color: "#E0234E", icon: Code },
  { name: "Next.js", color: "#000000", icon: Code },
  { name: "Databases", color: "#F29111", icon: Database },
];

export default function Technologies() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-brand-blue/10 via-brand-orange/10 to-brand-blue/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          {t('technologies.title')}
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          {t('technologies.description')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
          {technologies.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="
                flex flex-col items-center justify-center
                p-6 bg-white rounded-2xl
                shadow-md
                hover:shadow-2xl
                hover:scale-105
                transition-all duration-300
              "
            >
              <Icon size={40} color={color} className="mb-3" />
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
