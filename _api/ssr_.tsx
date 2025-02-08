import { renderToPipeableStream, renderToString } from "react-dom/server";
import { OtherFile } from "../src/OtherFile";
import React from "react"

export default async function handler(request, response) {
  console.time("handler");
  const { pipe } = renderToPipeableStream(<OtherFile />, {
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  });
  console.timeEnd("handler");
  // return new Response("asda", {
  //   status: 200,
  // });
}
