import profilePic from "../assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} className="card-img" alt="profile picture" />
      <h2 className="card-title">Niks</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam!
      </p>
    </div>
  );
}

export default Card;
