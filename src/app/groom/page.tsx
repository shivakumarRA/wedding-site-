import type { Metadata } from "next";
import { Invitation } from "@/components/Invitation";
import { sideDictionaries, images } from "@/data/content";

const groomEn = sideDictionaries.groom.en;
const groomTe = sideDictionaries.groom.te;

export const metadata: Metadata = {
  title: groomEn.meta.title,
  description: `${groomEn.meta.description} ${groomTe.meta.description}`,
  openGraph: {
    title: groomEn.meta.title,
    description: groomEn.meta.description,
    images: [
      {
        url: images.couple.src,
        width: images.couple.width,
        height: images.couple.height,
        alt: "Venkateswarlu & Sneha",
      },
    ],
  },
};

export default function GroomPage() {
  return <Invitation initialSide="groom" />;
}
