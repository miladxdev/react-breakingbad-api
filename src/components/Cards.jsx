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
                <h4>appearance ({item.category})</h4>
                <p> 
                  {item.appearance.map((s) => (
                    <span className="season" key={s}>S{s}</span>
                  ))}
                </p>
              </div>
              
              <div className="row">
                <span>{item.status}</span> 
              </div>
            </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default characters;
