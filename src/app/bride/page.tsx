import type { Metadata } from "next";
import { Invitation } from "@/components/Invitation";
import { sideDictionaries, images } from "@/data/content";

const brideEn = sideDictionaries.bride.en;
const brideTe = sideDictionaries.bride.te;

export const metadata: Metadata = {
  title: brideEn.meta.title,
  description: `${brideEn.meta.description} ${brideTe.meta.description}`,
  openGraph: {
    title: brideEn.meta.title,
    description: brideEn.meta.description,
    images: [
      {
        url: images.couple.src,
        width: images.couple.width,
        height: images.couple.height,
        alt: "Sneha & Venkateswarlu",
      },
    ],
  },
};

export default function BridePage() {
  return <Invitation initialSide="bride" />;
}

