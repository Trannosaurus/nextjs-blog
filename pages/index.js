import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        Hey, I'm <strong>An Tran</strong>, a passionate computer science student with a knack for turning ideas into reality. Armed with a solid academic foundation and hands-on experience, I've honed my skills in algorithms, web development, and computer systems. As a Lead Frontend Developer at Sociable AI, I've driven user engagement through automation and optimized web app performance using Next.js, Tailwind, and React. My innovative spirit shines in projects like AnonPlay—a WebRTC-powered Single Page Application that hosts private watch parties, emphasizing real-time interactions.
      </section>
      <section className={utilStyles.headingMd}>
        My expertise spans languages like OCaml and frameworks like Next.js, culminating in creations like MicroCaml—a testament to my grasp of dynamic languages. Beyond coding, I thrive in collaborative environments. At Nail Art & Spa, I spearheaded a full-stack Next.js app, streamlining booking processes and skillfully managing user data. I'm not just a developer; I'm a problem solver, an innovator, and a valuable team player. Join me as I continue to explore new horizons and craft remarkable digital experiences.
      </section>
      <iframe width="610" height="350"
        src="https://www.youtube.com/embed/zmFZA_wiAf4">
      </iframe>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
