import StickyTopBar from '@/components/StickyTopBar';
import FloatingBar from '@/components/FloatingBar';
import Hero from '@/components/Hero';
import WhatYouLearn from '@/components/WhatYouLearn';
import Curriculum from '@/components/Curriculum';
import WhoFor from '@/components/WhoFor';
import WhatYouGet from '@/components/WhatYouGet';
import Showcase from '@/components/Showcase';
import Bonus from '@/components/Bonus';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-gray-200">
      <StickyTopBar />
      <main>
        <Hero />
        <WhatYouLearn />
        <Curriculum />
        <WhoFor />
        <WhatYouGet />
        <Showcase />
        <Bonus />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}

export default App;
