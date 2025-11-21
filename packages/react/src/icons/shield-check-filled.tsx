import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldCheckIconFilled = memo(
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
          d="M11.734 1.036c.203-.056.42-.047.618.028l8 3A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.936l8-3zm4.848 7.757a1 1 0 0 0-1.414 0l-4.686 4.685L8.925 11.4a1 1 0 1 0-1.6 1.2l1.696 2.262c.085.114.187.25.285.36.104.117.271.281.52.39.317.14.672.164 1.005.072.262-.073.451-.213.571-.314.113-.095.232-.215.332-.315l4.848-4.848a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldCheckIconFilled.displayName = "ShieldCheckIconFilled";
export { ShieldCheckIconFilled };
