import { Header } from "@/components/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="bg-background">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
