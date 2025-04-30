import {AnimatePresence, motion } from 'framer-motion';


export default function AlertToast({des}:{
    des:string
}) {
  return (
    <AnimatePresence>
    < motion.div
     initial={{
        y:80,

     }}
     animate={{
        y:0,
        
     }}
     transition={{
        duration:0.3
     }}
     exit={{
      y: 25,
      opacity:0
     }}
     className="flex absolute bottom-3 overflow-hidden right-3 items-start justify-between w-full max-w-md p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg shadow-md">
      {/* Icon & Text */}
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full">
            !
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold">Error</p>
          <p className="text-xs text-red-600">{des}</p>
        </div>
      </div>

      {/* Actions */}
      
    </motion.div>
    </AnimatePresence>
  );
}
