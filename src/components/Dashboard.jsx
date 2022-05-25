import React, { useEffect  } from "react";
import TableBody from "./TableBody";
import {useSelector, useDispatch} from 'react-redux';
import { updateIsSelectAll, updateLength } from "../AppSlice";

export default function Dashboard(){
  const data = useSelector(state=>state.app.data); 
  const currentPage = useSelector(state=>state.app.currentPage);
  const searchQuery = useSelector(state=>state.app.searchQuery);
//   const selectedItems = useSelector(state=>state.app.selectedItems);
  const dispatch = useDispatch();
  const selectAll = useSelector(state=>state.app.selectAll);    

  useEffect(()=>{
    dispatch(updateLength(data.length));
  },[data])

  function loadData(){
    let rows = []; 
    let num = 7*currentPage;
    if(searchQuery===''){
    for(let i=num-7;i<num;i++){
      if(i<data.length){  
        rows.push(data[i]);
      }
    }
    return rows;
  }else{
     return data.filter(x=>
       x.name.toLowerCase().includes(searchQuery.toLowerCase())||x.role.toLowerCase().includes(searchQuery.toLowerCase())||x.email.toLowerCase().includes(searchQuery.toLowerCase())
     ).map((x,i)=>{
         return x;
     }) 
    }
   }
    return(
        <div className="dashboard">
           <table className="data-table" cellSpacing={14}>
               <thead>
               <tr>
                   <th>
                      <input type="checkbox" name="select-all"
                      className="select-all" 
                      id="select-all" onClick={(e)=>{
                         dispatch(updateIsSelectAll(true));
                      }}/> 
                   </th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Role</th>
                   <th>Actions</th>
               </tr>
               </thead>
            
               <tbody>
               {
     
                 loadData().map((x,i)=>{
                     return <TableBody key={i} item={x} isSelected={false} selectAll={selectAll?true:false}/>
                 })
                 
               }
              
               </tbody>
           </table>

        </div>
    )
}