import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarIconFilled = memo(
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
          d="M10.56 1.946c.528-1.22 2.224-1.26 2.825-.116l.055.116 2.311 5.347 5.825.538c1.364.126 1.93 1.826.889 2.737l-4.393 3.843 1.286 5.677c.306 1.35-1.154 2.386-2.328 1.693L12 18.806l-5.03 2.975c-1.174.694-2.634-.343-2.328-1.693l1.285-5.677-4.392-3.843c-1.04-.91-.475-2.61.889-2.737l5.824-.538z"
        />
      </svg>
    ))
);
StarIconFilled.displayName = "StarIconFilled";
export { StarIconFilled };
