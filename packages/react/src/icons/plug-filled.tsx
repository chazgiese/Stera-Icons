import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugFilled = memo(
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
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M5.466 10.097a1.5 1.5 0 0 1 2.083.037l6.317 6.318A1.5 1.5 0 0 1 14 18.421l-.097.114-.635.682-.025.025a6 6 0 0 1-7.719.648l-2.816 2.817a1 1 0 0 1-1.414-1.414l2.817-2.818a6 6 0 0 1 .647-7.718l.026-.024zM21.293 1.293a1 1 0 1 1 1.414 1.414L19.89 5.524a6 6 0 0 1-.673 7.743l-.683.636a1.5 1.5 0 0 1-2.083-.038l-.951-.95-.793.792a1 1 0 1 1-1.414-1.414l.793-.793L12.5 9.914l-.793.793a1 1 0 1 1-1.414-1.414l.793-.793-.951-.951a1.5 1.5 0 0 1-.038-2.083l.636-.683q.011-.013.024-.026a6 6 0 0 1 7.717-.646z"
        />
      </svg>
    ))
);
PlugFilled.displayName = "PlugFilled";
export { PlugFilled };
