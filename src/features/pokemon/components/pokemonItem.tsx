import axios from "axios";
import { FC, useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSWR from "swr";

interface Props {
  pokemon: any;
}

const PokemonItem: FC<Props> = (pokemon: any) => {
  // console.log(pokemon.pokemon);
  const pokemonData = pokemon.pokemon;
  // console.log(pokemonData.fullData);
  const colors: any = {
    bug: "#f8d5a3",
    electric: "#FCF7DE",
    dark: "#044286",
    dragon: "#97b3e6",
    fairy: "#fceaff",
    fighting: "#E6E0D4",
    fire: "#FDDFDF",
    flying: "#F5F5F5",
    ghost: "#663388",
    grass: "#DEFDE0",
    ground: "#f4e7da",
    ice: "#DEF3FD",
    normal: "#F5F5F5",
    poison: "#98d7a5",
    psychic: "#eaeda1",
    rock: "#d5d5d4",
    steel: "gray",
    water: "#DEF3FD",
  };
  console.log(pokemonData.fullData);
  const showDetails = () => {
    Swal.fire({
      width: 600,
      title: pokemonData.name,
      html:
        '<div class="modal-content rounded-0">' +
        '<div class="modal-body py-0">' +
        '<div class="d-flex main-content">' +
        '<div class="bg-image promo-img mr-3" style="background-image: url(' +
        pokemonData.img +
        ');">' +
        "</div>" +
        '<div class="content-text p-4 px-1 align-item-stretch">' +
        '<div class="text-center">' +
        '<a href="#" class="share"><span class="icon-share"></span></a>' +
        '<p class="mb-3">' +
        '<span class="icon-star text-warning"></span>' +
        '<span class="icon-star text-warning"></span>' +
        '<span class="icon-star text-warning"></span>' +
        '<span class="icon-star text-warning"></span>' +
        '<span class="icon-star"></span>' +
        "</p>" +
        '<div class="mb-5">' +
        "<ul className='list-group'>" +
        "<li className='list-group-item'> My height : <strong>" +
        pokemonData.fullData.height +
        "</strong></li>" +
        "<li className='list-group-item'> My weight : <strong>" +
        pokemonData.fullData.weight +
        "</strong></li>" +
        "<li className='list-group-item'> My type : <strong>" +
        pokemonData.type +
        "</strong></li>" +
        "<li className='list-group-item'> My base Experience : <strong>" +
        pokemonData.fullData.base_experience +
        "</strong></li>" +
        '<li className="list-group-item"> My species : <strong>' +
        pokemonData.fullData.species.name +
        "</strong></li>" +
        "</ul>" +
        "</div>" +
        '<div class="d-flex text-center social w-50 mx-auto">' +
        '<a href="#" class="d-inline-block d-flex align-items-center mr-auto like">' +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>",
      imageAlt: "Bulbasaur",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      showConfirmButton: false,
    });
  };
  return (
    <div
      onClick={showDetails}
      className="poke-card"
      style={{ backgroundColor: colors[pokemon.type] }}
    >
      <figure>
        <img
          src={pokemonData.img}
          alt={pokemonData.name}
          title={pokemonData.name}
        />
      </figure>
      <div>#{pokemonData.id}</div>
      <div>
        <strong>{pokemonData.name}</strong>
      </div>
      <div>
        <em>{pokemonData.type}</em>
      </div>
    </div>
  );
};

export default PokemonItem;
