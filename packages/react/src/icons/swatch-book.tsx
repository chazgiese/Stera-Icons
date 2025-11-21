import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SwatchBookIcon = memo(
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
          d="M7 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 2.25A2.75 2.75 0 0 1 11.75 5v.533l.377-.377a2.75 2.75 0 0 1 3.889 0l2.829 2.828a2.75 2.75 0 0 1 0 3.889l-.377.377H19A2.75 2.75 0 0 1 21.75 15v4A2.75 2.75 0 0 1 19 21.75l-11.861-.002L7 21.75a4.5 4.5 0 0 1-.733-.059l-.077-.01-.101-.02q-.063-.014-.127-.026a4.7 4.7 0 0 1-.872-.285l-.015-.006A4.76 4.76 0 0 1 2.25 17V5A2.75 2.75 0 0 1 5 2.25zm-4 1.5c-.69 0-1.25.56-1.25 1.25v12c0 .516.12 1.001.332 1.433q.03.059.062.116.03.057.065.114a3.3 3.3 0 0 0 .686.813 3.3 3.3 0 0 0 .944.56 3.2 3.2 0 0 0 1.09.213L7 20.25l.096-.001a3.3 3.3 0 0 0 1.277-.304l.025-.011a3 3 0 0 0 .414-.237l.025-.017a3 3 0 0 0 .286-.223q.194-.167.36-.362.015-.019.032-.036a3.3 3.3 0 0 0 .49-.82A3.2 3.2 0 0 0 10.25 17V5c0-.69-.56-1.25-1.25-1.25zm5.469 16.498L19 20.25c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-2.032zm4.486-14.031a1.25 1.25 0 0 0-1.767 0L11.75 7.654v9.192l6.033-6.033a1.25 1.25 0 0 0 0-1.768z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SwatchBookIcon.displayName = "SwatchBookIcon";
export { SwatchBookIcon };
