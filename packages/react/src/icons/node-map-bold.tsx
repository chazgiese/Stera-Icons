import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NodeMapIconBold = memo(
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
          d="M7.25 2a3.25 3.25 0 0 1 2.596 5.202l1.192 1.694a3.25 3.25 0 0 1 3.618 1.232L16 9.71a3.25 3.25 0 1 1 .593 1.91l-1.345.418c-.005.418-.09.816-.24 1.182l1.516 1.274a3.25 3.25 0 1 1-1.284 1.533l-1.515-1.274c-.5.313-1.091.496-1.725.496a3.24 3.24 0 0 1-1.78-.531l-2.937 2.369a3.25 3.25 0 1 1-1.255-1.558l2.938-2.369a3.24 3.24 0 0 1 .437-3.114L8.211 8.354A3.246 3.246 0 0 1 4 5.25 3.25 3.25 0 0 1 7.25 2m-3 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m14-1c-.384 0-.726.172-.957.446A1.25 1.25 0 1 0 18.25 16M12 10.75a1.247 1.247 0 0 0-.974 2.034c.231.286.581.466.974.466.384 0 .726-.172.957-.446a1.24 1.24 0 0 0 .237-1.175A1.25 1.25 0 0 0 12 10.75m7.25-2.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NodeMapIconBold.displayName = "NodeMapIconBold";
export { NodeMapIconBold };
