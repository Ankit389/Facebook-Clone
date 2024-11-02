import React from 'react'
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { UserMinus, UserPlus } from 'lucide-react';
const FriendRequest = () => {
  return (
      <AnimatePresence>
        <motion.div

initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.3 }}
className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
        >

<Avatar className="h-32 w-32 rounded mx-auto mb-4">
        
            <AvatarImage  />
        
            <AvatarFallback className="dark:bg-gray-400">
              
            </AvatarFallback>
          
        </Avatar>
        <h3 className='text-lg  font-semibold  text-center mb-4'> Ankit Pankaj</h3>
        <div className='flex  flex-col  justify-between'>
          <Button  className="bg-blue-600" size="lg" onClick={() => {}}>
            <UserPlus className='mr-4 h-4 w-4'/> Comfirm

          </Button>
          <Button  className="bg-blue-600" size="lg" onClick={() => {}}>
            <UserMinus className='mr-4 h-4 w-4'/> Delete

          </Button>

        </div>

        </motion.div>

      </AnimatePresence>
  )
}

export default FriendRequest
