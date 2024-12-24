import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebase.config";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email!, password!);
      if (res) {
        toast.success("Login Successfully");
        setIsLoading(false);
        setError("");
        navigate("/");
      }
    } catch (error) {
      setError("Invalid email or password", error.message);
      setIsLoading(false);
      toast.error("Invalid email or password");
    }
  };

  return (
    <section className="m-auto mt-10 max-w-md">
      <form className="flex max-w-md flex-col gap-4" onSubmit={submitHandler}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            ref={emailInputRef}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            name="password"
            ref={passwordInputRef}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        {isLoading && toast.info("Loading...")}
        <button type="submit" disabled={isLoading}>
          <Button color="success">Login</Button>
        </button>
        {error && toast.error(error)}
        {/* <CustomButton color={"green"} content={"Register"} /> */}
      </form>
    </section>
  );
};

export default Login;
