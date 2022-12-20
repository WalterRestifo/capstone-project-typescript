import { Member } from "../interfaces/interfaces";

export const skill: string[] = [
  "Anything will do",
  "A+",
  "A",
  "B",
  "C",
  "D",
  "Beginners",
];
export const language: string[] = [
  "Anything will do",
  "English",
  "German",
  "Spanish",
];
export const gender: string[] = [
  "Anything will do",
  "Female",
  "Male",
  "Diverse",
];

export const ownPlayerCard: Member = {
  name: "",
  skill: "A+",
  languages: [],
  gender: "Female",
};

// Upload your first asset
// Get started with Cloudinary by uploading some of your media. You can add upload functionality to your applications using our APIs and SDKs. Alternatively, you can upload using the Media Library or from the command line using the Cloudinary CLI.

// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });

// Create a transformation for image resizing
// Resize your images by setting the width and/or height parameters (w and h in URLs). When resizing using Cloudinary's
//  URL-based transformations, Cloudinary will automatically apply the scale crop mode.
//  Alternatively, you can use any one of our many supported crop modes.

// This SDK requires imports from @cloudinary/url-gen. Learn more in the SDK docs.
// new CloudinaryImage("turtles.jpg").resize(scale().width(70).height(53));

// Add a set of transformation parameters to a Cloudinary URL to programmatically
// modify the original and generate a newly derived media file.
// For example, scaling this image down to a width of 150 pixels.

// cloudinary.image("sneaker.png", {crop: "scale", width: 150 })
