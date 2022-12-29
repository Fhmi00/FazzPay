import React from "react";
import { useRouter } from "next/router";

function DetailUser() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return (
    <div>
      <h1>DetailUser</h1>
    </div>
  );
}

export default DetailUser;
