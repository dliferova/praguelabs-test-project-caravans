import React from "react";
import Image from 'next/image';

function Logo() {
    return (
       <Image
           src="/prague-labs-logo.svg"
           alt="company logo"
           width="201"
           height="36"
       />
    );
}

export default Logo;
