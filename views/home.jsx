const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img
            src="/images/fruits-delight.jpg"
            alt="Healthy Food Options"
            width="600px"
          />
          <div>
            Photo by <a href="https://unsplash.com/@marg">Spencer Davis</a> on{" "}
            <a href="https://unsplash.com/photos/YUQEo7ajeLA">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
