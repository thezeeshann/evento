import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationProps = {
  previousPath: string;
  nextPath: string;
};

const PaginationControl = ({ previousPath, nextPath }: PaginationProps) => {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link
          href={`${previousPath}`}
          className="flex items-center gap-x-2  hover:opacity-100 transition text-sm text-white px-5 py-3 bg-white/5 rounded-md opacity-75"
        >
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link
          href={`${nextPath}`}
          className="flex items-center gap-x-2  hover:opacity-100 transition text-sm text-white px-5 py-3 bg-white/5 rounded-md opacity-75"
        >
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControl;
