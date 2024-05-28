'use client'
import {Filter} from "@/app/(protected)/users/Filter";
import {UserTable} from "@/app/(protected)/users/UserTable";
import {useState} from "react";
import {getUserMatch} from "@/actions/user";

export default function User() {
    const [text, setText] = useState('')
    const [users, setUsers] = useState([])

    const handleChange = (newValue) => {
        setText(newValue);
    };
    const handleSearch = (newValue) => {
        getUserMatch(newValue).then(res => {
            setUsers(res)
        })
    };
    return (
        <>
            <Filter users={users.map(u => ({key: u.id, label: u.username, value: u.id}))} text={text} handleChange={handleChange} handleSearch={handleSearch}/>
            <UserTable users={users}/>
        </>
    )
}
