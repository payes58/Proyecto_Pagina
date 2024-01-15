import imgMob from "../assets/images/imgMob"
import imgWeb  from "../assets/images/imgWeb"

export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 640px)" srcSet={imgMob}/>
        <source media="(max-width: 641px)" srcSet={imgWeb}/>
        <img src={imageMob} alt="Articulo principal imagen" />

      </picture>
    </section>
  )
}


