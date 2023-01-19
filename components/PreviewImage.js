import Image from "next/image";
import { useMemo } from "react";

export default function ImagePreview({
  file,
  height = 400,
  width = 400,
  objectFit = "cover",
}) {
  const src = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <Image
      width={100}
      height={100}
      src={src}
      alt="profile picture"
      style={{
        position: "relative",
        height,
        width,
        margin: "0 0 2rem 0",
        objectFit,
      }}
    />
  );
}
