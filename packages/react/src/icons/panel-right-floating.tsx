import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelRightFloatingIcon = memo(
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
          d="M15 6.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2.499a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 3.25A3.75 3.75 0 0 0 1.25 7v10A3.75 3.75 0 0 0 5 20.75h14A3.75 3.75 0 0 0 22.75 17V7A3.75 3.75 0 0 0 19 3.25zm14 1.5A2.25 2.25 0 0 1 21.25 7v10A2.25 2.25 0 0 1 19 19.25H5A2.25 2.25 0 0 1 2.75 17V7A2.25 2.25 0 0 1 5 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelRightFloatingIcon.displayName = "PanelRightFloatingIcon";
export { PanelRightFloatingIcon };
