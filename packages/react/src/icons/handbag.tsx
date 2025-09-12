var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Handbag = memo(
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
          d: "M12 2a5 5 0 0 1 5 5v1.042c.444.04.84.116 1.207.27a4 4 0 0 1 1.652 1.29c.513.685.717 1.582 1.02 2.792l.6 2.399c.25.999.453 1.811.558 2.474.106.67.132 1.3-.058 1.914a4 4 0 0 1-1.749 2.24c-.549.332-1.168.46-1.843.52-.667.06-1.506.059-2.535.059H8.147c-1.029 0-1.867 0-2.535-.059-.675-.06-1.294-.187-1.843-.52a4 4 0 0 1-1.749-2.24c-.19-.614-.163-1.245-.057-1.914.104-.663.308-1.476.557-2.474l.6-2.4c.303-1.21.508-2.106 1.02-2.79a4 4 0 0 1 1.653-1.29c.367-.155.763-.231 1.207-.271V7a5 5 0 0 1 5-5m-3.252 8c-1.433 0-1.855.02-2.18.156-.329.138-.614.36-.827.645-.212.283-.332.687-.68 2.077l-.6 2.4c-.259 1.035-.436 1.747-.524 2.301-.086.547-.063.825-.006 1.012a2 2 0 0 0 .874 1.12c.168.101.432.19.984.238C6.348 20 7.08 20 8.147 20h7.705c1.066 0 1.8-.001 2.359-.05.551-.05.816-.138.983-.24a2 2 0 0 0 .874-1.12c.058-.186.08-.464-.006-1.01-.087-.555-.265-1.267-.523-2.302l-.6-2.4c-.348-1.39-.468-1.794-.68-2.077a2 2 0 0 0-.827-.645c-.326-.137-.748-.156-2.18-.156zM12 4a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3",
          clipRule: "evenodd",
        }),
      }))
);
Handbag.displayName = "Handbag";
export { Handbag };
export default Handbag;
