import "../../components-styling/Forms.css";

import React, { useState } from 'react';
import { motion } from "framer-motion";

import EnterPollCard from "./EnterPollCard";
import Age from "./Age";
import VoteChoice from "./VoteChoice";
import ConfirmChoice from "./ConfirmChoice";
import VoteThankYou from "./ThankYou";
import RepeatVote from "./Repeat";


function VotingForm () {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        pollCardNum: "",
        age: 0,
        voteChoice: "",
    });

    const PageDisplay = () => {
        if (page === 0) {
            return <RepeatVote />;
        } 
        
        else if (page === 1) {
            return <EnterPollCard 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}/>;
        } 
        
        else if (page === 2) {
            return <Age 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 
        
        else if (page === 3) {
            return <VoteChoice 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 
        
        else if (page === 4) {
            return <ConfirmChoice 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 
        
        else {
            return <VoteThankYou />;
        }
    };

      return (
        <div className="vote-form">
            <motion.div className="form-container"
                animate={{ scale: 1}}
                initial={{ scale: 0.2}}>
                
                <motion.div  
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 0.2}}
                >
                    {PageDisplay()}
                </motion.div>
                
            </motion.div>
        </div>
      
      );

}

export default VotingForm