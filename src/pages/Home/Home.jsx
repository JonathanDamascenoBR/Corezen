import BannerHero from '../../components/Main/BannerHero/BannerHero'
import AbaBuild from '../../components/Main/AbaBuild/AbaBuild'

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