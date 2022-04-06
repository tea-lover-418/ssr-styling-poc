import type { NextPage } from "next";
import { Button } from "../shared/components/button";
import { serverSidePropsFactory } from "../shared/server-side-props-factory";

const Home: NextPage = () => {
  return (
    <div>
      <Button color="primary"> Main </Button>
      <Button color="secondary"> Secondary </Button>
    </div>
  );
};

export const getServerSideProps = serverSidePropsFactory();

export default Home;
