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
        <p>Hi, I'm <strong>An</strong>, a sophmore at the University of Maryland College Park.
        I have experience with Express, React, NextJS, typescript, Tailwind CSS, MongoBD, 
        javascript, html, css, java, and C, and I am currently learning prisma, mySQL, TRPC
        and looking forward to learning more!</p>
        <br></br>
        <p>Wanting to help out at my parents nail salon, I built a full stack 
          app where users or clients could book appointments with nail technicians
          because I saw that the process they had in place for booking appointments
          was too choatic and could be automized. I used the T3 tech stack 
          (nextjs, tRPC, tailwind, typescript, prisma) and managed user authentification
          and authorization and encryption. You can read more about that 
          <Link href="/posts/pre-rendering.md-post">here!</Link>
        </p>
      </section>
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
