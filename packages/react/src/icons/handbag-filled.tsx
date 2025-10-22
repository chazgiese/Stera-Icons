import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandbagIconFilled = memo(
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
          d="M12 2a5 5 0 0 1 5 5v1.042c.444.04.84.116 1.207.27a4 4 0 0 1 1.652 1.29c.513.685.717 1.582 1.02 2.792l.6 2.399c.25.999.453 1.811.558 2.474.106.67.132 1.3-.058 1.914a4 4 0 0 1-1.749 2.24c-.549.332-1.167.46-1.843.52-.667.06-1.505.059-2.535.059H8.147c-1.029 0-1.867 0-2.535-.059-.675-.06-1.294-.187-1.843-.52a4 4 0 0 1-1.749-2.24c-.19-.614-.163-1.245-.057-1.914.104-.663.308-1.476.557-2.474l.6-2.4c.303-1.21.508-2.106 1.02-2.79a4 4 0 0 1 1.653-1.29c.367-.155.763-.231 1.207-.271V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandbagIconFilled.displayName = "HandbagIconFilled";
export { HandbagIconFilled };
