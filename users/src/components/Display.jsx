import React from "react";
function Display(props)
{ 
    return (
        <div className="container">
          {props.data.map((item) => {
            return (
              <div className="item">
                <p>{item.id}</p>
                <img src={item.avatar} alt="" />
                <h3>
                  {item.first_name} {item.last_name}
                </h3>
                <h5>{item.email}</h5>
              </div>
            );
          })}
        </div>
    )
}
export default Display;