import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  console.log(data)
  return (
    <div>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>author: {data.site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header




// destructring
// const Header = () => {
//     const {site} = useStaticQuery(graphql`
//       {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `)
  
//     console.log(site)
//     return (
//       <div>
//         <h1>title: {site.siteMetadata.title}</h1>
//         <h1>author: {site.siteMetadata.author}</h1>
//       </div>
//     )
//   }
  
//   export default Header





// destructring further
// const Header = () => {
//         const {site:{siteMetadata}} = useStaticQuery(graphql`
//           {
//             site {
//               siteMetadata {
//                 title
//                 description
//                 author
//               }
//             }
//           }
//         `)
      
//         console.log(siteMetadata)
//         return (
//           <div>
//             <h1>title: {siteMetadata.title}</h1>
//             <h1>author: {siteMetadata.author}</h1>
//           </div>
//         )
//       }
      
//       export default Header




// this way of writing query is exactly same as the top one
// const Header = () => {
//     const data = useStaticQuery(graphql`
//       query Koray{
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `)
  
//     console.log(data)
//     return (
//       <div>
//         <h1>title: {data.site.siteMetadata.title}</h1>
//         <h1>author: {data.site.siteMetadata.author}</h1>
//       </div>
//     )
//   }
  
//   export default Header