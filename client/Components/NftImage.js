import React from "react";
import { Image } from "@chakra-ui/react";
const NftImage = ({ Name, ImageUrl,boxSize }) => {
  return (
    <div>
    {  
    Name !="" ? (
    <h2 className="font-bold text-center mb-3">{Name}</h2>
    ) : (<></>)
    } 
     <Image borderRadius="3xl" boxSize={`${boxSize}px`} src={ImageUrl} alt={Name} />
    </div>
  );
};

export default NftImage;
