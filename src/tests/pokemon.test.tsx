// About.test.jsx
import { render, screen } from "@testing-library/react";
import PokemonScene from "../features/pokemon/pokemonScene";

describe("About", () => {
  test("About renders correctly", () => {
    render(<PokemonScene />);
    expect(screen.getByText("I'm the about page!")).toBeInTheDocument();
  });
});
