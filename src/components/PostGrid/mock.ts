import { PostsProps } from '../../shared-types/postAttributes';

export default {
  posts: {
    data: [
      {
        id: '2',
        attributes: {
          title: 'Teste 2',
          slug: 'teste-2',
          excerpt: 'Teste de post 2.',
          allowComments: false,
          createdAt: '2022-03-25T18:28:16.052Z',
          updatedAt: '2022-03-25T18:29:04.677Z',
          tags: {
            data: [
              {
                id: '2',
                attributes: {
                  displayName: 'UseRef',
                  slug: 'use-ref',
                },
              },
              {
                id: '4',
                attributes: {
                  displayName: 'Postgres',
                  slug: 'postgres',
                },
              },
            ],
          },
          categories: {
            data: [
              {
                id: '5',
                attributes: {
                  displayName: 'Django',
                  slug: 'django',
                },
              },
            ],
          },
          author: {
            data: {
              id: '2',
              attributes: {
                displayName: 'Luísa Santiago',
                slug: 'luisa-santiago',
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
            '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.</p><p>To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.</p>',
        },
      },
      {
        id: '1',
        attributes: {
          title: 'Teste 1',
          slug: 'teste-1',
          excerpt: 'Teste de excerpt.',
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
            '<p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><figure class="table"><table><thead><tr><th>Title 1</th><th>Title 2</th><th>Title 3</th><th>Title 4</th><th>Title 5</th></tr></thead><tbody><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr></tbody></table></figure><blockquote><p>Teste de citação</p></blockquote><p>&nbsp;</p><p>Teste de foto ao lado</p><figure class="image"><img src="https://res.cloudinary.com/dr5ot2zqr/image/upload/v1647892307/800x800_74f76986f2.jpg" alt="imagem 11"></figure><p>&nbsp;</p><p>Teste de imagem centralizada</p><p>&nbsp;</p><p>&nbsp;</p><figure class="image"><img src="https://res.cloudinary.com/dr5ot2zqr/image/upload/v1647892277/800x800_a1b3864dfd.jpg" alt="imagem 9"></figure><p><a href="https://google.com.br">Teste de link</a></p><p>&nbsp;</p><p><i>Itálico</i></p><p>&nbsp;</p><p><strong>Negrito</strong></p><p>&nbsp;</p><p><code><strong>Teste de código</strong></code></p><p>&nbsp;</p><pre><code class="language-plaintext">Teste de bloco de código</code></pre><p>&nbsp;</p><p><strong>Teste de vídeo</strong></p><p>&nbsp;</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=qF1DTK4U1AM"></oembed></figure>',
        },
      },
    ],
  },
} as PostsProps;
