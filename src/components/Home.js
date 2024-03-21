import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <p style={{color:"yellow"}} className="ms-2 me-2">
            <h1 className="mt-4">Home:</h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam
      ipsa similique nisi iusto, soluta necessitatibus. Ab est nisi in. Dicta
      tenetur ipsum enim quisquam ullam accusantium esse quia incidunt. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore
      perspiciatis eius dolorem suscipit incidunt reprehenderit beatae atque,
      placeat, corporis adipisci quo ad quaerat explicabo tenetur harum! Quod
      sed voluptates consequatur tenetur excepturi ipsam eius et, nihil
      consequuntur fugit iste culpa molestiae ipsum, odit officiis cumque sint
      modi doloremque eveniet.
      </p>
      <button className="btn btn-success"> <Link to="/ShopCart" >back</Link></button>
    </div>
  );
};

export default Home;
