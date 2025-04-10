import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
