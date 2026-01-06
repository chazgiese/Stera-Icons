import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapIconBoldDuotone = memo(
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
          <path d="m16.333 18.232-1 .601-1-.6V8.564l.485.292a1 1 0 0 0 1.03 0l.485-.292zM9.667 5.767v9.667l-.485-.291a1 1 0 0 0-.908-.063l-.122.063-.485.29V5.766l.999-.599z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.485 3.143A1 1 0 0 1 23 4v12a1 1 0 0 1-.485.857l-6.667 4a1 1 0 0 1-1.03 0l-6.152-3.691-6.151 3.691A1.001 1.001 0 0 1 1 20V8a1 1 0 0 1 .485-.857l6.667-4 .122-.063c.293-.125.63-.104.908.063l6.151 3.69zM3 8.565v9.668l5.152-3.09.122-.063a1 1 0 0 1 .908.063l6.151 3.69 5.667-3.4V5.767l-5.152 3.091a1 1 0 0 1-1.03 0L8.666 5.166z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapIconBoldDuotone.displayName = "MapIconBoldDuotone";
export { MapIconBoldDuotone };
