import "./Testimonial.css";
function Testimonials() {
  return (
    <div>
      <h1>Testimonials</h1>
      <div className="container">
        <div className="description-container">
          <h3>Name</h3>
          <h4>Mentor, Year</h4>

          <img
            src={require("./duck.jpg")}
            alt="pp"
            className="img-responsive floating-image right"
          ></img>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <br></br>
          <h3>Name</h3>
          <h4>Mentor, Year</h4>
          <img
            src={require("./duck.jpg")}
            alt="pp"
            className="img-responsive floating-image left"
          ></img>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <br></br>

          <h3>Name</h3>
          <h4>Mentor, Year</h4>
          <img
            src={require("./duck.jpg")}
            alt="pp"
            className="img-responsive floating-image right"
          ></img>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
