import Layout from '@/components/Layout';

export const metadata = {
  title: "Rizqy's Blog",
  // description: 'Rizqy\'s Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
