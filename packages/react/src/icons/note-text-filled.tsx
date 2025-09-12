const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const NoteTextFilled = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      /*#__PURE__*/ _reactJsxRuntime.jsx("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71v4.274l-.001.334a3.8 3.8 0 0 1-.082.863 3 3 0 0 1-.36.867c-.2.326-.475.593-.787.906l-4.125 4.125c-.313.312-.58.588-.906.788a3 3 0 0 1-.867.359 3.8 3.8 0 0 1-.863.082l-.334.001H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2zm2.6 12c-.558 0-.98 0-1.313.026-.254.021-.455.058-.63.12l-.165.073a2 2 0 0 0-.796.735l-.077.138c-.11.215-.164.463-.192.795C14 16.22 14 16.64 14 17.2v1.834l.001.084a.5.5 0 0 0 .462.462l.084.001h.076a1 1 0 0 0 .697-.32l3.94-3.94.053-.054a1 1 0 0 0 .268-.72v-.084a.5.5 0 0 0-.463-.462L19.034 14zM7 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z",
          clipRule: "evenodd",
        }),
      }))
);
NoteTextFilled.displayName = "NoteTextFilled";
export { NoteTextFilled };
