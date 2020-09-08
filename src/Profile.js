import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./Profile.css";

function Profile({ name, userName, followers, following, repos, avatar }) {
  return (
    <div className="card">
      <Card
        hoverable
        cover={<img className="profile_image" alt="example" src={avatar} />}
      >
        <div className="card_details">
          <h3>{name} </h3>
          <h5>{userName}</h5>
          <p>{followers} followers</p>
          <p>{following} following</p>
          <p>{repos} public repostries</p>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
