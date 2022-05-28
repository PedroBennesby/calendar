import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calendar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1>
          <Link href='/calendar'>Calendar</Link>
        </h1>
      </div>
    </div>
  );
}
