import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import "./SearchProfile.css";
import Profile from "./Profile";

const SearchProfile = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/example`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };
  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError("");
        }
      });
  };

  return (
    <div className="search">
      <div class="form">
        <Form>
          <Form.Item>
            <Input
              placeholder="username"
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
      {error ? (
        <h3 className="error_msg">{error}</h3>
      ) : (
        <div className="card">
          <Profile
            name={name}
            userName={userName}
            followers={followers}
            following={following}
            repos={repos}
            avatar={avatar}
          />
        </div>
      )}
    </div>
  );
};

export default SearchProfile;
