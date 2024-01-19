import grayMatter from "gray-matter";

async function getMetadataFromBlog(urls) {
  const metadataList = [];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const markdownText = await response.text();
      const parsedMarkdown = grayMatter(markdownText);
      metadataList.push(parsedMarkdown.data);
    } catch (error) {
      console.error("Error fetching markdown content:", error);
    }
  }

  return metadataList;
}

async function getContentFromBlog(url) {
  try {
    const response = await fetch(url);
    const markdownText = await response.text();
    const parsedMarkdown = grayMatter(markdownText);
    return parsedMarkdown.content;
  } catch (error) {
    console.error("Error fetching markdown content:", error);
  }
}

export { getMetadataFromBlog, getContentFromBlog };
