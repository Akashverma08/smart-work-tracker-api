import {Student}  from "@/types/student"
const STORAGE_KEY="students";

export default function getStudents(){
    const data= localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) :[];
}


export  function createStudent(student : Student){
    const students=getStudents();

    students.push(student);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(students)
    )


}

export function getStudentById(id :number,data :Student){
    const students=getStudents();

    const editStudents=students.find((stud: Student)=> stud.id===id ? data: students )
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(editStudents)

    )
}


export function updateStudent(id : string, data: Student){
    const students=getStudents();
    const updatedStudents=students.map((student :any)=>
        student.id===id ? data : student
       
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedStudents)
    );
}

export function deleteStudent(id: number){
    const students=getStudents();

    const updatedStudent= students.filter((stud : Student)=> stud.id !== id);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedStudent)
    )
}