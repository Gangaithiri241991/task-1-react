import React from "react";
import {Link} from "react-router-dom";


export default function Appheader({journeyname="",routes=[]}){
    return(
        
        <div id="zen-header-bar"className="zen-header">
        <h4>{journeyname}
        </h4>
        <div className="zen-sub-journey-container">
            {routes &&
            routes.map((_e,index)=> (
        <Link key={`zen-sub-journey-link-${index}`}to={_e.route}>


        <p className="zen-sub-journey-link">{_e.label}</p>

        </Link>
    ))}
        
        </div>
        </div>  
         

  );



    
}

