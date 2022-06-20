import { FC } from "react";

const Loader: FC = () => {
  return (
    <figure id="loader">
      <img
        src={"./img/pokeball.png"}
        alt="Loading..."
        height="100"
        width="100"
      />
    </figure>
  );
};

export default Loader;
