import React, {useState, useEffect} from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {IconButton} from '@material-ui/core';
import doc_image from "../assets/CSUSexample.png"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import "./Mainbody.css";

import axios from "axios";
import { NavigateBefore } from '@material-ui/icons';
import {useHistory} from "react-router-dom";

function Mainbody() {

    const history = useHistory();

    function navigate_to(docname){
        var fname= docname.split(".");  //[id ].json => [id, "json"]
        history.push("/form/" +fname[0])
    }
    const [files, setFiles] = useState([]);

    async function filenames(){
        var request = await axios.get("http://localhost:9000/get_all_filenames")
        let filenames = request.data;
        setFiles(filenames)
    }
    filenames()


    return(
        <div className= "main_body">
            <div className= "mainbody_top">
                <div className= "mainbody_top_left" style={{fontSize: "16px", fontWeight:"500"}}>
                    Recent forms
                </div>
                <div className= "mainbody_top_right">
                <div className= "mainbody_top_center" style= {{fontSize: "14px", marginRight: "125px"}}> Owned by anyone <ArrowDropDownIcon/></div>
                    <IconButton>
                        <StorageIcon style= {{fontSize: "16px", color: "black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style= {{fontSize: "16px", color: "black"}}/>
                    </IconButton>

                </div>
            </div>
            <div className= "mainbody_docs">
                {
                    files.map((ele)=>(
                        <div className= "doc_card" onClick= {()=> {
                            navigate_to(ele)
                        }}>                        
                        <img src={doc_image} className= "doc_image" ></img>
                        <div className= "doc_card_content" >
                        <h5 style= {{overFlow: "ellipsis"}}>{ele ? ele : "Untitled Doc" }</h5>
                            <div className= "doc_content" style={{fontSize: "12px", color: "grey"}}>
                                <div className= "content_left">
                                    <StorageIcon style= {{color: "white", fontSize: "12px", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px"}} /> Opened 2022
                                </div>
                                    <MoreVertIcon style = {{fontSize: "16px", color: "grey"}}/>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Mainbody;