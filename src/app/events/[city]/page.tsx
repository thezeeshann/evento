import H1 from "@/components/h1";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};


export function generateMetadata({params}:Props) : Metadata{
  const city = params.city

  return {
    title: city === "all" ? "All Events" : ` Events in ${capitalize(city)}`,
  }
}

const Page = async ({ params }: Props) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-20">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading/>} >
        <EventList city={city} />
      </Suspense>
    </main>
  );
};

export default Page;
