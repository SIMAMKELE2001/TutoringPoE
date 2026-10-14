import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Simamkele Yawa | Tutoring Portfolio of Evidence",
  description: "Development Software III tutor at iYunivesithi Walter Sisulu. Tutoring journey, practice, impact and evidence.",
  openGraph: { title: "Simamkele Yawa | Tutoring Portfolio of Evidence", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
