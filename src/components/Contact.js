const inputStyle = {
  textDecoration: "none",
  border: "transparent",
  backgroundColor: "transparent",
  borderBottom: "1px solid white",
  padding: "5px",
};
function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        padding: "2%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "Barlow",
            color: "#FFFFFF",
            fontSize: 55,
          }}
        >
          We'd love to hear
          <br /> your thoughts
        </p>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: 15,
            fontFamily: "Barlow",
          }}
        >
          Tell us about your vision: which challenge <br /> are you facing? we
          would love to stay in touch <br /> with you, so we are always ready{" "}
          <br />
          to answer any question that interest you.
        </p>

        <button
          style={{
            width: "auto",
            padding: 10,
            backgroundColor: "transparent",
            color: "#FFFFFF",
            borderWeight: 1,
            borderColor: "#FFFFFF",
            fontFamily: "Barlow",
          }}
        >
          Share Feedback Anonymously
        </button>
      </div>

      <div
        style={{
          color: "white",
          display: "inline-block",
          width: "50%",
          float: "left",
          border: "1px",
        }}
      >
        <p>First Name</p>
        <input style={inputStyle} type="text" placeholder="First Name"></input>
        <p>Email Address</p>
        <input
          style={inputStyle}
          type="text"
          placeholder="Email Address"
        ></input>
        <p>Unique Code</p>
        <input style={inputStyle} type="text" placeholder="Unique Code"></input>
        <p>Share your thoughts</p>
        <input
          style={inputStyle}
          type="text"
          placeholder="Hi, I'd suggest that..."
        ></input>
        <br />
        <input
          style={inputStyle}
          type="file"
          placeholder="Hi, I'd suggest that..."
        ></input>
        <div
          style={{
            padding: "10px",
          }}
        >
          <button
            style={{
              padding: "7px",
              width: "70px",
              backgroundColor: "#1c1c1c",
              color: "white",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
