import BannerAbout from '../components/BannerAbout/BannerAbout'
import Collapse from '../components/Collapse/Collapse'
import aboutImage from '../assets/background_image2.png'
import './About.css'

function About() {
  return (
    <div className="about">
      <BannerAbout image={aboutImage} />
      <section className="about__collapses">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.</p>
        </Collapse>
      </section>
    </div>
  )
}

export default About
