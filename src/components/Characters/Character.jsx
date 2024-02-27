import React from "react";

//bg images
import MarioBg from "../../Assets/Icons/CharactersBG/Mario.jpg";
import ZeldaBg from "../../Assets/Icons/CharactersBG/Zelda.jpg";
import SplatoonBg from "../../Assets/Icons/CharactersBG/Splatoon.jpg";
import KirbyBg from "../../Assets/Icons/CharactersBG/Kirby.avif";
import PikminBg from "../../Assets/Icons/CharactersBG/Pikmin.jpg";
import AnimalCrossingBg from "../../Assets/Icons/CharactersBG/AnimalCrossing.avif";
import MetroidBg from "../../Assets/Icons/CharactersBG/Metroid.avif";
import PokemonBg from "../../Assets/Icons/CharactersBG/Pikatchu.avif";
import { CharactersItem } from "../Reusable/CharactersItem/CharactersItem";

export const Character = () => {
  const CharacterItem = [
    {
      id: "1",
      title: "Super Mario™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
      bg: MarioBg,
    },
    {
      id: "2",
      title: "The Legend of Zelda™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character",
      bg: ZeldaBg,
    },
    {
      id: "3",
      title: "Splatoon™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2",
      bg: SplatoonBg,
    },
    {
      id: "4",
      title: "Kirby™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby",
      bg: KirbyBg,
    },
    {
      id: "5",
      title: "Pikmin™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pikmin_v02",
      bg: PikminBg,
    },
    {
      id: "6",
      title: "Animal Crossing™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-AnimalCrossing_v01",
      bg: AnimalCrossingBg,
    },
    {
      id: "7",
      title: "Metroid™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Metroid_v01",
      bg: MetroidBg,
    },
    {
      id: "8",
      title: "Pokémon™",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pokemon_v01",
      bg: PokemonBg,
    },
  ];

  return (
    <div>
      <div
        className="grid w-[100vw] justify-center  py-5
        
      "
      >
        <p
          className="py-10 font-bold text-3xl text-darkGray
          phone:text-lg 
          
        "
        >
          Characters
        </p>
        <div
          className="grid grid-cols-4 gap-4 h-[60rem] w-[70vw]
          phone:grid-cols-2
        "
        >
          {CharacterItem.map((item) => (
            <CharactersItem key={item.id} value={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
