import Card from "../ui-components/card";
import Testimonials from "../ui-components/testimonials";
import AvailablePackages from "./../assets/packages.json";
import TestimonialsData from "./../assets/testimonials.json";

export default function Home() {
  return <>
    <section>
      <div>
        <img src="/images/hero.png" alt="Mountains" className="h-[min(70vh,700px)] w-full object-cover" />
        <h1 className="m-0 py-5 text-center text-3xl font-bold text-primary sm:text-4xl">Discover Amazing Places</h1>
      </div>
    </section>

    <section id="tour-packages" className="bg-white px-5 py-15 sm:px-7.5 sm:py-20 lg:px-12.5 lg:py-25">
      <div className="mx-auto mb-8.75 max-w-162.5 text-center sm:mb-12.5">
        <span className="mb-2.5 inline-block text-xs font-bold uppercase tracking-[1.5px] text-secondary">Explore the world</span>
        <h2 className="mb-3.75 text-[2rem] font-bold leading-tight text-primary sm:text-[2.1rem] lg:text-5xl">Popular Tour Packages</h2>
        <p className="m-0 text-base leading-relaxed text-[#666]">Discover unforgettable destinations and experiences carefully selected for your next adventure.</p>
      </div>

      <div id="packages" className="mx-auto grid max-w-300 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7.5 lg:grid-cols-3">
        {AvailablePackages.map((packageDetail) => {
          return <Card key={packageDetail.id} packageDetail={packageDetail} />
        })}
      </div>
    </section>

    <section id="testimonials" className="bg-mist px-5 py-15 sm:px-7.5 sm:py-20 lg:px-12.5 lg:py-25">
      <div className="mx-auto mb-8.75 max-w-162.5 text-center sm:mb-12.5">
        <span className="mb-2.5 inline-block text-base font-bold uppercase tracking-[1.5px] text-secondary">Testimonials</span>
        <h2 className="mb-3.75 text-[1.8rem] font-bold leading-tight text-primary sm:text-[2.1rem] lg:text-5xl">What Our Travelers Say</h2>
        <p className="m-0 text-base leading-relaxed text-[#666]">Real experiences from travelers who explored the world with Wanderer.</p>
      </div>

      <div className="mx-auto grid max-w-300 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-7.5">
        {TestimonialsData.map((testimonialDetail) => {
          return <Testimonials key={testimonialDetail.id} testimonialDetail={testimonialDetail} />
        })}
      </div>

      <div className="mx-auto my-7.5 max-w-300 text-center">
        <h2 className="mb-2.5 text-2xl font-bold text-primary">Do you like what you hear?</h2>
        <a href="#tour-packages" className="inline-block rounded-[30px] bg-secondary px-6.25 py-3.75 font-medium text-black no-underline transition duration-300 hover:-translate-y-1.25 hover:bg-[#e99a55]">
          Plan your trip today
        </a>
      </div>
    </section>

    <section className="relative w-full">
      <img src="images/destinationHero.jpg" alt="Destination landscape" className="block h-auto w-full object-cover" />
    </section>
  </>;
}