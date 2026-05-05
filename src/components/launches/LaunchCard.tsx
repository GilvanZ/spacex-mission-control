import{format, set} from 'date-fns'
import { useState } from 'react'
import { Launch } from '@/lib/spacex'

interface LaunchCardProps {
  launch: Launch
  onSelect: (launch: Launch) => void
}
const imgNotFound = "https://via.placeholder.com/150?text=No+Image"


export default function LaunchCard({ launch, onSelect }: LaunchCardProps) {
    const [rocketId, setRocketId] = useState(5)
    return (
        <div onClick={() => onSelect(launch)} className=" h-24 overflow-hidden h2 cursor-pointer bg-gray-900 border border-gray-800 rounded-xl p-4 m-2 hover:border-gray-600 transition-all">
            <div className="flex items-center gap-4">
                {/* patch da missão */}
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={launch.links.patch.small ?? imgNotFound} />
                </div>
                {/* infos */}
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">{launch.name}</h3>
                    <p className="text-gray-400 text-xs mt-1">{format(new Date(launch.date_utc), "dd/MM/yyyy")}</p>
                    <p className="text-gray-700 text-xs mt-1">{launch.rocket}</p>
                </div>
            </div>
        </div>
    )
}