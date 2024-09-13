import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import React, { useState } from "react";
import { useSelector } from "react-redux";


const Edit = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(store=>store.auth);
  const [input, setInput] = useState({
  fullname:user?.fullname,
  email:user?.email,
  phoneNumber : user?.phoneNumber,
  bio:user?.profile?.skills?.map(skill => skill),
  file:user?.profile?.resume
  })
  return (
    <div>
     <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
      <DialogHeader>
        <DialogTitle>Update</DialogTitle>
      </DialogHeader>
        <form >
          <div className="grid gap-4 py-2">
        <div className=" grid grid-cols-4 items-center gap-4 ">
          <Label htmlFor="name" className="text-right">Name</Label>
          <Input id="name" name="name" className="col-span-3" value={input.fullname}/>
        </div>
        <div className=" grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">Email</Label>
          <Input id="email" name="email" className="col-span-3"  value={input.email}/>
        </div>
        <div className=" grid grid-cols-4 items-center gap-4">
          <Label htmlFor="number" className="text-right">Number</Label>
          <Input id="number" name="number" className="col-span-3"  value={input.phoneNumber}/>
        </div>
        <div className=" grid grid-cols-4 items-center gap-4">
          <Label htmlFor="bio" className="text-right">Bio</Label>
          <Input id="bio" name="bio" className="col-span-3"  value={input.bio}/>
        </div>
        <div className=" grid grid-cols-4 items-center gap-4">
          <Label htmlFor="skills" className="text-right">Skills</Label>
          <Input id="skills" name="bio" className="col-span-3"  value={input.skill}/>
        </div>
        {/* <div className=" grid grid-cols-4 items-center gap-4">
          <Label htmlFor="education" className="text-right">Education</Label>
          <Input id="education" name="bio" className="col-span-3"  value={input.fullname}/>
        </div> */}
   
        </div>
      
          </form>
          <DialogFooter>
        {
    loading ? <button className='mr-2 h-[40px] w-[14rem] bg-emerald-500   border-none rounded-lg font-semibold text-white'>please wait...</button>
    :  <button type="submit"  className="mt-3  bg-emerald-500 h-[40px] w-[23rem] border-none rounded-lg font-semibold text-white">Update Profile</button> 
  }
        </DialogFooter>
   
      </DialogContent>
     </Dialog>
  
    </div>
  );
};

export default Edit;
