import imagenMobile from "../assets/images/imgMob.jpg"
import imagenDesktop  from "../assets/images/imgWeb.jpg"

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imagenMobile}/>
        <source media="(min-width: 641px)" srcSet={imagenDesktop}/>
        <img src={imagenMobile} alt="Principal"/>
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
        <h2 className="text-[40px] font-bold sm:text-[58px] md:tex-[48px] lg:text-[38px] xl:text-[45px] leading-none">The Bright Future of Web 3.0?</h2>
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 sm:text-[15px] "> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button className="bg-Softred w-[185px] h-[48px] uppercase text-Offwhite hover:bg-Verydarkblue">Read more</button>
        </div>
      </div>
    </section>
  )
}



 


