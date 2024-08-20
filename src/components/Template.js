import React, {useState, useEffect} from 'react'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {IconButton} from "@material-ui/core"
import UnFoldMoreIcon from "@material-ui/icons/UnfoldMore"
import "./Template.css"

import blank from "../assets/GreenSign.webp"
import uuid from "react-uuid"
import {useHistory} from 'react-router-dom';
import axios from "axios";

function Template(){
    const history = useHistory();

    const createForm = () => {


        var create_form_id = uuid();
        console.log(create_form_id)

        history.push("/form/" + create_form_id)

        var questions_list= [{questionText: "Question", questionType: "radio", options: [{optionText: "Option 1"}], open: true, required: false}]
            axios.post(`http://localhost:9000/add_questions/${create_form_id}`,{
                "document_name": "untitled_form",
                "doc_desc": "Add Description",
                "questions": questions_list,
            })
    }

    return(
        <div className="template_section">
            <div className= "template_top">
                <div className= "template_left">
                    <span style={{fontSize: "16px", color: "#202124"}}>Start New Form</span>
                </div>
                <div className= "template_right">
                <div className= "gallery_button">
                    Template gallery
                    <UnFoldMoreIcon />
                </div>
                <IconButton>
                    <MoreVertIcon fontSize= "small"/>
                </IconButton>
                </div>
            </div>
                <div className= "template_body">
                    <div className= "card" onClick={createForm}>
                        <img src={blank} alt= "no image" className= "card_image"/>
                        <p className= "card_title">Blank</p>
                    </div>
                </div>
        </div>
    )
}

export default Template;