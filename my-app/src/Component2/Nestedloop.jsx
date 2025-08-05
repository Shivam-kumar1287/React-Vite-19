import React from "react";
import { useState } from "react";
function Nestedloop() {
    const collageData=[
        {
            name:"CNN",
            State:"pu",
            wedsit:"www.google.com",
            student:[
                {
                    name:"RAMA",
                    ID:1234
                },
                {
                    name:"Shyam",
                    ID:1234
                },
                {
                    name:"Shiva",
                    ID:1234
                }
            ]
        },
        {
            name:"ITIT",
            State:"Up",
            wedsit:"www.google.com",
            student:[
                {
                    name:"RAMA",
                    ID:1234
                },
                {
                    name:"Shyam",
                    ID:1234
                },
                {
                    name:"Shiva",
                    ID:1234
                }
            ]

        },
        {
            name:"iit",
            State:"hr",
            wedsit:"www.google.com",
            student:[
                {
                    name:"RAMA",
                    ID:1234
                },
                {
                    name:"Shyam",
                    ID:1234
                },
                {
                    name:"Shiva",
                    ID:1234
                }
            ]
        },
        {
            name:"fff",
            State:"br",
            wedsit:"www.google.com",
            student:[
                {
                    name:"RAMA",
                    ID:1234
                },
                {
                    name:"Shyam",
                    ID:1234
                },
                {
                    name:"Shiva",
                    ID:1234
                }
            ]
        }
    ]
    return (
        <div>
            <h1>Nested Loop</h1>
            {
                collageData.map((collage,index)=>(
    <div key={index} style={{ border: "1px solid black", height: "300px",width:"200px", padding: "10px", margin: "100px", background:"#dd8196ff"}}>
               <h2>{collage.name}</h2>
                            <h3>{collage.State}</h3>
                            <h3>{collage.wedsit}</h3>
                            <ul>
                            {collage.student.map((student,index)=>(
                                <li key={index}>{student.name}(ID:{student.ID})</li>
                            ))  }
                            </ul>
                        </div>
             ))
              }
        </div>
    );
}
export default Nestedloop;