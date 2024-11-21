import type { Metadata } from "next";
import { GlobalStyles } from "./styles";

export const metadata: Metadata = {
  title: "Partial Pre-Rendering",
  description: "Demo application showcasing partial pre-rendering.",
  openGraph: {
    title: "Partial Pre-Rendering",
    description: "Demo application showcasing partial pre-rendering.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`[color-scheme:dark]`}>
      <head>
        <GlobalStyles />
      </head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        {children}
      </body>
    </html>
  );
}
