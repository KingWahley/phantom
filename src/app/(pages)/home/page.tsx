import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/NavBar/NavBar";
import Footer from "@/components/shared/Footer/Footer";
import Socials from "@/components/shared/Socials";
import PreviewCard from "@/components/previewCard";


const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Socials />
      <Hero title="" subtitle="" imageUrl="/images/heroimage.jpg" />
      <PreviewCard
        title="The Whispering Winds"
        image="/images/dress.png"
        author="John Doe"
        preview="In the quiet of the forest, where the winds tell their tales, a story unfolds. It speaks of love, loss, and the eternal rhythm of nature..."
      />
      <Footer />
    </div>
  );
};

export default HomePage;
