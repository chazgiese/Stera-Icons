import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRight = memo(
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
          d="M16.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 .094.946l-.094.114-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5-.094-.114a.75.75 0 0 1 .094-.946l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72h16.38l-3.72-3.72a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowLeftRight.displayName = "ArrowLeftRight";
export { ArrowLeftRight };
