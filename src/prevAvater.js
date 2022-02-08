import { useEffect, useState } from "react";

function Avatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    //cleanup
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvater = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvater} />
      {avatar && <img src={avatar.preview} alt="" width="70%" />}
    </div>
  );
}
export default Avatar;
