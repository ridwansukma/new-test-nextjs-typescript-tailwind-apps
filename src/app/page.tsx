import About from "@/pages/about";
import Headers from "@/components/layouts/headers";
import Product from "@/pages/product";
import ContactUs from "@/pages/contact";
import Footers from "@/components/layouts/footers";

export default function Home() {
  return (
    <main>
      <Headers />
      <About />
      <Product />
      <ContactUs />
      <Footers />
    </main>
  );
}
