import { getData, getPastData } from "@/lib/spacex";
import LaunchList from "@/components/launches/LaunchList";
import{format} from 'date-fns'

export default async function Home() {
  const data = await getData();
  const pastData = await getPastData();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">🚀 SpaceX Dashboard</h1>
        <p className="text-gray-400 mt-1">Real-time mission tracker</p>
      </div>

      {/* Último lançamento */}
      <div 
       style={{ 
          backgroundImage: `url('/pexels-kaip-1341279.jpg')`,
          backgroundPosition: 'center'
        }}
      className="flex gap-4 border-gray-800 rounded-xl min-h-[10px] ">
        <div style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }} className=" rounded-xl p-5 mb-8">
          <p className=" text-xs uppercase tracking-widest mb-2">Latest Launch</p>
          <h2 className="text-white text-xl font-semibold">{data.name}</h2>
          <p className=" text-sm mt-1">{format(new Date(data.date_utc), 'MMM dd, yyyy')}</p>
        </div>
        <div className="ml-auto rounded-xl p-5 mb-8 flex items-center">
          <img className="w-36 h-36 object-contain" src={data.links.patch.small} alt="" />
        </div>
      </div>

      {/* Lista */}
      <p className="p-2 text-gray-400 text-xs uppercase tracking-widest ">Past Launches</p>
      <LaunchList launches={pastData} />

    </main>
  )
}