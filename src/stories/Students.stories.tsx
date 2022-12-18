import React from 'react'
import Students from '../components/Students/Students';

export default {
    title: "Students stories",
    component: Students
}

export const StudentsStory = () => {
    let infoStudents =[
            {id:"a", name:"a",age:30},
    {id:"b", name:"a",age:30},
    {id:"c", name:"a",age:30},
    {id:"d", name:"a",age:30},
]
    return <Students
        infoStudents={infoStudents}
    />
};