import React from 'react';

function StudentComp(props) {

    let style = {};
    let gradeDesc = "";

    if(props.studentGrade < 57){
        style = {color:"red", border:"3px solid red"};
        gradeDesc = "poor";
    } else
    if (props.studentGrade < 76) {
        style = {color:"yellow", border:"3px solid yellow"};
        gradeDesc = "ok";
    } else
    if (props.studentGrade < 86) {
        style = {color:"Orange", border:"3px solid Orange"};
        gradeDesc = "good";
    } else {
        style = {color:"green", border:"3px solid green"};
        gradeDesc = "Excellent";
    }
    

    return (  

        <>
        <p style={style}>
            {`${props.studentId} - ${props.studentName} - ${props.studentGrade} ${gradeDesc}`}
        </p>
        </>
    );
}

export default StudentComp;