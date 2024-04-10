import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btbStyles =
  "flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

function PaginationControls({
  nextPath,
  previousPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link className={btbStyles} href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath ? (
        <Link className={btbStyles} href={nextPath}>
          Next <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}

export default PaginationControls;
