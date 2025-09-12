const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ScanCubeFilled = memo(
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
          d: "M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M4.937 9.438c.158-.02.307.06.603.22l5.459 2.939v5.847c0 .304 0 .457-.072.576a.53.53 0 0 1-.4.24c-.14.007-.267-.06-.52-.197l-3.299-1.776c-.55-.296-1.036-.544-1.396-.929a3 3 0 0 1-.658-1.1c-.167-.5-.155-1.044-.155-1.67V10.24c0-.31 0-.466.093-.596a.54.54 0 0 1 .345-.207M18.853 9.456c.256-.079.58.112.635.375.01.048.01.075.011.126v4.086c-.004.44-.03.84-.155 1.215-.138.41-.362.785-.658 1.1-.36.385-.846.633-1.396.93l-3.3 1.776c-.251.135-.377.203-.517.196a.53.53 0 0 1-.4-.24c-.074-.12-.074-.272-.074-.576v-5.846l5.707-3.074c.066-.035.1-.054.146-.068M11.41 4.33c.389-.078.79-.078 1.178 0 .473.095.903.338 1.402.607l3.3 1.776.11.058c.286.154.428.231.498.383a.54.54 0 0 1 0 .417c-.07.152-.224.237-.534.404L12 10.863l-5.365-2.89c-.31-.166-.464-.249-.534-.4a.55.55 0 0 1 0-.419c.07-.152.213-.228.498-.382l.11-.06 3.3-1.775c.499-.27.929-.512 1.402-.607M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z",
        }),
      }))
);
ScanCubeFilled.displayName = "ScanCubeFilled";
export { ScanCubeFilled };
