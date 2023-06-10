import React from "react";
import Image from "next/image";
import { Link } from "@chakra-ui/core";

export default function Alex() {
  return (
    <div
      style={{
        marginTop: "10vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          boxShadow: "0 0 10px 10px #000000",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Image src="/fatlex.jpg" alt="Alex" width={200} height={200} />
        <br />
        <Link href="https://cex.dev">cex.dev</Link>
      </div>
    </div>
  );
}
