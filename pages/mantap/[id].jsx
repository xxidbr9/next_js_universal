import React from "react";
import { useRouter } from "next/router";

const Mantap = () => {
    const { id } = useRouter().query ;
    return <div>ini {id}</div>;
};

export default Mantap;
