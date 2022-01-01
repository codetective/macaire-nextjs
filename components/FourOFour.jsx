import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

function NotFound() {
  return (
    <>
      {" "}
      <div className="not_found_container">
        <div className="not_found_error">404</div>

        <div className="not_found_info">
          <span>
            Page not found
            <br /> Our developers may be tired or sleeping at the moment.
            <br /> Page may still be in development.
            <br />
            Let's go
          </span>
          <Link href="/">
           
            <Button as="a" size="sm">
              Home
            </Button>
          </Link>
          and try from there.
        </div>
      </div>
    </>
  );
}

export default NotFound;
