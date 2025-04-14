import React from 'react';
import { create } from 'zustand';

const UsePhoneBookStore = create((set) => ({
    phoneBook: [],
    addContact: (name, phoneNumber) =>
        set((state) => ({
            phoneBook: [
                ...state.phoneBook,
                { id: Date.now(), name, phoneNumber }
            ],
        })),
}));

export default UsePhoneBookStore;
