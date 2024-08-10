"use client";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import { useState } from "react";
import Image from "next/image";
import FB from "../public/fb.svg";

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignup = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <>
      <div className="app">
        <div className="left_protion">
          <div className="img_wrapper">
            <Image src={FB} width={272} height={100}></Image>
          </div>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right_portion">
          <LoginForm
            showSignUp={showSignUp}
            handleShowSignup={handleShowSignup}
          />
          <p>
            <a href="/">Create a page</a> for a celebrity, brand or business
          </p>
        </div>
      </div>

      {/*  */}
      {showSignUp && <SignUpForm handleShowSignup={handleShowSignup} />}
    </>
  );
}
