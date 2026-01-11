import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollTextIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M16.5 5a1 1 0 0 1 1 1v9h-6.25a1.75 1.75 0 0 0-1.75 1.75V18a1 1 0 0 1-.897.995L8.5 19a1 1 0 0 1-1-1V6c0-.351-.063-.687-.174-1zM10 10.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
          />
          <path d="M20.5 18a1 1 0 0 1-1 1h-8.174c.11-.313.174-.649.174-1v-1h9zM4.5 5a1 1 0 0 1 1 1v2.5h-2V6a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.75 15c.966 0 1.75.784 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25A1.75 1.75 0 0 1 1.5 8.75V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9zm-3.25 0V6a1 1 0 0 0-1-1H7.326c.11.313.174.649.174 1v12a1 1 0 0 0 1 1l.103-.005A1 1 0 0 0 9.5 18v-1.25c0-.966.784-1.75 1.75-1.75zm-6 3c0 .351-.063.687-.174 1H19.5a1 1 0 0 0 1-1v-1h-9zm-7-13a1 1 0 0 0-1 1v2.5h2V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13.5 10.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM15 7.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScrollTextIconFillDuotone.displayName = "ScrollTextIconFillDuotone";
export { ScrollTextIconFillDuotone };
