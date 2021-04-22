import { Suspense } from "react";

let promise;

function Suspend() {
  if (!promise) {
    promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    throw promise;
  } else {
    promise = null;
  }

  return <div>suspend</div>;
}

export default function render() {
  return (
    <div>
      <div>123</div>
      <Suspense fallback={<div>loading...</div>}>
        <Suspend />
      </Suspense>
    </div>
  );
}
