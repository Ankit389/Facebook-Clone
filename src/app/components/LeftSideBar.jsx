import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from '@radix-ui/react-select'
import { Bell, Home, MessageCircle, User, Video } from 'lucide-react'
import React from 'react'


const LeftSideBar = () => {
  return (
    <aside className={`fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0`}>
      <div className='flex flex-col h-full overflow-auto'>
             <nav className='space-y-4 flex-grow'>
                <div className='flex items-center space-x-2 cursor-pointer'>
                <Avatar className="h-8 w-8 ">
                <AvatarImage />
                 <AvatarFallback>A</AvatarFallback>
           </Avatar>
                  <span className='font-semibold'>ANKIT Pankaj</span>
                  
                </div>
               
                    <Button variant="ghost"
                    className="full justify-start "> 
                    <Home className="mr-4"/>Home  

                    </Button>
                    
                    <Button variant="ghost"
                    className="full  justify-start"> 
                    <User className="mr-4"/>Friends  

                    </Button>
                    <Button variant="ghost"
                    className="full   justify-start"> 
                    <Video className="mr-4"/>Video 

                    </Button>
                    
         
                    <Button variant="ghost"
                    className="full   justify-start"> 
                    <MessageCircle className="mr-4"/>Messages 

                    </Button>
                    <Button variant="ghost"
                    className="full  justify-start"> 
                    <User className="mr-4"/>Proflie 

                    </Button>
                    <Button variant="ghost"
                    className="full  justify-start"> 
                    <Bell className="mr-4"/>Notifications

                    </Button>
                   

                 
             </nav>
              {/* Footer section  */}
        <div className='mb-16'>
            <Separator className='my-4'/>
            <div className='flex  items-center space-x-2 cursor-pointer '>
            <Avatar className="h-8 w-8 ">
                <AvatarImage />
                 <AvatarFallback>A</AvatarFallback>
           </Avatar>
                  <span className='font-semibold'>ANKIT PANKAJ</span>
            </div>
            <div className='text-xs text-muted-foreground space-y-1'>
       <p>Privacy · Terms · Advertising ·</p>
       <p>· Meta © 2024</p>
       </div>
        </div>
      
        </div>           
    </aside>
  )
}

export default LeftSideBar
