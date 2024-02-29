import React from "react";
import { FcLike } from "react-icons/fc";
import { FaCodeCompare } from "react-icons/fa6";

const UserProfile = ({
  avatar_url,
  name,
  followers,
  public_repos,
  html_url,
}) => {
  const openHtmlUrl = () => {
    window.open(html_url, "_blank");
  };

  return (
    <section className="user-profile">
      <img
        className="user-img"
        src={avatar_url}
        alt={name}
        onClick={openHtmlUrl}
        style={{ cursor: "pointer" }}
      />
      <h4 className="user-title">{name}</h4>
      <div className="followers-section">
        <div className="follower-nested">
          <FcLike />
          <article>{followers}</article>
        </div>
        <div className="follower-nested">
          <FaCodeCompare />
          <article>{public_repos}</article>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
