export const formatContent = (html): string => {
  const start = html.indexOf('<oembed url');
  const end = html.lastIndexOf('</ombed>');
  const url = html.slice(start + 13, end);
  const fixedUrl = url.replace('watch?v=', 'embed/');
  const regExp = `<iframe width="560" height="315" src="${fixedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  const stringReplace = /(<figure class="media">)+(.*)(figure>)/g;
  const fixedHtml = html.replace(stringReplace, regExp);
  return fixedHtml.replace("'", '&apos;');
};

// <iframe width="560" height="315" src="https://www.youtube.com/embed/heRRKDQepy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// <p><figure class="media"><oembed url="https://www.youtube.com/watch?v=heRRKDQepy8"></oembed></figure></p>

// const stringTest =
//   '<p><figure class="media"><oembed url="https://www.youtube.com/watch?v=heRRKDQepy8"></oembed></figure></p>';
// const stringReplace = /(<figure class="media">)+(.*)(figure>)/g;
