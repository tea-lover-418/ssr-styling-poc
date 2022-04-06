import type { NextPage } from "next";
import { Button, SecondaryButton } from "../shared/components/button";
import { serverSidePropsFactory } from "../shared/server-side-props-factory";

const Home: NextPage = () => {
  return (
    <div>
      <Button> Main </Button>
      <SecondaryButton> Secondary! </SecondaryButton>
    </div>
  );
};

export const getServerSideProps = serverSidePropsFactory();

export default Home;
