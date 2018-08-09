import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Title from 'components/Title'
import Text from 'components/Text'
import Container from 'components/Container'
import example1 from './example-1.jpg'
import example2 from './example-2.png'
import example3 from './example-3.png'
import example4 from './example-4.jpg'

const styles = theme => ({
  images: {
    marginBottom: 30,
  },
  img: {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
  },
})

const Project = ({ classes }) => (
  <Container>
    <Title>Qu’est-ce que la chaise monobloc ?</Title>
    <Text>
      La chaise monobloc, c’est la vulgaire chaise de jardin en plastique,
      souvent blanche, avec ses accoudoirs et ses rainures dans le dos, sur
      laquelle on s’est tous assis.
      <br />
      <br />
      Elle est dans nos jardins, sur nos terrasses, dans les campings, les bars,
      les parcs, les piscines, les hôpitaux, les stades, les maisons de
      retraite, sur les cinq continents, et depuis plusieurs décennies. Elle est
      tellement omniprésente dans nos vies, qu’on ne la voit même plus. Notre
      regard passe dessus sans s’arrêter. Même les moteurs de reconnaissance
      visuelle ont du mal à l’identifier. Elle fait partie du décor, et on
      sous-estime complètement leur prolifération. Les fabricants estiment
      pourtant qu’il y en a plus d’un milliard d’exemplaires en circulation
      simplement en Europe.
      <br />
      <br />
      En Europe de l’Ouest, on est habitué à un certain modèle, mais en réalité,
      elle existe dans une multitude de variations de couleur et de design.
      <br />
      <br />
      Voici quelques exemples :
      <br />
      <br />
    </Text>
    <div className={classes.images}>
      <img
        src={example1}
        alt="Monobloc chair example 1"
        className={classes.img}
      />
      <img
        src={example2}
        alt="Monobloc chair example 2"
        className={classes.img}
      />
      <img
        src={example3}
        alt="Monobloc chair example 3"
        className={classes.img}
      />
      <img
        src={example4}
        alt="Monobloc chair example 4"
        className={classes.img}
      />
    </div>
    <Title>Le projet</Title>
    <Text>
      Le Monobloc Project vise à mettre en lumière cet objet qui cristallise
      toutes les problématiques de la globalisation : homogénéisation des modes
      de vie, différence culturelle, viralisation des usages, écologie, bon goût
      et mauvais goût…
      <br />
      <br />
      Depuis deux ans, Monobloc Project questionne le phénomène monobloc:
      comment ces banales chaises en plastique sont parvenues à conquérir le
      monde et à séduire l’humanité entière, dépassant tous les clivages et
      traversant toutes les géographies ?
      <br />
      <br />
      Nous vous proposons d’observer les monoblocs comme on observerait
      l’évolution d’une espèce invasive qui aurait proliféré partout dans le
      monde grâce à ses capacités adaptatives. Ainsi, la forme et la couleur des
      monoblocs change en fonction des goûts des populations locales et des
      architectures.
      <br />
      <br />
      Car le design blanc avec des épaules arrondies et des accoudoirs, dont
      nous sommes familiers en Europe de l’Ouest, est loin d’être universel.
      Dans d’autres régions du monde, elles sont vertes, ou rouges, ou jaunes,
      ou marbrées... dans les pays où les gens ont moins d’espace, elles perdent
      leurs accoudoirs. En Inde ou en Afrique, leur dossier a des motifs ou des
      messages. Leur usage diffère aussi radicalement. En Europe de l’ouest,
      elles restent à l’extérieur, ou sont éventuellement admises sur les
      terrasses et les balcons. Mais ailleurs, les monoblocs constituent souvent
      un mobilier intérieur acceptable, et équipent même les églises ou les
      administrations.
      <br />
      <br />
      Pour comprendre ce phénomène de propagation de façon plus approfondie,
      nous avons conçu, avec des spécialistes de l’agence Agaetis, un bot,
      autrement dit un algorithme informatique intelligent et autonome, qui
      s’appelle Monobot.
      <br />
      <br />
      Monobot sait reconnaître la chaise monobloc dans les photos postées par
      les gens, et identifier ses différentes variantes : sa couleur, son design
      (est-ce qu’elle a des accoudoirs ? comment est son dossier ? …), son état
      (est-ce qu’elle est en bon état ou abîmée ou rafistolée), et son contexte
      d’utilisation (dans un intérieur ? dans la rue? dans un parc ou jardin?
      ..., est-ce qu’elle est seule ou est-ce qu’elle fait partie d’un ensemble,
      est-ce qu’elle est « nue » ou agrémentée d’un coussin ou d’une
      couverture…).
      <br />
      <br />
      En effet, à chaque instant, il y a des gens qui postent des photos, de
      leurs vacances, de leur barbecue en famille, de leurs vacances au bout du
      monde, etc, avec une monobloc quelque part dans l’image. La monobloc
      constitue rarement le sujet de la photo, mais elle est souvent là, dans un
      coin de l’image. Ce matériel abondant va nous servir à comprendre comment
      la monobloc est utilisée, où et dans quel contexte.
    </Text>
    <Title>Apportez votre bloc à l&apos;édifice !</Title>
    <Text>
      Monobot est toujours en phase d’apprentissage, et il a besoin de vous pour
      progresser. Sur ce site, vous allez être confronté à des photos prises par
      des particuliers, où figure une chaise monobloc. Et on vous demandera de
      spécifier en quelques clics les caractéristiques de la chaise : sa
      couleur, son design, son état et son contexte d’utilisation.
      <br />
      <br />
      Grâce à vos contributions, Monobot va ainsi progresser de jour en jour en
      finesse d’analyse.
    </Text>
  </Container>
)

Project.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Project)
