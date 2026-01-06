import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SwatchBookIconDuotone = memo(
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
          fillRule="evenodd"
          d="M12.127 5.157a2.75 2.75 0 0 1 3.889 0l2.829 2.828a2.75 2.75 0 0 1 0 3.89l-.376.375H19A2.75 2.75 0 0 1 21.75 15v4A2.75 2.75 0 0 1 19 21.75H6.896l-.106-.006q.105.005.21.006A4.75 4.75 0 0 0 11.75 17v-.154l6.033-6.033a1.25 1.25 0 0 0 0-1.768l-2.828-2.828a1.25 1.25 0 0 0-1.767 0L11.75 7.655V5.533zm-1.66 15.093H19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-2.032z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 2.25A2.75 2.75 0 0 1 11.75 5v12a4.75 4.75 0 1 1-9.5 0V5A2.75 2.75 0 0 1 5 2.25zm-4 1.5c-.69 0-1.25.56-1.25 1.25v12a3.25 3.25 0 0 0 6.5 0V5c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SwatchBookIconDuotone.displayName = "SwatchBookIconDuotone";
export { SwatchBookIconDuotone };
