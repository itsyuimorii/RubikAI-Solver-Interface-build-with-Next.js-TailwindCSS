import React from 'react';
import Link from 'next/link';

export default function Description() {
    return (
     <div className="min-h-screen bg-[#d4d1c9] text-black">
      <div className="container mx-auto py-10 grid grid-rows-3 gap-10">
        <header className="row-span-1 grid grid-cols-1 lg:grid-cols-2 items-start lg:items-end">
          <h1 className="text-6xl font-bold">Expertise</h1>
          <ul className="mt-10 lg:mt-0 lg:text-right space-y-2">
            <li className="text-5xl font-bold">1. Stratégie</li>
            <li className="text-5xl text-[#b3b1a6]">2. Création publicitaire</li>
            <li className="text-5xl text-[#b3b1a6]">3. Média</li>
            <li className="text-5xl text-[#b3b1a6]">4. Données et technologies</li>
            <li className="text-5xl text-[#b3b1a6]">5. Contenu et réseaux sociaux</li>
            <li className="text-5xl text-[#b3b1a6]">6. Design et image de marque</li>
            <li className="text-5xl text-[#b3b1a6]">7. Production</li>
          </ul>
        </header>

        <section className="row-span-2">
          <p className="text-lg max-w-lg">
            Connaître la cible dans ses moindres détails et le contexte dans son ensemble. Connaître les nouvelles tendances, sans oublier celles qui perdurent. Connaître ce qui forge la culture, autant que ce qui forme les comportements. Pour offrir des solutions d’impact à nos clients, nous développons une connaissance précise et méthodique de leur univers et de leurs publics.
          </p>
        </section>
         
         </div>
        </div>
     
    )
}
