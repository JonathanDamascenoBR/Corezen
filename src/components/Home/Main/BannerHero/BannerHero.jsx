import BannerHeroItem from "./BannerHeroItem";


function BannerHero() {

    const item = {
        title: "",
        description: "Simule, Compare e descubra o setup perfeito para você."
    }

    return (
        <section className="">
            <BannerHeroItem item={item} />
        </section>
    )
}

export default BannerHero