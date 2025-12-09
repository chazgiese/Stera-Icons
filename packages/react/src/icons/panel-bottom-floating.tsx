import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelBottomFloatingIcon = memo(
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
          d="M17.498 11a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75A2.25 2.25 0 0 0 2.75 7v10A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17V7A2.25 2.25 0 0 0 19 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelBottomFloatingIcon.displayName = "PanelBottomFloatingIcon";
export { PanelBottomFloatingIcon };
