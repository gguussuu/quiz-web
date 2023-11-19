const convertHTMLtag = (str: string) => {
  if (str.includes("&#039;")) return (str = str.replace(/&(#039);/g, "'"));
  if (str.includes("&quot;")) return (str = str.replace(/&quot;/g, '"'));
  return str;
};

export default convertHTMLtag;
