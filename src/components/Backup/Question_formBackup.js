import React, {useState, useEffect} from 'react'

import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BsPatchQuestion, BsTrash} from "react-icons/bs"
import {IconButton} from '@material-ui/core';
import FilterNameIcon from '@material-ui/icons/FilterNone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {BSFileText} from 'react-icons/bs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import {FcRightUp} from "react-icons/fc";
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Typography} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import "./Question_form.css"

function Question_form(){
    const [questions, setQuestions] = useState(
        [{questionText: "Which class is this for ? ", 
        questionType: "radio", 
        options : [
            {optionText: "CSC60"},
            {optionText: "CSC130"},
            {optionText: "CSC131"},
            {optionText: "CSC35"}
        ],
    answer: false,
    answerKey= "",
    points: 0,
    open: true,
    required: false}]
    )

    function changeQuestion(text, i){
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion)
    }

    function changeOptionValue(text, i, j){
        var optionsQuestion = [...questions];
        optionsQuestion[i].options[j].optionText = text;

        setQuestions(optionsQuestion);
        console.log(optionsQuestion)
    }

    function addQuestionType(i, type){
        let qs = [...questions];
        console.log(type)
        qs[i].questionType= type;

        setQuestions(qs);
    }

    function removeOption(i, j){
        var RemoveOptionQuestion = [...questions];
        if (RemoveOptionQuestion[i].options.length > 1){
            RemoveOptionQuestion[i].options.splice(j, 1);
            setQuestions(RemoveOptionQuestion)
            console.log(i+ "__" + j);
        }
    }

    function addOption(i){
        var optionsOfQuestion = [...questions];
        if (optionsOfQuestion[i].options.length < 5){
            optionsOfQuestion[i].options.push({optionText: "Option " + (optionsOfQuestion[i].options.length + 1)})
        } else {
            console.log("Max 5 options ");
        }
        setQuestions(optionsOfQuestion)
    }

    function copyQuestion(i){
        let qs = [...questions]
        var newQuestion = qs[i]
        setQuestions([...questions, newQuestion])
    }


    function deleteQuestion(i){
        let qs = [...questions];
        if (questions.length > 1){
            qs.splice(i, 1);
        }
        setQuestions(qs)
    }

    function requiredQuestion(i){
        var reqQuestion = [...questions];
            reqQuestion[i].required = ! reqQuestion[i].required
        console.log(reqQuestion[i].required+ " "+i)
        setQuestions(reqQuestion)
    }

    function addMoreQuestionField(){
        setQuestions([...questions,
            {questionText: "Question", questionType: "radio", options: [{optionText: "Option 1"}], open: true, required: false}]
        );
    }

    function setOptionAnswer(ans, qno){
        var Questions = [...questions];
            Questions[qno].answerKey = ans;
        
        setQuestions(Questions)
        console.log(qno+" "+ans)
    }

    function setOptionPoints(points, qno){
        var Questions = [...questions];
            Questions[qno].points = points;

        setQuestions(Questions)
        console.log(qno+" "+points)
    }
    
    function doneAnswer(i){
        var answerOfQuestion = [...questions];
            answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        
        setQuestions(answerofQuestion)
    }

    function addAnswer(i){
        var answerOfQuestion = [...questions];
            answerofQuestion[i].answer = !answerofQuestion[i].answer;

        setQuestions(answerOfQuestion)
    }

    function questionsUI() {
        return questions.map((ques, i)=>(
            <div>
            <Accordion expanded= {questions[i].open} className= {questions[i].open ? 'add_border' : ""}>

                <AccordionSummary aria-controls= "panel1a-content" id= "panel1a-header"  elevation= {1} style= {{width: '100%'}}>
                    { !questions[i].open ? ( //remove ! to show 

                    <div className= "saved_questions">
                    <Typography  style={{fontSize:"15px",fontWeight:"400",letterSpacing: '.1px',lineHeight:'24px',paddingBottom:"8px"}} >{i+1}.  {ques.questionText}</Typography>
    
                    {ques.options.map((op, j)=>(

                    <div key= {j} >
                        <div style= {{display: 'flex',}}>
                        <FormControlLabel style= {{marginLeft: "5px", marginBottom: "5px"}} disabled control= {<input type= {ques.questionType}
                        color= "primary" style= {{marginRight: '3px', }} required= {ques.type}/>} label = {
                            <Typography style = {{fontFamily: 'Roboto, Arial, sans-serif',                                    
                                fontSize: '13px',
                                fontWeight: '400',
                                letterSpacing: '.2px',
                                lineHeight: '20px',
                                color: '#202124'}}>
                                {ques.options[j].optionText}
                            </Typography>
                            } />
                        </div>
                                        
                    </div>
                                
                    ))}
                    </div>
                    ): ""}

                    </AccordionSummary>
                    <div className= "question_boxes">
                        {!questions[i].answer?(
                        <AccordionDetails className= "add_question">
                            <div>
                                <div className= "add_question_top">
                                    <input type= "text" className= "question" placeholder= "Question" value= {ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}}></input>
                                    <CropOriginalIcon style= {{color: "#5f6368"}} />
                                    <Select className= "select" style= {{color: "#5f6368", fontSize: "13px"}} >
                                        <MenuItem id= "text" value= "text" onClick= {()=>{addQuestionType(i, "text")}}> <SubjectIcon style= {{marginRight: "10px"}} /> Paragraph </MenuItem>
                                        <MenuItem id= "checkbox" value= "Checkbox" onClick= {()=>{addQuestionType(i, "checkbox")}}> <CheckBoxIcon style= {{marginRight: "10px", color: "#70757a"}} checked/> Checkboxes</MenuItem>
                                        <MenuItem id= "radio" value= "Radio" onClick= {()=>{addQuestionType(i, "radio")}}> <Radio style= {{marginRight: "10px", color: "#70757a"}} checked/> Multiple Choice</MenuItem>
                                    </Select>
                                </div>
                                {ques.options.map((op, j)=> (
                                    <div className= "add_question_body" key={j}>
                                        {
                                            (ques.questionType!=="text") ?
                                            <input type= {ques.questionType} style= {{marginRight: "10px"}}/> :
                                            <ShortTextIcon style= {{marginRight: "10px"}} />
                                        }
                                    
                                        <div >
                                            <input type= "text" className= "text_input" placeholder= "option" value= {ques.options[j].optionText} onChange= {(e)=>{changeOptionValue(e.target.value, i, j)}}></input>
                                        </div>

                                        <CropOriginalIcon style= {{color: "#5f6368"}}/>

                                        <IconButton aria-label= "delete" >
                                            <CloseIcon onClick={()=>{removeOption(i, j)}}/>
                                        </IconButton>
                                    </div>

                                ))}
                                    {ques.options.length < 5 ? (
                                        <div className = "add_question_body">
                                            <FormControlLabel disabled control= {
                                            (ques.questoinType !== "text") ?
                                            <input type= {ques.questionType} color= "primary" inputProps= {{'aria-label': 'secondary checkbox' }}
                                                        style= {{marginLeft: "10px", marginRight: "10px"}} disabled /> :
                                            <ShortTextIcon style = {{marginRight: "10px"}} />

                                            } label= {
                                            <div>
                                                <input type= "text" className= "text_input" style= {{fontSize: "13px", width: "60px"}} placeholder= "Add other"></input>
                                                <Button size= "small" onClick={()=>{addOption(i)}} style= {{textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: 600}}>Add Option</Button>
                                            </div>
                                            } />
                                        </div>
                                    ): ""}



                                <div className= "add_footer">
                                    <div className= "add_question_bottom_left">
                                    
                                    <Button size= "small" style= {{textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600"}} onClick= {()=>{addAnswer(i)}}>
                                        <FcRightUp style= {{border: "2px solid #4285f4", padding: "2px", marginRight: "8px"}} /> Answer key </Button>
                                    </div>
                                    <div className= "add_question_bottom">
                                        <IconButton aria-label= "Copy" onClick={()=>{copyQuestion(i)}}>
                                            <FilterNameIcon />
                                        </IconButton>

                                        <IconButton aria-label= "Delete" onClick={()=>{deleteQuestion(i)}}>
                                            <BsTrash />
                                        </IconButton>
                                            <span style= {{color: "#5f6368", fontSize: "13px"}}>Required </span> <Switch name= "checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} checked= {ques.required}/>
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>):(

                    <AccordionDetails className= "add_question" >
                        <div className= "top_header">
                            Choose Correct Answer
                        </div>
                        <div >
                            <div className= "add_question_top">
                                <input type= "text" className= "question" placeholder= "Question" value= {ques.questionText} disabled />
                                <input type= "number" className= "points" min= "0" step= "1" placeholder= "0" onChange={(e)=>{setOptionPoints(e.target.value, i)}} />
                            </div>
                            {ques.options.map((op,j) =>(
                                <div className= "add_question_body" key={j} style= {{marginLeft: "8px", marginBottom: "10px", marginTop:"5px"}}>
                                    <div key = {j}>
                                        <div style= {{display: 'flex'}} className="">
                                            <div className= "form-check">
                                                <label style= {{fontSize: "13px"}} onClick= {()=>{setOptionAnswer(ques.options[j].optionText, i)}}>
                                                {(ques.questionType != "text") ?
                                                    <input
                                                    type= {ques.questionType}
                                                    name= {ques.questionText}

                                                    value= "option3"
                                                    className= "form-check-input"
                                                    required= {ques.required}
                                                    style= {{marginRight: "10px", marginBottom: "10px", marginTop: "5px"}}
                                                    /> : <ShortTextIcon style= {{marginRight: "10px"}} />}

                                            {ques.options[j].optionText}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                         ))}
                            <div className= "add_question_body">
                                <Button size= "small" style= {{textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600"}}>
                                    <BsFileText style= {{fontSize: "20px", marginRight: "8px"}}/> Add Answer Feedback </Button>
                            </div>
                            <div className= "add_question_bottom">
                                <Button variant= "outlined" color= "primary" style= {{textTransfomr: 'none', color: "#f285f4", fontSize: "12px", marginTop:"12px", fontWeight: "600"}}
                                onClick={()=>{doneAnswer(i)}}>Done</Button>
                            </div>
                        </div>
                        
                    </AccordionDetails>
        )}

                        <div className= "question_edit">
                                <AddCircleOutlineIcon onClick={addMoreQuestionField} className= "edit"/>
                                <OndemandVideoIcon className= "edit"/>
                                <CropOriginalIcon className= "edit"/>
                                <TextFieldsIcon className= "edit" />
                        </div>
                    </div>
            </Accordion>
            </div>
        ))
    }

    return(
        <div>
            <div className= "question_form">
                <br></br>
                <div className= "section">
                    <div calssName= "question_title_section">
                        <div className= "question_form_top">
                            <input type= "text" className= "question_form_top_name" style= {{color: "black"}} placeholder= "Untitled Document"></input>
                            <input type= "text" className= "question_form_top_desc" placeholder= "Form Description"></input>
                        </div>
                    </div>

                    {questionsUI()}
                </div>
            </div>

        </div>
    )
}

export default Question_form;