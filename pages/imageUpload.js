import Link from "next/link";
import { useState } from "react";
import ImagePreview from "../components/PreviewImage";
import { ownPlayerCard } from "../data/data";

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
    ownPlayerCard.cloudinarySrc = json.secure_url;
    setIsUploading(false);
    setIsUploaded(true);

    const formValues = Object.fromEntries(formData);
  }

  return (
    <main>
      <h1>Image Upload</h1>
      <form onSubmit={handleFileUpload}>
        <p>
          <label htmlFor="avatar">Please choose an image</label>
        </p>
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

        <button type="submit">{isUploading ? "Uploading …" : "Upload"}</button>
      </form>
      {isUploaded && <p>Image uploaded successfully!</p>}
      <button>
        <Link href="/newUserForm">Back to profile </Link>
      </button>
    </main>
  );
}
