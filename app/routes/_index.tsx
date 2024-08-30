import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Nikhil Prabhu | Developer + Engineer" },
    {
      name: "description",
      content:
        "The portfolio of Nikhil Prabhu - a Developer and DevOps/Cloud Engineer working on building optimized cloud automation solutions and utilities.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="h-screen snap-start bg-red-100 m-0">Screen 1</div>
      <div className="h-screen snap-start bg-green-100 m-0">Screen 2</div>
      <div className="h-screen snap-start bg-blue-100 m-0">Screen 3</div>
      <div className="h-screen snap-start bg-gray-100 m-0">Screen 4</div>
    </>
  );
}
