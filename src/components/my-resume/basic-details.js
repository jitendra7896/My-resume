import React from "react";

const BasicDetails = () => {
  return (
    <>
      <h2 className="text-center s1">Jitendra Chatwani</h2>
      <hr />
      <p
        className="s2"
        style={{
          paddingTop: "5pt",
          textAlign: "center",
        }}
      >
        Jaipur, 302029, Rajasthan
      </p>
      <p
        className="s2"
        style={{
          textAlign: "center",
        }}
      >
        (+91) 8559966618
      </p>
      <p
        style={{
          textAlign: "center",
        }}
      >
        <strong>Mail to : </strong>
        <a href="mailto:chatwanijitu@gmail.com" className="s2 text-primary">
          chatwanijitu@gmail.com
        </a>
      </p>
    </>
  );
};

export default BasicDetails;
