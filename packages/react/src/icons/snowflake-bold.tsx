import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SnowflakeIconBold = memo(
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
          d="M12 1a1 1 0 0 1 1 1v1.768l1.5-.866a1 1 0 1 1 1 1.732L13 6.077v4.19l3.63-2.094V5.286a1 1 0 1 1 2 0v1.732l1.53-.884a1 1 0 0 1 1 1.732l-1.53.884 1.499.866a1 1 0 1 1-1 1.732l-2.5-1.444L14 12l3.63 2.097 2.5-1.444a1 1 0 1 1 1 1.732l-1.5.866 1.53.884a1 1 0 0 1-1 1.732l-1.53-.884v1.732a1 1 0 1 1-2 0v-2.887L13 13.731v4.19l2.5 1.445a1 1 0 0 1-1 1.732L13 20.23V22a1 1 0 0 1-2 0v-1.769l-1.5.867a1 1 0 0 1-1-1.732l2.5-1.444v-4.19l-3.627 2.095-.001 2.887a1.001 1.001 0 0 1-2 0V16.98l-1.532.885a1 1 0 0 1-1-1.732l1.532-.884-1.5-.866a1 1 0 0 1 1-1.732l2.5 1.443 3.63-2.096-3.63-2.094-2.5 1.443a1 1 0 0 1-1-1.732l1.5-.866-1.532-.884a1 1 0 0 1 1-1.732l1.532.885V5.286a1.001 1.001 0 0 1 2 0v2.887L11 10.268v-4.19L8.5 4.633a1 1 0 0 1 1-1.732l1.5.866V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
SnowflakeIconBold.displayName = "SnowflakeIconBold";
export { SnowflakeIconBold };
