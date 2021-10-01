import React from "react";

const characters = ({ data }) => {
  return (
    <div className="page-wrapper">
      <div className="cards">
        
      {data.map((item) => (
        <div className="card" key={item.char_id}>
            <img src={item.img} alt="profile" />
            <div className="content">
              <div className="row">
                <h2>{item.name}</h2>
                <p>known as {item.nickname}</p>
              </div>

              <div className="row">
                <h3>portrayed</h3>
              <p>{item.portrayed}</p>
              </div>
              <div className="row">
                <h3>birthday</h3>
                <p>{item.birthday}</p>
              </div>
              
              <div className="row">
                <h3>occupation</h3>
                <p>{item.occupation}</p>
              </div>

              <div className="row">
                <h4>appearance (breaking bad)</h4>
                <p> 
                  {item.appearance.map((s) => (
                    <span className="season" key={s}>S{s}</span>
                  ))}
                </p>
              </div>
              
              <div className="row">
                <h4>appearance (better call soul)</h4>
                <p> 
                  {item.better_call_saul_appearance.length ? item.better_call_saul_appearance.map((s) => (
                    <span className="season better-call" key={s}>S{s}</span>
                  )) : "No appearance"}
                </p>
              </div>
              <div className="row">
                <h3>Status</h3>
                <p>{item.status}</p> 
              </div>
            </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default characters;
