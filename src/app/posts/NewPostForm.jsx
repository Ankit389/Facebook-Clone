import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Separator } from "@radix-ui/react-select";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon, Laugh, Video, Plus, X } from "lucide-react";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const NewPostForm = ({ isPostFormOpen, setIsPostFormOpen }) => {
  const [filePreview, setFilePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleEmojiClick = (emojiObject) => {
    setPostContent((prev) => prev + emojiObject.emoji);
  };

  return (
    <Card>
      <CardContent className="p-4">
       
        <Avatar >
          <AvatarImage />
          <AvatarFallback className="dark:bg-gray-400" >A</AvatarFallback>
        </Avatar>
        
        <Dialog open={isPostFormOpen} onOpenChange={setIsPostFormOpen}>
          <DialogTrigger asChild>
            <Input
              placeholder={`What's on your mind`}
              readOnly
              className="cursor-pointer rounded-full h-12 dark:bg-[rgb(58,59,60)] placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </DialogTrigger>

          <Separator className="my-2 dark:bg-slate-400" />

          <div className="flex justify-between">
            <div className="flex items-center">
              <ImageIcon className="h-5 w-5 text-green-500 mr-2" />
              <span className="dark:text-white">Photo</span>
            </div>
            <div className="flex items-center">
              <Video className="h-5 w-5 text-red-600 mr-2" />
              <span className="dark:text-white">Video</span>
            </div>
            <div className="flex items-center">
              <Laugh className="h-5 w-5 text-orange-500 mr-2" />
              <span className="dark:text-white">Feeling</span>
            </div>
          </div>

          <DialogContent className="sm:max-w-[525px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-center">Create Post</DialogTitle>
            </DialogHeader>
            <Separator />
            <div className="flex items-center space-x-3 py-4">
              <Avatar className="h-10 w-10">
                <AvatarImage />
                <AvatarFallback className="dark:bg-gray-400">D</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Ankit Pankaj</p>
              </div>
            </div>
            <Textarea
              placeholder={`What's on your mind, Ankit?`}
              className="min-h-[180px] text-lg"
            />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="relative mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                >
                  <X className="h-4 w-4" />
                </Button>
                {filePreview ? (
                  fileType.startsWith("image") ? (
                    <img src={filePreview} alt="preview_img" className="w-full h-auto max-h-[300px] object-cover" />
                  ) : (
                    <video src={filePreview} className="w-full h-auto max-h-[300px] object-cover" controls />
                  )
                ) : (
                  <>
                    <Plus className="h-12 w-12 text-gray-400 mb-2 cursor-pointer" />
                    <p className="text-center text-gray-500">Add Photos/Videos</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="bg-gray-200 dark:bg-muted p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">Add Your Post</p>
              <div className="flex space-x-5">
                <div className="flex items-center">
                  <ImageIcon className="text-green-600 h-5 w-5" />
                </div>
                <div className="flex items-center">
                  <Video className="text-red-600 h-5 w-5" />
                </div>
                <div className="flex items-center">
                  <Laugh
                    className="text-orange-600 h-5 w-5"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  />
                </div>
              </div>
            </div>
            {showEmojiPicker && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10"
                  onClick={() => setShowEmojiPicker(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Picker onEmojiClick={handleEmojiClick} />
              </motion.div>
            )}
            <div className="flex justify-end mt-4">
              <Button className="bg-blue-700 text-white">Post</Button>
            </div>
          </DialogContent>
        </Dialog>
     
      </CardContent>
      
    </Card>
  );
};

export default NewPostForm;
