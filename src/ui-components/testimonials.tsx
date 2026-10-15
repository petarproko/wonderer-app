
export default function Testimonials({ testimonialDetail = {} }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-6 shadow-testimonial sm:p-7.5">
      <div className="mb-5 flex items-center gap-3.75">
        <img src="images/testemonialUser.png" alt={testimonialDetail.name} className="h-13.75 w-13.75 rounded-full object-cover" />
        <div>
          <h3 className="mb-1 text-base font-bold text-primary">{testimonialDetail.name}</h3>
          <span className="text-base text-[#777]">{testimonialDetail.country}</span>
        </div>
      </div>
      <div className="mb-3.75 text-[1.1rem] tracking-[2px] text-secondary" aria-label="5 out of 5 stars">{"★".repeat(testimonialDetail.rating)}</div>
      <blockquote className="m-0 text-base leading-[1.7] text-[#555]">{testimonialDetail.review}</blockquote>
    </article>
  );
}