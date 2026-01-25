import { DocumentTitle } from "../utils/utils";
import GalleryImage from "../components/galleryImage";

interface Photo {
  src: string;
  alt: string;
  aspectRatio?: number; // width/height, helps prevent layout shift
}

export default function GalleryPage() {
  DocumentTitle("Life | Danny Hagenlocker");

  const photos: Photo[] = [
    { src: "IMG_5068.JPG", alt: "Description 1", aspectRatio: 0.6 }, // &me
    { src: "IMG_0554.jpg", alt: "Description 2", aspectRatio: 0.75 }, // tahoe
    { src: "IMG_0540.JPG", alt: "Description 3", aspectRatio: 1.33 }, // biltmore
    { src: "IMG_3065.jpeg", alt: "Description 4", aspectRatio: 0.75 }, // ruby yawn
    { src: "IMG_3301.jpeg", alt: "Description 5", aspectRatio: 0.7 }, // yosemite beaut
    { src: "IMG_4980.jpeg", alt: "Description 6", aspectRatio: 1.0 }, // michigan trellis
    { src: "IMG_9275.JPG", alt: "Description 6", aspectRatio: 0.8 }, // ruby in robot
    { src: "IMG_5191.jpeg", alt: "Description 6", aspectRatio: 0.8 }, // trophy
    { src: "IMG_7010.JPG", alt: "Description 6", aspectRatio: 1.5 }, // boat
    { src: "IMG_0841.png", alt: "Description 6", aspectRatio: 1.75 }, // tori
    { src: "IMG_3985.JPG", alt: "IMG_3985", aspectRatio: 1.5 }, // oasis
    { src: "IMG_4986.JPG", alt: "IMG_4986", aspectRatio: 1.33 }, // fam
    { src: "IMG_9833.JPG", alt: "IMG_9833", aspectRatio: 0.67 }, // yosemite miami
    { src: "venice.jpeg", alt: "venice", aspectRatio: 1.33 }, // venice
  ];

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      <div className="columns-1 gap-6 py-16 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <GalleryImage
              key={index}
              photoname={photo.src}
              alt={photo.alt}
              aspectRatio={photo.aspectRatio}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
