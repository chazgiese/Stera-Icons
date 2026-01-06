import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapIconDuotone = memo(
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
          d="M21.614 3.356A.75.75 0 0 1 22.75 4v12a.75.75 0 0 1-.364.644l-6.667 4a.75.75 0 0 1-.772 0l-6.281-3.769-6.28 3.769A.75.75 0 0 1 1.25 20V8a.75.75 0 0 1 .364-.644l6.667-4 .091-.045a.75.75 0 0 1 .68.045l6.281 3.768zM2.75 8.425v10.25l5.531-3.318.091-.046a.75.75 0 0 1 .68.046l6.281 3.767 5.917-3.55V5.324l-5.531 3.32a.75.75 0 0 1-.772 0L8.666 4.875z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="m16.084 18.673-.751.451-.749-.45V8.424l.363.22a.75.75 0 0 0 .772 0l.365-.22zM9.417 5.325v10.25l-.364-.219a.75.75 0 0 0-.68-.046l-.092.046-.365.22V5.323l.75-.449z" />
        </g>
      </svg>
    ))
);
MapIconDuotone.displayName = "MapIconDuotone";
export { MapIconDuotone };
