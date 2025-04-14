import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";

const ContactList = () => {
    const { phoneBook, deleteContact } = usePhoneBookStore();
    const [searchKeyword, setSearchKeyword] = useState("");
    const isMobile = useMediaQuery("(max-width:600px)");

    // 검색 입력 처리
    const handleChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    // 검색어에 따라 필터링된 결과
    const filteredContacts = phoneBook.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div>
            <div className="search-container">
                <SearchIcon className="search-icon"></SearchIcon>
                <input
                    type="text"
                    className="search-input"
                    placeholder="이름으로 검색"
                    value={searchKeyword}
                    onChange={handleChange}
                />
            </div>
            {filteredContacts.length > 0 ? (
                filteredContacts.map((item) => (
                    <div className="contact-item" key={item.id}>
                        <div className="contact-list-info">
                            <p style={{ fontSize: isMobile ? "0.9rem" : "1.1rem" }}>
                                {item.name}
                            </p>
                            <p style={{ fontSize: isMobile ? "0.85rem" : "1rem" }}>
                                {item.phoneNumber}
                            </p>
                        </div>
                        <div>
                            <button onClick={() => deleteContact(item.id)}>삭제</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>검색 결과가 없습니다.</p>
            )}
        </div>
    );
};

export default ContactList;