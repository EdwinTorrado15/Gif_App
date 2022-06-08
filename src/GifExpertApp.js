import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball z"]);

  return (
    <Fragment>
      <div>
        <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      </div>

        <ol>
        {categories.map((category) =>
          <GifGrid
          key={category}
          category={category}
          />
        )}
      </ol>
    </Fragment>
  );
};
export default GifExpertApp;
