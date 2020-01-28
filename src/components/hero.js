//Delete this or modify it to make you own hero compoment.  You can also just remove it enitrely by setting useHero to false in the theme options contained in gatsby-config.js file.
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@theme-ui/components"

const HeaderHero = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "test-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        mb: 5,
      }}
      aria-label="Hero Section"
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          zIndex: "1",
        }}
      >
        <div
          sx={{
            gridColumn: "1 / -1",
            gridRow: "1 / -1",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRow: "repeat(4, 1fr)",
            gridGap: "4px",
            zIndex: "3",
          }}
        >
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              sx={{
                bg: "#0a0a0a",
                color: "white",
                display: "grid",
                placeItems: "center",
                width: "100%",
                height: "100%",
                animation: "test 6s 1",
                opacity: "0",
                "@keyframes test": {
                  "0%": { opacity: "0" },
                  "25%": { opacity: "1" },
                  "75%": { opacity: "1" },
                  "100%": { opacity: "0" },
                },
              }}
            >
              <Styled.p sx={{ textTransform: "uppercase" }}>Kindness</Styled.p>
            </div>
          </div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              sx={{
                bg: "#0a0a0a",
                color: "white",
                display: "grid",
                placeItems: "center",
                width: "100%",
                height: "100%",
                animation: "test 5s 1",
                animationDelay: "2s",
                opacity: "0",
                "@keyframes test": {
                  "0%": { opacity: "0" },
                  "25%": { opacity: "1" },
                  "75%": { opacity: "1" },
                  "100%": { opacity: "0" },
                },
              }}
            >
              <Styled.p sx={{ textTransform: "uppercase" }}>Gratitude</Styled.p>
            </div>
          </div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              sx={{
                bg: "#0a0a0a",
                color: "white",
                display: "grid",
                placeItems: "center",
                width: "100%",
                height: "100%",
                animation: "test 6s 1",
                animationDelay: "3s",
                opacity: "0",
                "@keyframes test": {
                  "0%": { opacity: "0" },
                  "25%": { opacity: "1" },
                  "75%": { opacity: "1" },
                  "100%": { opacity: "0" },
                },
              }}
            >
              <Styled.p sx={{ textTransform: "uppercase" }}>Health</Styled.p>
            </div>
          </div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              sx={{
                bg: "#0a0a0a",
                color: "white",
                display: "grid",
                placeItems: "center",
                width: "100%",
                height: "100%",
                animation: "test 5s 1",
                animationDelay: "6s",
                opacity: "0",
                "@keyframes test": {
                  "0%": { opacity: "0" },
                  "25%": { opacity: "0.8" },
                  "75%": { opacity: "0.8" },
                  "100%": { opacity: "0" },
                },
              }}
            >
              <Styled.p sx={{ textTransform: "uppercase" }}>
                Compassion
              </Styled.p>
            </div>
          </div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            sx={{
              bg: "rgb(10, 10, 10, 0.2)",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
        <Img
          sx={{
            width: "100%",
            height: "80vh",
            gridRow: "1 / -1",
            gridColumn: "1 / -1",
            zIndex: "1",
          }}
          fluid={data.bg.childImageSharp.fluid}
          alt="Cam Howey Portrait"
        />
      </div>
    </Box>
  )
}

export default HeaderHero
