import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Icons } from "@/components/Icons";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
}

export function constructMetadata({
  title = "SnapCase - Custom high-quality phone cases",
  description = "Create custom high-quality phone cases in seconds",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@iamfinzyphinzy_",
    },
    icons,
    metadataBase: new URL("https://snapcase-one.vercel.app/"),
  };
}
