'use client'
import {useEffect, useState} from "react";
import {getUserMatch, getUsers} from "@/actions/user";
import {Filter} from "@/app/(protected)/users/Filter";
import {UserTable} from "@/app/(protected)/users/UserTable";

export default function User() {
    const [users, setUsers] = useState([])

    const [value, setValue] = useState([]);

    useEffect(() => {
        getUsers().then(u => setUsers(u))
    }, [])

    useEffect(() => {
        if(value.length) {
            getUserMatch(value[0]["label"]).then(u => {
                setUsers(u)
            })
        }
    }, [value])

    return (
        <>
            <Filter
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
            />
            <UserTable users={users}/>
        </>
    )
}
