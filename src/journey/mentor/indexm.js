import React from "react";
import {Outlet} from "react-router-dom";
import Appheader from "../../component/Appheader";
export default function indexm(){
    const routes = [
        {
          id: "journey-1",
          label: "Create Mentor",
          route: "/mentors/createm",
        },
        {
          id: "journey-2",
          label: "Manage Student",
          route: "/mentors/manages",
        },
      ];




    return(
        <div>
            <Appheader journeyname="mentor journey" routes={routes}/>
            
            <Outlet/>
        </div>

    )
}