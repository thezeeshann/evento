import Link from "next/link";
import SearchForm from "@/components/search-form";
import H1 from "@/components/h1";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1> Finds events aroun you</H1>

      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="underline font-bold text-accent italic">10,000</span>{" "}
        events around you
      </p>

      <SearchForm />

      <section className="flex gap-x-4 text-sm text-white/50 mt-4">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
