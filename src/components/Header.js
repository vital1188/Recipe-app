function Header() {
  return (
    <div className="wrapper">
      <div className="appHeader">
        <div className="appLogo">
          <a href="/">
            <h1>Recipes</h1>
          </a>
          <p>Find recipes from around the world</p>
        </div>
      </div>
      <div className="appSearch">
        <form className="searchField">
          <input
            type="text"
            required
            placeholder="Find Recipes"
            name="recipeSearch"
            className="recipeSearch"
          />
          <button className="searchButton">
            {" "}
            <img src="/images/searchIcon.png" alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
