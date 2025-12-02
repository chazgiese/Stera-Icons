import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenFoldIconFilled = memo(
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
          d="M18 .5a1 1 0 0 1 1 1v1.523c.996.06 2.089.243 3.282.593a1 1 0 0 1 .718.96v13.367a1 1 0 0 1-1.282.96c-3.268-.96-5.515-.464-6.914.2a6.4 6.4 0 0 0-1.555 1.028 4.5 4.5 0 0 0-.433.448l-.008.01h-.001l-.008.008a1 1 0 0 1-.059.072l-.013.015q-.075.08-.167.141l-.027.018-.061.036-.035.018a1 1 0 0 1-.083.037l-.012.005a1 1 0 0 1-.211.051q-.028.004-.056.005l-.038.004-.018-.001L12 21l-.028-.002a1 1 0 0 1-.11-.009 1 1 0 0 1-.312-.096l-.01-.006a1 1 0 0 1-.346-.294l-.003-.003-.007-.01-.077-.09a5 5 0 0 0-.356-.36 6.4 6.4 0 0 0-1.555-1.026c-1.4-.665-3.646-1.16-6.914-.2A1 1 0 0 1 1 17.943V4.575a1 1 0 0 1 .718-.96c3.732-1.096 6.485-.564 8.336.314.461.219.86.457 1.202.692.1-.329.237-.678.425-1.028a5.34 5.34 0 0 1 2.154-2.166C14.881.848 16.244.5 18 .5M9.196 5.736C7.902 5.122 5.882 4.652 3 5.345v11.317c3.088-.643 5.422-.14 7.054.635.35.166.665.343.945.521V7.004a5 5 0 0 0-.248-.24 6.4 6.4 0 0 0-1.555-1.028M19 13.5a1 1 0 0 1-1 1c-1.45 0-2.43.36-3.104.834-.68.478-1.124 1.123-1.413 1.806q-.105.248-.182.497.3-.175.645-.34c1.632-.774 3.966-1.278 7.054-.635V5.345a12.3 12.3 0 0 0-2-.318z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookOpenFoldIconFilled.displayName = "BookOpenFoldIconFilled";
export { BookOpenFoldIconFilled };
