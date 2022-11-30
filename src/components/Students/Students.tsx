import React from 'react';

type StudentsInfoType = {
    id: string,
    name: string,
    age: number
}

type StudentsComponentType = {
    infoStudents: Array<StudentsInfoType>
}

const Students: React.FC<StudentsComponentType> = (props) => {

    return (
        <ul>
            {props.infoStudents.map(
                (objectFromInfoStudents, index) => {
                    return <li key={objectFromInfoStudents.id}>{objectFromInfoStudents.age}</li>
                }
            )}
        </ul>
    );
};

export default Students;