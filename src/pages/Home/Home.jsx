import BannerHero from '../../components/Home/Main/BannerHero/BannerHero'
import AbaBuild from '../../components/Home/Main/AbaBuild/AbaBuild'

function Home() {
  return (
    <div className="w-full">

      <BannerHero />

      <div id="secao-build">
        <AbaBuild />
      </div>
    </div>
  )
}

export default Home