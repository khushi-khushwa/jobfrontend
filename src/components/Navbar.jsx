import React from "react";
import { Link ,NavLink} from "react-router-dom";
import { Avatar,  AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button"
import { LogOut, User2 } from "lucide-react";
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  const [nav , setNav] = useState(false);
  
 const NavLinkStyles = ( {isActive}) =>{
  return{
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'black'
  }
 }
  const handleMenu =()=>{
    setNav(!nav)
  }

    const user = false;
  return (
    <>
      <div className="bg-white ">
        <nav>
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16 max-[1340px]:px-12">
          <div>
            <h1 className="text-2xl font-bold">
              {" "}
              Job <span className="text-red-700">Portal</span>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className=" font-bold gap-5 items-center hidden md:flex">
             
                                   <li><NavLink style={NavLinkStyles} to="/">Home</NavLink></li>
                                    <li><NavLink style={NavLinkStyles} to="/jobs">Jobs</NavLink></li>
                                    <li><NavLink style={NavLinkStyles} to="/browse">Browse</NavLink></li>
            </ul>
            {
                !user ?  (
                    <div className="hidden md:block gap-4">
                        <Link to="/login"><button  className="mx-2 bg-slate-100 h-[40px] w-[80px] border-none  rounded-lg font-semibold">Login</button></Link>
                        <Link to="/signup"><button   className="mx-2 bg-green-600 text-white h-[40px] w-[80px] border-none  rounded-lg font-semibold ">SignUp</button></Link>
                    </div>
              
                ):(

                
            
            <Popover >
                <PopoverTrigger aschild>
                    <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent  className="w-80">
                    <div className="flex gap-4 ">
                    <Avatar >
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <div>
                    <h1 className="font-bold text-xl">khushi</h1>
                    <p className="text-sm text-muted-foreground">Hi, welcome to job portal</p>
                    </div>
                    </div>
                    <div className="flex flex-col my-2 mx-3 ">
                        <div className="flex items-center">
                            <User2></User2>
                        <Button variant="link">View Profile</Button>
                        </div>
                    
                    <div className="flex items-center">
                        <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                    </div>
                   
                    </div>
                </PopoverContent>
            </Popover>
                )
            }

<button  className="p-2 md:hidden "  onClick={handleMenu}>

{nav ? <RxCross2/>:<FaAlignJustify/>  }

</button>
</div>
</div>
{
  nav ? (
    <>
   
                          <ul className=' flex  flex-col items-center md:hidden gap-3 '>
                          <li><NavLink style={NavLinkStyles} to="/">Home</NavLink></li>
                                    <li><NavLink style={NavLinkStyles} to="/jobs">Jobs</NavLink></li>
                                    <li><NavLink style={NavLinkStyles} to="/browse">Browse</NavLink></li>
  </ul>
     <div className="flex  flex-col items-center md:hidden mt-8">
      <div>
    <Link to="/login"><button  className="mx-2 bg-slate-100 h-[40px] w-[80px] border-2  rounded-lg font-semibold">Login</button></Link>
    <Link to="/signup"><button   className="mx-2 bg-green-600 text-white h-[40px] w-[80px] border-2  rounded-lg font-semibold ">SignUp</button></Link>
    </div>
</div>
</>
 ) : null
}

        
      </nav>
      </div>
    </>
  );
};

export default Navbar;
