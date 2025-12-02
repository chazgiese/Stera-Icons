import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkOffIconBold = memo(
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
          d="M5.402 10.356a1 1 0 0 1 1.414 1.414l-1.695 1.696a3.828 3.828 0 0 0 5.413 5.413l1.696-1.695a1 1 0 1 1 1.414 1.414l-1.696 1.695a5.827 5.827 0 0 1-8.241-8.241zM3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M12.052 3.707a5.827 5.827 0 1 1 8.24 8.241l-1.695 1.697a1 1 0 0 1-1.414-1.414l1.696-1.697a3.828 3.828 0 0 0-5.413-5.413l-1.697 1.696a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
LinkOffIconBold.displayName = "LinkOffIconBold";
export { LinkOffIconBold };
