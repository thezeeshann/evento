import React from "react";
import { EventoEvent } from "@/lib/type";
import EventCard from "./event-card";

type EventListProps = {
  events: EventoEvent[];
};

const EventList = ({ events }: EventListProps) => {
  return <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center"> 
    {
        events.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })
  
    }
  </section>;
};

export default EventList;
