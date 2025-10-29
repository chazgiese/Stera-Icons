import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FootballIconFilltone = memo(
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
          d="M12.773 1.465c2.713-.547 5.508-.43 7.77.3.803.26 1.432.89 1.692 1.693.73 2.262.848 5.056.3 7.77-.548 2.717-1.78 5.43-3.828 7.48-2.049 2.048-4.763 3.279-7.48 3.827-2.713.548-5.508.43-7.769-.3a2.63 2.63 0 0 1-1.692-1.694c-.73-2.261-.848-5.055-.301-7.768.548-2.717 1.78-5.431 3.828-7.48 2.049-2.048 4.763-3.28 7.48-3.828m1.934 5.828a1 1 0 1 0-1.414 1.414l.293.293L12 10.586l-.293-.293a1 1 0 1 0-1.414 1.414l.293.293L9 13.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L10.414 15 12 13.414l.293.293a1 1 0 0 0 1.414-1.414L13.414 12 15 10.414l.293.293a1 1 0 0 0 1.414-1.414z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.293 7.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L15 10.414 13.414 12l.293.293a1 1 0 0 1-1.414 1.414L12 13.414 10.414 15l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 1 1 1.414-1.414l.293.293L10.586 12l-.293-.293a1 1 0 0 1 1.414-1.414l.293.293L13.586 9l-.293-.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
FootballIconFilltone.displayName = "FootballIconFilltone";
export { FootballIconFilltone };
