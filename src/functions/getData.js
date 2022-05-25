import axios from "axios";

export default async function getData(){
   let data = [];
   let response  = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
  
//    console.log(data);
   if(response.status===200){
     data = response.data;
   }else{
     data=[];
   }
   return data;
}