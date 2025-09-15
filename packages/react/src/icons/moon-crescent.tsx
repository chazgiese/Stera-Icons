import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescent = memo(
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
          d="M10.834 1.38a10.16 10.16 0 0 1 4.966-.136 1 1 0 0 1 .243 1.863c-3.208 1.667-4.993 5.542-4.015 9.35.976 3.8 4.356 6.201 7.907 5.973a1 1 0 0 1 .75 1.725 10.4 10.4 0 0 1-4.353 2.465C10.647 24.21 4.86 20.677 3.36 14.836 1.864 9.009 5.167 2.965 10.834 1.38m1.945 1.66a8.3 8.3 0 0 0-1.406.267C6.818 4.58 4.055 9.5 5.298 14.339c1.239 4.825 5.959 7.623 10.496 6.354q.734-.207 1.401-.532c-3.358-.844-6.159-3.525-7.104-7.207-.945-3.678.194-7.445 2.688-9.913"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoonCrescent.displayName = "MoonCrescent";
export { MoonCrescent };
