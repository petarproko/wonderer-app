
export default function Card({packageDetail = {}}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-tour transition duration-300 ease-out hover:-translate-y-1.25 hover:shadow-tour-hover">
      <img src="images/destination.png" alt="Amalfi Coast, Italy" className="block h-55 w-full object-cover sm:h-57.5" />
      <div className="p-6">
        <span className="text-base font-bold uppercase tracking-[1px] text-secondary">{packageDetail.country}</span>
        <h3 className="mb-2.5 mt-2 text-xl font-bold text-primary">{packageDetail.title}</h3>
        <p className="mb-6.25 text-base leading-relaxed text-[#666]">{packageDetail.description}</p>
        <div className="flex items-center justify-between border-t border-[#eee] pt-4.5"><span className="text-base text-[#666]">{packageDetail.duration}</span><span className="text-xl font-bold text-primary">${packageDetail.price}</span></div>
      </div>
    </article>
  );
}