import { FC, useState, useCallback, Suspense } from "react";
import Swal from "sweetalert2";
import { fetchOnePokemonRequest } from "../../../actions/pokemonAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../configureStore";

interface Props {
  pokemon: any;
}

const PokemonItem: FC<Props> = (item: any) => {
  const dispatch = useDispatch();
  const [data, setData]: any = useState([]);
  const { waiting, pokemon, error } = useSelector(
    (state: RootState) => state.pokemon
  );
  const getData = (url: string) => {
    dispatch(fetchOnePokemonRequest(url));
    setData(pokemon && pokemon);
  };

  useCallback(() => {
    getData(item.pokemon.url);
  }, [data]);

  async function showDetails() {
    await Swal.fire({
      width: 600,
      title: data.name,
      html:
        '<div class="modal-content rounded-0">' +
        '<div class="modal-body py-0">' +
        '<div class="d-flex main-content">' +
        '<div class="bg-image promo-img mr-3" style="background-image: url(' +
        data.sprites.front_default +
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
        data.height +
        "</strong></li>" +
        "<li className='list-group-item'> My weight : <strong>" +
        data.weight +
        "</strong></li>" +
        "<li className='list-group-item'> My type : <strong>" +
        data.type +
        "</strong></li>" +
        "<li className='list-group-item'> My base Experience : <strong>" +
        data.base_experience +
        "</strong></li>" +
        '<li className="list-group-item"> My species : <strong>' +
        data.species.name +
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
  }

  return (
    <a
      href="#"
      className="primary"
      onClick={async () => {
        getData(item.pokemon.url);
        await showDetails();
      }}
    >
      <div className="poke-card">
        <figure>
          <strong>{item.pokemon.name}</strong>
        </figure>
      </div>
    </a>
  );
};

export default PokemonItem;
