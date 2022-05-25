import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPage, updateData, updateSearchQuery } from "../AppSlice";

export default function Footer(){
  const length = useSelector(state=>state.app.length);
  const dispatch = useDispatch();
  const currentPage = useSelector(state=>state.app.currentPage);

    return (
      <div className="footer">
         <button onClick={()=>{
            dispatch(updateData({type:'delete-multiple'}))
         }}>Delete selected</button>
         
         <div className="page-buttons">
           <button className="prev-button" onClick={()=>{
             if(currentPage!==1){
              dispatch(updateCurrentPage({type:'prev'}))
             }
           }}>Previous</button>
          {
            Array(parseInt(length/7)+1).fill().map((item, index)=>{
                return <button className={index+1===currentPage?'footer-page-button-active':'footer-page-button-inactive'} key={index} onClick={()=>{
                  dispatch(updateCurrentPage({type:'jump-to-page',page:index+1}));
                  dispatch(updateSearchQuery(''));
                }}>{index+1}</button>
            }) 
          }
           <button className="prev-button" onClick={()=>{
             if(currentPage!==parseInt(length/7+1)){
              dispatch(updateCurrentPage({type:'next'}))
             }
           }}>Next</button>
         </div>
      </div>
    )
}