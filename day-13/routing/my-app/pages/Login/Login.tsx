"use client"
import {useRouter} from "next/navigation";
export default function Login(){
    const router=useRouter();
    return(
        <div>
            <h1>Login</h1>
            <button onClick={()=>router.push("/dashboard") }>Button</button>
        </div>
    )
}