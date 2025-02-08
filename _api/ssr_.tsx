import { renderToString } from "react-dom/server";
import { OtherFile } from "../src/OtherFile";
import React from "react"

export default async function handler() {
  console.log("Start")
  const appHtml = renderToString(<OtherFile />);
  return new Response(appHtml, {
    status: 200,
  });
}
