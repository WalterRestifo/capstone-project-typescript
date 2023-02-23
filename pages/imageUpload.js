import Link from "next/link";
import { useState } from "react";
import ImagePreview from "../components/PreviewImage";
import { ownPlayerCard } from "../data/data";
import styled from "styled-components";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  async function handleFileUpload(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    setIsUploading(true);

    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    setImage(null);
    ownPlayerCard.cloudinarySrc = json.secure_url;
    setIsUploading(false);
    setIsUploaded(true);

    const formValues = Object.fromEntries(formData);
  }

  return (
    <StyledMain>
      <Image
        src={"/netz-blur.jpg"}
        alt={"volleyball net background image"}
        fill={true}
        objectFit={"cover"}
        objectPosition={"center"}
        style={{ position: "absolute", zIndex: -1 }}
      />
      <Header teaser="Image upload" />
      <form onSubmit={handleFileUpload}>
        <StyledP>
          <label htmlFor="avatar">Please choose an image</label>
        </StyledP>
        <input
          type="file"
          id="avatar"
          value={imageValue}
          onChange={(event) => {
            setImageValue(event.target.value);
            setImage(event.target.files[0]);
          }}
        />

        {image && <ImagePreview file={image} />}
        {!isUploaded && (
          <StyledButton type="submit">
            {isUploading ? "Uploading …" : "Upload"}
          </StyledButton>
        )}
      </form>
      {isUploaded && (
        <StyledUploadSuccess>Image uploaded successfully!</StyledUploadSuccess>
      )}

      <StyledLink href="/newUserForm">
        <Image
          alt="profile"
          src={"/profile-white.svg"}
          height={60}
          width={60}
        />
      </StyledLink>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  font-size: 20px;
  height: 100dvh;
  width: 100dvw;
  color: white;
  font-family: baloo_2;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 1%;
  right: 5%;
`;

const StyledButton = styled.button`
  border-radius: 25px;
  padding: 1rem;
  position: fixed;
  bottom: 3.5%;
  left: 42%;
`;

const StyledP = styled.p`
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const StyledUploadSuccess = styled.p`
  font-size: 25px;
  position: relative;
  top: 10%;
`;
