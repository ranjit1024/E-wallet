
import dynamic from 'next/dynamic'
import TransactionSkeleton from "@repo/ui/tranactionScaletor"

const DynamicHeader = dynamic(() => import('./tranaction'), {
  loading: () => <TransactionSkeleton/>,
  
})
 
export default function Home() {
  return <DynamicHeader />
}