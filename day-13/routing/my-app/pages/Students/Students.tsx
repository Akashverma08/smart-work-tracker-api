"use client";

import { useRouter } from "next/navigation";
export default function Students() {
    const router = useRouter();
    return (
        <div>
            <h1>Students</h1>
            <hr></hr>
            <button onClick={() => router.back()}>Back</button>
            <button onClick={() => router.forward()}>
                Forward
            </button>
        </div>
    )
}