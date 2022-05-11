import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({ children, location }) {
  return (
    <>
      <Header />

      <main>
        <div className="flex flex-col md:flex-row">
          <Sidebar location={location} />
          <section className="w-full min-h-screen bg-gray-50 mt-16 flex flex-wrap p-4">
            {children}
          </section>
        </div>
      </main>
    </>
  );
}
