import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const {desktopHero, mobileHero} = useStaticQuery(graphql`
		query {
			desktopHero: file(relativePath: {eq: "home_desktop.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
						}
					}
				}

			mobileHero: file(relativePath: {eq: "home_mobile.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 768) {
						...GatsbyImageSharpFluid
						}
				}
			}
		}
	`);
	
	return (
		<Img 
			fluid={[
				mobileHero.childImageSharp.fluid, // 2x3 aspect ratio
				{
					...desktopHero.childImageSharp.fluid, // 16x9 aspect ratio
					media: '(min-width: 769px)'
				}
      ]}
			placeholderStyle={{ background: "#2D2A32" }} 
		/>
	);
}

export default Image
