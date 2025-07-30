import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { AppRouters } from "../routes/route";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <AppRouters />
      </main>
      <Footer />
    </div>
  );
};
