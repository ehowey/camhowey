/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const data = useStaticQuery(
    graphql`
      query {
        avatar: file(name: { eq: "cam-howey" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <Img
      sx={{
        height: "200px",
        width: "200px",
        borderRadius: "9999em",
        boxShadow: "inset 0 0 10px #000000",
      }}
      fluid={data.avatar.childImageSharp.fluid}
      alt="Cam Howey"
      imgStyle={{ objectFit: "contain" }}
    />
  )
}

export default Avatar
