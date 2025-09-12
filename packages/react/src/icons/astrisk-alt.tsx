var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const AstriskAlt = memo(
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
          d: "M12 2c.598 0 1.162.211 1.55.586.387.375.584.884.45 1.414q-.1.4-.19.8a33 33 0 0 0-.76 5.387 33 33 0 0 0 4.886-3.915c.392-.38.93-.464 1.449-.317.518.148.983.531 1.282 1.049s.399 1.112.268 1.636c-.132.522-.474.946-1 1.096a33.134 33.134 0 0 0-5.825 2.269 33 33 0 0 0 5.82 2.268c.526.15.868.574 1 1.096.13.524.031 1.117-.268 1.635s-.763.901-1.282 1.05c-.518.147-1.056.063-1.45-.318q-.296-.285-.597-.563a33 33 0 0 0-4.28-3.347A33 33 0 0 0 14 20c.133.53-.063 1.039-.45 1.414-.388.375-.952.586-1.55.586s-1.162-.21-1.55-.586c-.386-.375-.583-.884-.45-1.414q.1-.4.19-.8.602-2.685.755-5.369a33 33 0 0 0-4.866 3.905c-.392.381-.932.465-1.45.318-.519-.149-.983-.532-1.282-1.05s-.399-1.112-.268-1.635c.132-.522.474-.947 1-1.096q.396-.114.788-.236a33 33 0 0 0 5.035-2.032 33 33 0 0 0-5.828-2.269c-.526-.15-.868-.574-1-1.096-.13-.524-.031-1.118.268-1.636s.764-.9 1.282-1.049c.518-.147 1.058-.063 1.45.317q.297.288.598.565a33 33 0 0 0 4.276 3.345A33 33 0 0 0 10 4c-.133-.53.063-1.039.45-1.414C10.838 2.21 11.402 2 12 2",
        }),
      }))
);
AstriskAlt.displayName = "AstriskAlt";
export { AstriskAlt };
export default AstriskAlt;
