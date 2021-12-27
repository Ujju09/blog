import * as React from "react"
import Header from "../Components/Header";
import Navigation from "../Components/Navigation.js";
import BlogPostLayout from "../Components/BlogPost.js";
import { graphql, useStaticQuery } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Footer from "../Components/Footer.js";






const Bold = ({ children }) => <span className="text-xl font-bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}





export default function Blogs(){

    const contentFulData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulEntry {
        nodes {
          ... on ContentfulBlog {
            id
            contentful_id
            author
            posted(formatString: "DD-MM-YYYY")
            content {
              raw
            }
            title
          }
        }
      }
    }
    
    `);
    
    const data = contentFulData.allContentfulEntry.nodes;

  

    return (
        <main>
            <Header/>
            <Navigation/>
            {data.map((cms) => (            
              <BlogPostLayout title = {cms.title} date = {cms.posted} tags="tagA, tagB" article= {renderRichText(cms.content,options)} /> 
            ))}
            <Footer/>
        </main>
    );
}