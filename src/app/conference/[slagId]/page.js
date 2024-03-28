/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Conference from "@/components/conferencePage/Conference";
import { useParams } from "next/navigation";

export default function page({ params }) {
  const { slagId } = useParams();

  return (
    <>
      <Conference slagId={slagId} />
    </>
  );
}
