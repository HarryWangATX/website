import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Particles from 'react-tsparticles'
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import React, {useCallback} from "react";
import Typing from "@/components/Typing";

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}


export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  const postsRef = React.useRef<HTMLHeadingElement>();

  //ts-ignore
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div style={{position: "absolute", width:"100%", left: "0", height: "80vh"}}>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#808080",
                },
                links: {
                  color: "#808080",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
        />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className={"w-full max-w-5xl mx-auto flex flex-col items-center"} style={{padding: "0 5rem 0 5rem", minHeight: '83vh'}}>
          <div className={"w-full self-start text-dark-900 dark:text-gray-50"} style={{position:"relative", top:"50%"}}>
            <h2
                className={
                  "translate-x-1 text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-medium"
                }
            >
              Hello, world!
            </h2>
            <h1
                className={
                  "text-3xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold"
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
          <Link href={"#latest"} style={{display: "flex", justifyContent: "center"}}>
            <a
                aria-hidden={"true"}
                role={"button"}
                onMouseDown={(e) => {
                e.preventDefault()
              postsRef.current.scrollIntoView({ behavior: "smooth" });
            }} className={"focus-invisible absolute animate-bounce"} style={{top: "90%"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="auto" fill="currentColor"
                   className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fillRule={"evenodd"}
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </a>
          </Link>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" ref={postsRef}>
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
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
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
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
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
      {/*{siteMetadata.newsletter.provider !== '' && (*/}
      {/*  <div className="flex items-center justify-center pt-4">*/}
      {/*    <NewsletterForm />*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  )
}
