import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpArrow = memo(
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
          d="M19 1.25q.072 0 .142.014h.005c.148.03.28.103.383.206l3 3A.75.75 0 0 1 22 5.75h-2.25V7.5a4.25 4.25 0 0 1-4.25 4.25 2.75 2.75 0 0 0-2.75 2.75v.824A3.752 3.752 0 0 1 12 22.75a3.75 3.75 0 0 1-.75-7.426V14.5a2.75 2.75 0 0 0-2.75-2.75A4.25 4.25 0 0 1 4.25 7.5V5.75H2a.751.751 0 0 1-.53-1.28l3-3a1 1 0 0 1 .112-.093l.023-.014a.8.8 0 0 1 .245-.098l.009-.001a.8.8 0 0 1 .283 0h.005c.148.03.28.103.383.206l3 3A.75.75 0 0 1 8 5.75H5.75V7.5a2.75 2.75 0 0 0 2.75 2.75c1.452 0 2.733.729 3.5 1.84a4.25 4.25 0 0 1 3.5-1.84 2.75 2.75 0 0 0 2.75-2.75V5.75H16a.75.75 0 0 1-.53-1.28l3-3a1 1 0 0 1 .112-.093l.023-.014a.8.8 0 0 1 .245-.098l.009-.001a1 1 0 0 1 .14-.014m-7 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpArrow.displayName = "FlowSplitUpArrow";
export { FlowSplitUpArrow };
