import React, { useEffect,useState } from "react";

export default function Api() {
    const [data,setData]=useState([{}])
  useEffect(() => {
    async function getData() {
      const api = "https://api.github.com/users/huzaifa-aslam/repos";
      const getdata =await fetch(api)
      const resp=await getdata.json();
      console.log('data',resp)
      setData(resp)
        // .then((resp) => resp.json())
        // .then((res) => console.log(res.confirmed));
    }
    getData()
  }, []);

  return(
    <div>
        {data.map((item,ind)=>{
            return <li key={ind}>{item.name}</li>
        })}
    </div>
  )
}
