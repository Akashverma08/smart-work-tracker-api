'use client'
import {useRouter} from "next/navigation";
 
export default function Home() {
  const router =useRouter();

  return (
    <div >
      <button onClick={()=>router.push("/dashboard")}>Dashboard</button>
      <br>
      </br>
      <button onClick={()=>router.replace("/login")}>Login</button>
            <br>
      </br>
      <button onClick={()=>router.push("/students")}>Students</button>
            <br>
      </br>

      
    </div>
  );
}
