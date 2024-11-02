"use client"

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react';
const VideoCard = () => {
  return (
   <motion.div
   
   initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[rgb(36,37,38)] rounded-lg shadow-lg overflow-hidden mb-4"
   >
     <div>
<div  className='flexx  items-center   justify-between mb-4 px-4  mt-4'>
 <div className='flex  items-center'>
     <Avatar className="h-10 w-10 rounded  mr-3">
              <AvatarImage />
                 <AvatarFallback  className="dark:bg-gray-500">A</AvatarFallback>
             </Avatar>

   <div>
    <p className='font-semibold dark:text-white'>Ankit pankaj</p>
   </div>


   <div className="flex items-center   text-gray-500  dark:text-gray-500">
    <Clock  className='h-4 w-4 mr-1'/>
    <span className='text-sm'>10/11/2025</span>

   
 </div>
 </div>
 

</div>   



     </div>
   </motion.div>
  )
}

export default VideoCard
