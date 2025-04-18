import { p } from 'framer-motion/client'
import dynamic from 'next/dynamic'
import DashboardSkeleton from '@repo/ui/sceleton'

const DynamicHeader = dynamic(() => import('./dashboard'), {
  loading: () => <DashboardSkeleton/>,
  
})
 
export default function Home() {
  return <DynamicHeader />
}