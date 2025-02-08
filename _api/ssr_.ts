import { renderToString } from "react-dom/server";
import { OtherFile } from "../src/OtherFile";
// export const edge = true;

export default async function handler() {
  const appHtml = renderToString(OtherFile());
  return new Response(appHtml, {
    status: 200,
  });
}
