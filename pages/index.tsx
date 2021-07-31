import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import React from "react";
import Typing from '@/components/Typing'
import Particles from 'react-tsparticles'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    const postsRef = React.useRef<HTMLDivElement>();

  // @ts-ignore
    return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div style={{position: "absolute", width:"100%", left: "0", height: "78vh"}}>
          <Particles style={{height:"78vh"}}
              params={{
                  "particles": {
                      "number": {
                          "value": 150,
                          "density": {
                              "enable": true,
                              "value_area": 1803.4120608655228
                          }
                      },
                      "color": {
                          "value": "#ffffff"
                      },
                      "shape": {
                          "type": "circle",
                          "stroke": {
                              "width": 2,
                              "color": "#000000"
                          },
                          "polygon": {
                              "nb_sides": 4
                          },
                          "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                          }
                      },
                      "opacity": {
                          "value": 0.4008530152163807,
                          "random": false,
                          "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                          }
                      },
                      "size": {
                          "value": 1.5,
                          "random": true,
                          "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                          }
                      },
                      "line_linked": {
                          "enable": true,
                          "distance": 150,
                          "color": "#808080",
                          "opacity": 0.3687847739990702,
                          "width": 0.6413648243462091
                      },
                      "move": {
                          "enable": true,
                          "speed": 4,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                          }
                      }
                  },
                  "interactivity": {
                      "detect_on": "window",
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "repulse"
                          },
                          "onclick": {
                              "enable": false,
                              "mode": "bubble"
                          },
                          "resize": true
                      },
                      "modes": {
                          "grab": {
                              "distance": 400,
                              "line_linked": {
                                  "opacity": 1
                              }
                          },
                          "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                          },
                          "repulse": {
                              "distance": 100,
                              "duration": 0.4
                          },
                          "push": {
                              "particles_nb": 4
                          },
                          "remove": {
                              "particles_nb": 2
                          }
                      }
                  },
                  "retina_detect": true
              }} />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className={"w-full max-w-5xl mx-auto min-h-screen p-20 flex flex-col head head-pad items-center"}>
          <div className={"w-full self-start text-dark-900 dark:text-gray-50"}>
            <h2
                className={
                  "translate-x-1 text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-medium"
                }
            >
              Hello, world!
            </h2>
            <h1
                className={
                  "text-3xl sm:text-5xl md:text-6xl 2xl:text-8xl font-bold"
                }
            >
              <span
                  className={
                    "grad"
                  }
              >
                Welcome
              </span>
                {" "} to my blog!
            </h1>
            <h3 className={"text-2xl sm:text-5xl 2xl:text-7xl mt-3"}>
              <Typing>
                {[
                    "I'm a programmer.",
                    "I'm a web enthusiast.",
                    "I love solving problems.",
                    "Enjoy!"
                ]}
              </Typing>
            </h3>
          </div>
        </div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
