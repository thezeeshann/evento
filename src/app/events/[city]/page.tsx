import H1 from "@/components/h1";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};


type EventsPageProps = Props & {
  searchParams:{[key: string]: string | string[] | undefined};
}


export function generateMetadata({params}:Props) : Metadata{
  const city = params.city
  return {
    title: city === "all" ? "All Events" : ` Events in ${capitalize(city)}`,
  }
}


const pageNumberSchema = z.coerce.number().int().positive().optional()

const Page = async ({ params,searchParams }: EventsPageProps) => {
  const city = params.city;
  const parsePage = pageNumberSchema.safeParse(searchParams.page)
  if(!parsePage.success){
    throw new Error("Invalid page number")
  }
  
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-20">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsePage.data} fallback={<Loading/>} >
        <EventList city={city} page={parsePage.data} />
      </Suspense>
    </main>
  );
};

export default Page;
