import React from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid() {
  const [imgs, setimgs] = React.useState([]);
  /*----------------------------------------------------
Appelle l'api au lancement du component et met les images 
dans le useState imgs
-----------------------------------------------------*/
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setimgs(res.data.memes);
      });
  }, []);
  /*----------------------------------------------------
Affiche le component Card pour chaques 
images dans le useState imgs

un component ne peux retourner que 1 élement JSX
nous pouvons faire <>content*</> pour ne pas avoir une div supplémentaire
-----------------------------------------------------*/
  return (
    <>
      <h1>YnovMemes</h1>
      <div className="Grid">
        {imgs.map((e) => {
          if (e.box_count === 2) return <Card key={e.id} data={e}></Card>;
        })}
      </div>
    </>
  );
}

export default Grid;
