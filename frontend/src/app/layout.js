import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1726" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.locale} className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
