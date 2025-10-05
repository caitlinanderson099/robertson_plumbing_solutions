import { useEffect } from "react";

const SEO = ({ title, description, keywords, author }) => {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    if (keywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    if (author) {
      let metaAuthor = document.querySelector("meta[name='author']");
      if (!metaAuthor) {
        metaAuthor = document.createElement("meta");
        metaAuthor.name = "author";
        document.head.appendChild(metaAuthor);
      }
      metaAuthor.content = author;
    }
  }, [title, description, keywords, author]);

  return null; // no actual JSX rendered
};

export default SEO;
