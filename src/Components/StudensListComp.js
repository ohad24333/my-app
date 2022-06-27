import React from 'react';
import StudentComp from './StudentComp';

function StudentsListComp(props) {
    return (  
        <>
            <ul>
                {
                    props.students.map((s) => (
                        <StudentComp studentId = {s.studentId} studentName = {s.studentName} studentGrade = {s.studentGrade}></StudentComp>
                    ))
                }
            </ul>
        </>
    );
}

export default StudentsListComp;