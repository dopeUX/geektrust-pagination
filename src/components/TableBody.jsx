import React,{useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData, updateSelectedItems } from "../AppSlice";

export default function TableBody(props){
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const data = useSelector(state=>state.app.data);
  const currentPage = useSelector(state=>state.app.currentPage);
  const searchQuery = useSelector(state=>state.app.searchQuery);
  const selectAll = useSelector(state=>state.app.selectAll);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(()=>{
    ref.current.checked=false;
    setIsSelected(false);
    if(props?.selectAll){
      ref.current.checked=true;
      setIsSelected(true);
    }
  },[data, currentPage, searchQuery, selectAll]);
  
    return (
        <tr className="data-list" bgcolor={isSelected?"#E8F9FD":"#ffffff"}>
        <td> 
        <input ref={ref} type="checkbox" name="select-all"
        className="select-all" onChange={(e)=>{
            setIsSelected(!isSelected);
            if(!isSelected){
               dispatch(updateSelectedItems(props?.item?.id));
            }
        }} 
        id="select-all" />
        </td>
        <td>{props?.item?.name}</td> 
        <td>{props?.item?.email}</td> 
        <td>{props?.item?.role}</td>
        <td className="action-buttons" >
           <img src="./assets/dustbin.png" alt="" width={20} height={20} style={{cursor:'pointer'}} onClick={()=>{
              dispatch(updateData({type:'delete', id:props?.item?.id}));
           }}/>
          </td> 
      </tr>
    )
}