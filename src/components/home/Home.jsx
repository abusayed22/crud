import React, { useState } from 'react'
import "./Home.css"


function Home() {
    const [student,setStudent] = useState(' ');
    const [allStudents,setAllStudents] = useState([]);
    const [editable,setEditable] = useState(null);
    const [isStatus,setIsStatus] = useState(false);


    const addHandler = (e) =>  {
        e.preventDefault();
        if(student) {
            const newStudent ={
                id: Date.now(),
                name:student,
                isPresent : undefined
            }
            setAllStudents([newStudent,...allStudents])
            setStudent(' ')
        } else {
            alert('input was empty')
        }
    }


                   //delete area

    const deleteHandler = (id) => {
        setAllStudents(allStudents.filter(student => student.id !== id))
    }


                //editable area

    const editableHandler = (id) => {
        const toBeEdit = allStudents.find((student) => student.id == id)
        setEditable(toBeEdit)
        setStudent(editable.name)
        setIsStatus(true)
    }
    
    const upateHandler = (e) => {
        e.preventDefault();
        setIsStatus(false);
        if(student) {
            setAllStudents(allStudents.map((single) => {
                if(single.id == editable.id ) {
                    single.name = student
                }

                return single
            }))
        }
        setStudent(" ")
        setEditable(null)
        if(student == " ") {
            alert("input was empty")
        }
    }

  return (
    <div>
        <form onSubmit={(e) => isStatus? upateHandler(e) : addHandler(e)} action="" style={{display:'flex',justifyContent:'center'}}>
            <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />
            <button type='onSubmit'>{isStatus? 'Update Student':'Add Student'}</button>
        </form>
        <h2 style={{marginTop:'20px',textAlign:'center'}}>All Students</h2>
        <div className="main__allStudents">
            <ol>
                {allStudents.map((single) => (
                    <li key={single.id}>
                        {single.name}
                            <button onClick={() => editableHandler(single.id)}>EDit</button>
                            <button onClick={() => deleteHandler(single.id)}>Delete</button>
                            <button>present</button>
                            <button>Absent</button>
                    </li>
                ))}
            </ol>
        </div>
    </div>
  )
}

export default Home