import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashCircleIconDuotone = memo(
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
          d="M14 6.25a.75.75 0 0 1 .75.75v2.25H17a.75.75 0 0 1 0 1.5h-2.25v2.5H17a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25h-2.5V17a.75.75 0 0 1-1.5 0v-2.25H7a.75.75 0 0 1 0-1.5h2.25v-2.5H7a.75.75 0 0 1 0-1.5h2.25V7a.75.75 0 0 1 1.5 0v2.25h2.5V7a.75.75 0 0 1 .75-.75m-3.25 7h2.5v-2.5h-2.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
HashCircleIconDuotone.displayName = "HashCircleIconDuotone";
export { HashCircleIconDuotone };
