import Head from "next/head";
import "./globals.css";


export const metadata = {
  title: "Bitget Wallet - Your web3 Treading wallet of the future",
  description: "Bitkeep wallet officially rebranded as Bitget Wallet, offering support for 90+ mainnets and 100+ DEXs. Bitget Wallet your premier gateway into web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/fav.jpg" />
    </Head>
      <body >{children}</body>  
    </html>
  );
}
