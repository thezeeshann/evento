import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

type EventListProps = {
  city: string;
};

const EventList = async ({ city }: EventListProps) => {

  const events = await getEvents(city);
  
  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
};

export default EventList;
