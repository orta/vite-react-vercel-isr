import { renderToPipeableStream } from "react-dom/server";
import { OtherFile } from "../src/OtherFile";
import React from "react"

export default async function handler(request, response) {
  const { pipe } = renderToPipeableStream(<OtherFile />, {
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    },
    onError(error) {
      console.error(error);
    }
  });
}
