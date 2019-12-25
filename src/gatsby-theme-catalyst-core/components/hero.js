/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderHero = () => {
  const data = useStaticQuery(graphql`
    query {
      xmas: file(relativePath: { eq: "xmas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        bg: "palegreen",
        p: 5,
        textAlign: "center",
      }}
    >
      <div
        sx={{
          maxWidth: "maxContentWidth",
          margin: "0 auto",
        }}
      >
        <Img
          sx={{
            height: "300px",
          }}
          fluid={data.xmas.childImageSharp.fluid}
          alt="Christmas Scene"
        />
        <Styled.h1>Merry Christmas Dad!</Styled.h1>
        <Styled.p>
          I figured with all of your work on gratitude, health and giving you
          needed a better way to share it with the world!
        </Styled.p>
        <Styled.p>
          I am going to build you a quick and simple blog site you can use to
          post more of your information and build an audience for what you need
          to say. We can chat specifics in the new year!
        </Styled.p>
        <Styled.p>Love, Eric</Styled.p>
      </div>
    </section>
  )
}

export default HeaderHero
