import { CartCountProvider } from "@/components/cart-count-context";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Metadata } from "next";
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
      <body className="overflow-y-scroll bg-gray-800 bg-[url('/grid.svg')] pb-36">
        {/* Re-work sidebar */}
        {/* <Sidebar />  */}
        <div>
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">
                <CartCountProvider>
                  <div className="space-y-10">
                    <Header />

                    {children}
                  </div>
                </CartCountProvider>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
