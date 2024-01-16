export const Article = ({img, text, title, number}) => {
  return (
    <article className="flex h-[162px] md:w-[343px] md:flex-grow ">
        <div className="w-[100px] flex-none">
            <img src={img} alt="Retro" />
        </div>
        <div className="pl-6">
            <p className="text-Grayishblue text-3xl mb-[18px] font-bold">{number}</p>
            <h2 className="font-bold mb-[18px] hover:text-Softorange cursor-pointer">{title}</h2>
            <p className="text-Darkgrayishblue">{text}</p>
        </div>
    </article>
  )
}