import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIcon = memo(
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
          d="M20.292 8.651a.75.75 0 0 1 1.33.698 10 10 0 0 1-1.506 2.125l1.894 1.754a.75.75 0 0 1-1.02 1.1l-1.971-1.827a10.9 10.9 0 0 1-3.514 1.897l.693 2.394a.75.75 0 0 1-1.441.416l-.708-2.446c-.664.12-1.349.185-2.049.185s-1.386-.065-2.05-.185l-.707 2.446a.75.75 0 0 1-1.44-.416l.691-2.395a10.9 10.9 0 0 1-3.513-1.896L3.01 14.328a.75.75 0 1 1-1.02-1.1l1.893-1.754a10 10 0 0 1-1.504-2.125.75.75 0 0 1 1.33-.698c1.142 2.18 3.278 3.853 5.885 4.501l.039.01.009.003a10 10 0 0 0 4.716 0l.01-.003.037-.01c2.607-.648 4.745-2.321 5.887-4.5"
        />
      </svg>
    ))
);
EyeClosedIcon.displayName = "EyeClosedIcon";
export { EyeClosedIcon };
