import { NextPage } from "next";
import Hello from "~/components/HelloWorld";
import DataGrid from "~/components/DataGrid";

const Page: NextPage = () => (
    <>
      <Hello />
      <DataGrid />
    </>
  );

export default Page;