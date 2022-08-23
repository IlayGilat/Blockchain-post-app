import React from "react";
import { Image } from "@chakra-ui/react";
const NftImage = ({ Name, ImageUrl,boxSize,isChoosen}) => {
  return (
    <div>
    {  
    Name !="" ? (
    <h2 className="font-bold text-center mb-3">{Name}</h2>
    ) : (<></>)
    } 
     <Image borderRadius="3xl" className={`${isChoosen ?`scale-110 ring-4 ring-blue-500	`: ``}`} boxSize={`${boxSize}px`} src={ImageUrl} alt={Name} />
    </div>
  );
};

export default NftImage;
