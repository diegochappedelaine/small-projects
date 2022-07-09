import type { NextPage } from 'next';
import { Layout, Link } from 'components';
import { routesWithouthomePageRoute as routes } from 'core';

const Index: NextPage = () => {
  return (
    <Layout title="Small projects">
      {routes.map(({ title, path }) => (
        <Link href={path} key={`link-to-${path}`}>
          {title}
        </Link>
      ))}
    </Layout>
  );
};

export default Index;
