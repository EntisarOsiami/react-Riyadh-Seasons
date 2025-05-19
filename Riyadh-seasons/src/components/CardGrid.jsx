import React from "react";
import Card from "./Card";

let exploreCards = [
  {
    bgImage:
      "https://images.ctfassets.net/vy53kjqs34an/14DUIlTcHUbI5BXufzpwWy/36e1e391f3b2ea884fc58223c737c616/KV-Webook-Sizes_1280x1280.jpg?fm=webp&fit=crop&w=1280&h=1280",
    logoImage:
      "https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png?fm=webp&fit=pad&w=140&h=140",
    Image2nd:
      "https://images.ctfassets.net/vy53kjqs34an/3rth2yenJlvYpm0TM6eXoq/ddb4f053ec4183b88a4f0a59b4f72d2e/stc.png?fm=webp&fit=crop&w=1182&h=591",
  },
  {
    bgImage:
      "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg?fm=webp&fit=crop&w=2667&h=2667",
    logoImage:
      "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png?fm=webp&fit=pad&w=140&h=140",
    Image2nd:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png?fm=webp&fit=crop&w=636&h=129",
  },
  {
    bgImage:
      "https://images.ctfassets.net/vy53kjqs34an/6o10mUqReveeV2LNuoMaXb/fdad8ad178ac595c88df4d5d256d9aa4/Webook_SQUARE_THUMBNAIL_1280x1280.jpeg?fm=webp&fit=crop&w=1333&h=1333",
    logoImage:
      "https://images.ctfassets.net/vy53kjqs34an/5OziW71cfEHu2ZHlpZE9r4/3cc7ce289cb04c9593c7fecfa29c026f/dior.png?fm=webp&fit=pad&w=140&h=140",
    Image2nd: null,
  }, 
];

function CardGrid() {
  return (
    <div className="container-xxl py-4">
      <div className="row">
        {exploreCards.map((card) => (
          <Card
            bgImage={card.bgImage}
            logoImage={card.logoImage}
            Image2nd={card.Image2nd}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
