function ProfilePicture() {
  const imgUrl = "./src/assets/profile.jpg";

  const handleClick = (e: React.MouseEvent) => {
    const img = e.target as HTMLImageElement;
    img.style.display = "none";
  };

  return (
    <img
      onClick={(e) => handleClick(e)}
      src={imgUrl}
      width={150}
      alt="profile picture"
    />
  );
}

export default ProfilePicture;
