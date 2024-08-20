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
                        
                        <Button size= "small" style= {{textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600"}}>
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
            </AccordionDetails>

            <div className= "question_edit">
                    <AddCircleOutlineIcon onClick={addMoreQuestionField} className= "edit"/>
                    <OndemandVideoIcon className= "edit"/>
                    <CropOriginalIcon className= "edit"/>
                    <TextFieldsIcon className= "edit" />
            </div>
        </div>
</Accordion>
</div>
