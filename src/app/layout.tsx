import Layout from "@/components/Layout";

export const metadata = {
  title: "Rizqy's Blog",
  // description: 'Rizqy\'s Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
