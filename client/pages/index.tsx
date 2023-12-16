'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectPage = () => {

    const { push } = useRouter()

    useEffect(()=>{
        push("/home")
    }, [])

    return <p></p>
}

export default RedirectPage;