import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ThankYou.css";

export default function ThankYou(){

  const { state } = useLocation();
  const navigate = useNavigate();
  const amount = state?.final;

  const [orderId,setOrderId]=useState("");

  /* generate animated order id */
  useEffect(()=>{
    let id="SM";
    let count=0;
    const interval=setInterval(()=>{
      id+=""+Math.floor(Math.random()*10);
      setOrderId(id);
      count++;
      if(count===8) clearInterval(interval);
    },120);
  },[]);


  /* particles + emojis */
  useEffect(()=>{

    /* gravity particles */
    for(let i=0;i<40;i++){
      const p=document.createElement("div");
      p.className="particle";
      p.style.left=Math.random()*100+"vw";
      p.style.animationDuration=2+Math.random()*3+"s";
      document.body.appendChild(p);
      setTimeout(()=>p.remove(),5000);
    }

    /* floating emojis */
    const emojis=["🎉","💖","✨","🎊","🔥","💎","🚀"];
    for(let i=0;i<25;i++){
      const e=document.createElement("div");
      e.className="emoji";
      e.innerText=emojis[Math.floor(Math.random()*emojis.length)];
      e.style.left=Math.random()*100+"vw";
      e.style.fontSize=(20+Math.random()*30)+"px";
      e.style.animationDuration=(4+Math.random()*5)+"s";
      document.body.appendChild(e);
      setTimeout(()=>e.remove(),9000);
    }

  },[]);


  return(
    <div className="thankPage">
        

      <div className="thankCard">

        <div className="badge">SUCCESS</div>

        <h1 className="title">Order Placed 🎉</h1>

        <p>Thank you for shopping with us</p>

        {amount && <h2 className="amount">₹{amount}</h2>}

        <div className="orderId">
          Order ID : <span>{orderId}</span>
        </div>

        <button
          className="homeBtn"
          onClick={()=>navigate("/")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}