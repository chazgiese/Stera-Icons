import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUpIconBold = memo(
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
          d="M13 2c1.174 0 2.123.381 2.795 1.1.647.694.935 1.595 1.032 2.46.127 1.134-.054 2.373-.37 3.44h.615c2.638 0 4.554 2.508 3.86 5.053l-1.365 5A4 4 0 0 1 15.71 22H8a5 5 0 0 1-5-5v-4a4 4 0 0 1 4-4c.878 0 1.688-.47 2.124-1.232l3.008-5.264.073-.111A1 1 0 0 1 13 2m-2.14 6.76a4.44 4.44 0 0 1-2.36 1.977V17a3 3 0 0 0 3 3h4.209a2 2 0 0 0 1.929-1.474l1.364-5A2 2 0 0 0 17.072 11H15a1 1 0 0 1-.895-1.447c.487-.974.874-2.53.735-3.77-.069-.61-.252-1.045-.507-1.318-.163-.175-.404-.333-.784-.411zM6.5 11.065A2 2 0 0 0 5 13v4a3 3 0 0 0 2.465 2.951A4.98 4.98 0 0 1 6.5 17z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThumbsUpIconBold.displayName = "ThumbsUpIconBold";
export { ThumbsUpIconBold };
