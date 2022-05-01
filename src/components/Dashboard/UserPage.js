import React from "react";
import Accordion from "./Accordion";
import DashboardForm from "./Configuration/Form";

const UserPage = () => {
  return (
          <div className="userPage">
            <div className="userCover">
              <DashboardForm />
              <Accordion />
            </div>
          </div>
    );
};

export default UserPage;
