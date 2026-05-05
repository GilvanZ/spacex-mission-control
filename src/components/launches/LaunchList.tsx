'use client';

import LaunchCard from './LaunchCard';
import { useState } from 'react';
import { Launch } from '@/lib/spacex'

//para criar uma funcao com parametro, a gente precisa dizer o que esse parametro vai receber
// no caso eu crio uma interface para os parametros, e dito quais sao as props dele
// aqui eu peguei as props que ja passei anteriormente no spacex.ts na pasta de API
interface launcheProps{
    launches: Launch[]
}

export default function LaunchList ({launches}:launcheProps){
    const [page, setPage] = useState(0)
    const [selected, setSelected] = useState<Launch | null>(null)
    return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
    {/* coluna esquerda — lista */}
    <div className='sticky top-4 h-[600px] min-w-0'>
      {launches.slice(page * 5, page * 5 + 5).map((i) =>
        <LaunchCard
          key={i.id}
          launch={i}
          onSelect={(launch) => setSelected(launch)}
        />
      )}
        <div className="flex gap-1 justify-center mt-4">
          <button 
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="rounded-X1 bg-gray-800 text-white px-4 py-2 rounded mt-4 text-gray-600/25 dark:text-sky-400/25' disabled:opacity-30">
            Prev
          </button>

          <button 
            onClick={() => setPage(page + 1)}
            disabled={(page + 1) * 5 >= launches.length}
            className="rounded-X1 bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700 transition-colors disabled:opacity-30 ">
            Next
          </button>
        </div>
    </div>

    {/* coluna direita — painel de detalhes */}
    <div className='w-90 min-w-0 sticky top-4 bg-gray-900/60 backdrop-blur-sm rounded-xl p-2'>
      {selected ? (
        <div className="w-full overflow-hidden">
            <div 
                className="relative rounded-xl overflow-hidden relative rounded-xl overflow-hidden h-[300px]"
                style={{ 
                    backgroundImage: `url(${selected.links.patch.large})`, 
                    backgroundSize: 'contain', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat' 
                }}
                >
            </div>
            <div className=" relative z-10 p-6 min-h-[300px]" >
                <p className="text-white text-3xl font-bold">{selected.name}</p>
                <p className="text-gray-400 mt-2">{new Date(selected.date_utc).toLocaleDateString()}</p>
                <p className="text-gray-400 mt-1">Rocket ID: {selected.rocket}</p>
                <p className="text-gray-400 mt-1">{selected.launch_site}</p>
                <p className="text-gray-400 mt-1">{selected.details}</p><br/>
                {selected.success?(
                  <p className="text-green-300">
                    Success
                  </p>
                ):<p className="text-red-300">
                    Failure
                  </p>}
            </div>
        </div>
      ) : (
        <p className="text-gray-500">Select a mission</p>
      )}
    </div>

  </div>
)}