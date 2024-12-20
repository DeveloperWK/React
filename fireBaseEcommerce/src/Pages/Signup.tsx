import { Checkbox, Label, TextInput } from "flowbite-react";

const Signup = () => {
  return (
    <section className="m-auto mt-10 max-w-md">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>

        {/* <CustomButton color={"green"} content={"Register"} /> */}
      </form>
    </section>
  );
};

export default Signup;