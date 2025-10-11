import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FootballIconFilled = memo(
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
          d="M12.773 1.465c2.713-.547 5.508-.43 7.769.3.803.26 1.433.89 1.693 1.693.73 2.262.848 5.057.3 7.77-.547 2.717-1.778 5.431-3.827 7.48s-4.763 3.28-7.48 3.827c-2.713.548-5.508.43-7.77-.3a2.63 2.63 0 0 1-1.693-1.693c-.73-2.261-.847-5.056-.3-7.77.549-2.716 1.78-5.43 3.828-7.479s4.763-3.28 7.48-3.828m1.935 5.828a1 1 0 0 0-1.414 1.414l.293.293L12 10.586l-.293-.293a1 1 0 0 0-1.414 1.414l.293.293L9 13.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L10.415 15 12 13.414l.293.293a1 1 0 0 0 1.414-1.414L13.415 12 15 10.414l.293.293a1 1 0 0 0 1.414-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FootballIconFilled.displayName = "FootballIconFilled";
export { FootballIconFilled };
