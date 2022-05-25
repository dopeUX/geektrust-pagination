import React from "react";
import { updateSearchQuery } from "../AppSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Header(){
    const dispatch = useDispatch();
    const query = useSelector(state=>state.app.searchQuery);

    return(
        <div className="header">
            <input type="text" className="header-search" 
            value={query} placeholder="search by name, email or role" onChange={(e)=>{
                dispatch(updateSearchQuery(e.currentTarget.value));
            }}/>
        </div>
    )
}