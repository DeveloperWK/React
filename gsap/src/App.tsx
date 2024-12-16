import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  const app = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(".square", { rotate: 360, duration: 5, repeat: -1 });
  //   }, app);
  //   return () => ctx.revert();
  // }, []);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.to(".square", { rotate: 360, duration: 5, repeat: -1 });
    },
    { scope: app }
  );

  return (
    <Container>
      <section ref={app}>
        <div
          className="square bg-primary m-5 w-50 text-center"
          style={{ height: "200px" }}
        >
          <h1 className="text-white p-5">Hello</h1>
        </div>
      </section>
    </Container>
  );
};

export default App;
