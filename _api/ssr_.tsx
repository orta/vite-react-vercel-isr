import { renderToString } from "react-dom/server";
import { OtherFile } from "../src/OtherFile";
import React from "react"

export default async function handler() {
  console.time("handler");
  // const appHtml = renderToString(<OtherFile />);
  console.timeEnd("handler");
  return new Response("asda", {
    status: 200,
  });
}
