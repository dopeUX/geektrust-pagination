import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data : [],
    length:0,
    currentPage:1,
    searchQuery:'',
    selectAll:false,
    selectedItems:[]
}

const appSlice = createSlice({
    name:'appSlice',
    initialState,
    reducers:{
        updateData:(state,action)=>{
            if(action.payload.type==='load'){
              state.data = action.payload.data;
             }
            else if(action.payload.type==='delete'){
              let index = state.data.findIndex(x=>x.id===action.payload.id);  
              state.data.splice(index,1); 
            }
            else if(action.payload.type==='delete-multiple'){
               for(let i=0;i<state.selectedItems.length;i++){
                let index = state.data.findIndex(x=>x.id===state.selectedItems[i]);  
                state.data.splice(index,1);
               }
               state.selectedItems = []; 
            }
        },
        updateLength:(state, action)=>{
            state.length = action.payload;
        },
        updateSelectedItems:(state, action)=>{
            state.selectedItems.push(action.payload);
        },
        updateCurrentPage:(state,action)=>{
            if(action.payload.type==='jump-to-page'){
             state.currentPage = action.payload.page;
            }
            else if(action.payload.type==='prev'){
             state.currentPage--;   
            }
            else if(action.payload.type==='next'){
             state.currentPage++   
            }
        },
        updateIsSelectAll:(state, action)=>{
             state.selectAll = !state.selectAll;
        },
        updateSearchQuery:(state, action)=>{
            state.searchQuery = action.payload;
        }
    }
  
});

export const {updateData, updateLength, updateCurrentPage, updateSearchQuery, updateSelectedItems, updateIsSelectAll} = appSlice.actions;
export default appSlice.reducer;