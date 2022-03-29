import { PostMetadata } from '../../shared-types/postAttributes';

export default {
  id: '1',
  attributes: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'teste-1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor fermentum nisl, ut pharetra leo lacinia et. Etiam nec urna sed orci bibendum sodales.',
    allowComments: true,
    createdAt: '2022-03-25T18:18:34.944Z',
    updatedAt: '2022-03-27T20:41:54.493Z',
    tags: {
      data: [
        {
          id: '1',
          attributes: {
            displayName: 'UseContext',
            slug: 'use-context',
          },
        },
        {
          id: '3',
          attributes: {
            displayName: 'UseState',
            slug: 'use-state',
          },
        },
      ],
    },
    categories: {
      data: [
        {
          id: '1',
          attributes: {
            displayName: 'JavaScript',
            slug: 'java-script',
          },
        },
        {
          id: '4',
          attributes: {
            displayName: 'React',
            slug: 'react',
          },
        },
      ],
    },
    author: {
      data: {
        id: '4',
        attributes: {
          displayName: 'Júlia Temari',
          slug: 'julia-temari',
        },
      },
    },
    cover: {
      data: {
        id: '14',
        attributes: {
          url: 'https://res.cloudinary.com/dr5ot2zqr/image/upload/v1648156169/1920x1080_6aaecb929e.jpg',
          alternativeText: '1920x1080 1',
        },
      },
    },
    content:
      '<p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><figure class="table"><table><thead><tr><th>Title 1</th><th>Title 2</th><th>Title 3</th><th>Title 4</th><th>Title 5</th></tr></thead><tbody><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr></tbody></table></figure><blockquote><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl sagittis lectus ornare aliquet. Fusce faucibus, ex quis facilisis congue, magna elit congue nulla,</span></p></blockquote><p>&nbsp;</p><p>&nbsp;</p><figure class="image image-style-side"><img src="https://res.cloudinary.com/dr5ot2zqr/image/upload/v1647892277/800x800_a1b3864dfd.jpg" alt="imagem 9"></figure><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl sagittis lectus ornare aliquet. Fusce faucibus. Imagem ao lado:&nbsp;</span>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl sagittis lectus ornare aliquet. Fusce faucibus, ex quis facilisis congue, magna elit congue nulla, </span>Teste de imagem centralizada</p><p>&nbsp;</p><figure class="image"><img src="https://res.cloudinary.com/dr5ot2zqr/image/upload/v1647892277/800x800_a1b3864dfd.jpg" alt="imagem 9"></figure><p><a href="https://google.com.br">Teste de link</a>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl sagittis lectus ornare aliquet. Fusce faucibus, ex quis facilisis congue, magna elit congue nulla,</i></span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl sagittis lectus ornare aliquet.</strong></span></p><p><code><strong>Teste de código asdasd asad</strong></code></p><pre><code class="language-plaintext">import { PostMetadata } from \'../../shared-types/postAttributes\';\r\nimport { ArticleHeader } from \'../ArticleHeader\';\r\nimport { HtmlContent } from \'../HtmlContent\';\r\nimport * as Styled from \'./styles\';\r\n\r\nexport type PostProps = PostMetadata;\r\n\r\nexport const Post = ({ attributes }: PostProps) =&gt; {\r\n  return (\r\n    &lt;Styled.Wrapper&gt;\r\n      &lt;ArticleHeader {...attributes} /&gt;\r\n      &lt;Styled.Content&gt;\r\n        &lt;HtmlContent html={attributes.content} /&gt;\r\n      &lt;/Styled.Content&gt;\r\n    &lt;/Styled.Wrapper&gt;\r\n  );\r\n};</code></pre><p><strong>Teste de vídeo</strong></p><figure class="media"><oembed url="https://www.youtube.com/watch?v=heRRKDQepy8"></oembed></figure>',
  },
} as PostMetadata;

// const sla =
//   '<pre><code class="language-plaintext">import { PostMetadata } from &apos;../../shared-types/postAttributes&apos;;\r\nimport { ArticleHeader } from &apos;../ArticleHeader&apos;;\r\nimport { HtmlContent } from &apos;../HtmlContent&apos;;\r\nimport * as Styled from &apos;./styles&apos;;\r\n\r\nexport type PostProps = PostMetadata;\r\n\r\nexport const Post = ({ attributes }: PostProps) =&gt; {\r\n  return (\r\n    &lt;Styled.Wrapper&gt;\r\n      &lt;ArticleHeader {...attributes} /&gt;\r\n      &lt;Styled.Content&gt;\r\n        &lt;HtmlContent html={attributes.content} /&gt;\r\n      &lt;/Styled.Content&gt;\r\n    &lt;/Styled.Wrapper&gt;\r\n  );\r\n};</code></pre>';
