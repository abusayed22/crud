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
            setAllStudents([...allStudents,newStudent])
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
        const toBeEdit = allStudents.find((student) => student.id === id)
        setEditable(toBeEdit)
        setStudent(editable.name)
        setIsStatus(true)
    }
    
    const upateHandler = (e) => {
        e.preventDefault();
        setIsStatus(false);
        if(student) {
            setAllStudents(allStudents.map((single) => {
                if(single.id === editable.id ) {
                    single.name = student
                }

                return single
            }))
        }
        setStudent(" ")
        setEditable(null)
        if(student === " ") {
            alert("input was empty")
        }
    }
    

            // present Handler

    const presentHanlder = (presentId) => {
        const present = allStudents.find( item => item.id = presentId)
            if(present.isPresent === true) {
                alert('The student is already in the present list')
            } else if (present.isPresent === false) {
                alert('The student already in the absent list')
            } else if (present.isPresent === undefined) {
                setAllStudents(allStudents.map((person) => {
                    if(person.id === presentId) {
                        person.isPresent = true
                        
                    }
                    
                    return person
                    
                }))

            } else{}
            console.log('i am present but ' + (present.isPresent));
            console.log(present.id);
        
    }
    const absentHanlder = (id) => {
        const present = allStudents.find( item => item.id = id)
            if(present.isPresent === true) {
                alert('The student is already in the present list')
            } else if (present.isPresent === false) {
                alert('The student already in the absent list')
            } else if (present.isPresent === undefined) {
                setAllStudents(allStudents.map((person) => {
                    if(person.id === id) {
                        person.isPresent = false
                    }
                    return person
                    
                }))
            }
            console.log('i am present but ' + (present.isPresent));
            console.log(present.id);
    }



    const accidentalToggle = (id) => {
       setAllStudents(allStudents.map( single => {
        if(single.id === id){
            single.isPresent = !single.isPresent
        }
        
        return single

       } ))
    }
  return (
    <div style={{marginTop:'20px'}}>
        <form onSubmit={(e) => isStatus? upateHandler(e) : addHandler(e)} action="" style={{display:'flex',justifyContent:'center'}}>
            <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />
            <button type='onSubmit'>{isStatus? 'Update Student':'Add Student'}</button>
        </form>
        <h2 style={{marginTop:'20px',textAlign:'center'}}>All Students</h2>
        <div className="main__allStudents">
            <ol>
                {allStudents.map((single) => (
                    <li>
                        <li key={single.id}>{single.name}</li>
                            <div className="btn__box">
                                <button onClick={() => editableHandler(single.id)}>EDit</button>
                                <button onClick={() => deleteHandler(single.id)}>Delete</button>
                                <button className='present' onClick={() => presentHanlder(single.id)}>present</button>
                                <button className='absent' onClick={() => absentHanlder(single.id)}>Absent</button>
                            </div>
                    </li>
                ))}
            </ol>
        </div>
        <div className='main'>
            <div className="present__main">
                <center><h3>Present Studuents</h3></center>
                <ol> {allStudents.filter( single => single.isPresent === true ).map( item => (
                    <li>
                        <span>{item.name}</span>
                        <button onClick={() => accidentalToggle(item.id)} style={{marginLeft:'20px'}}
                                >Accidental process</button>
                    </li>
                ))}
                </ol>
            </div>
            <div className="absent__main">
            <center><h3>absent Studuents</h3></center>
            <ol> {allStudents.filter( single => single.isPresent === false ).map( item => (
                    <li>
                        <span>{item.name}</span>
                        <button onClick={() => accidentalToggle(item.id)} style={{marginLeft:'20px'}}
                                >Accidental process</button>
                    </li>
                ))}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Home