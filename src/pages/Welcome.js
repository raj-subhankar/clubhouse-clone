import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>welcome</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Hey, we're still opening up but anyone can join with an invite from an
          existing user!
        </p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/invite"
          className={"primaryBtn d-flex align-items-center mb-3"}
        >
          Get your username{" "}
        </Link>
        <Link>Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}
