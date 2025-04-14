import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import usePhoneBookStore from "../stores/usePhoneBookStore.js";

const ContactForm = () => {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const {addContact} = usePhoneBookStore()

    const handleAddContact=()=>{
        if (!name.trim() || !phoneNumber.trim()) return
        // 연락처를 추가
        addContact(name, phoneNumber)
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <TextField id="name" label="이름" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField id="phone-number" label="전화번호" variant="outlined" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            <Button variant="outlined" size="large" onClick={handleAddContact}>추가</Button>
        </Box>
    );
};

export default ContactForm;