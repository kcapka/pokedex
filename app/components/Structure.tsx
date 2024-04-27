import Header from "./Header";
import Footer from "./Footer";

export default function Structure({ children }: any) {
    return (
      <>
        <Header />
        <main className="min-h-[100svh]">{children}</main>
      </>
    );
  };