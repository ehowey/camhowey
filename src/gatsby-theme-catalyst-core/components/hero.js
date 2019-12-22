/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const HeaderHero = () => {
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
      <Styled.h1>Merry Christmas Dad!</Styled.h1>
      <Styled.p>
        I figured with all of your work on gratitude, health and giving you
        needed a better way to share all of that important information with the
        world! Hopefully we can work together to make this an easy to use place
        for you to post some of this information for everyone to see!
      </Styled.p>
    </section>
  )
}

export default HeaderHero
