import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControl from "./pagination-control";

type EventListProps = {
  city: string;
  page?: number;
};

const EventList = async ({ city, page }: EventListProps) => {
  const {events,totalCount} = await getEvents(city, page=1);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
      <PaginationControl previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventList;
