import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TruckIconDuotone = memo(
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
          <path d="M14 16.25a3.24 3.24 0 0 0-.24 1.5h-3.52q.009-.123.01-.25c0-.443-.09-.865-.25-1.25z" />
          <path d="M13 3.25A2.75 2.75 0 0 1 15.75 6v.25h2.183a2 2 0 0 1 1.505.683l2.631 3.007c.439.502.681 1.146.681 1.812v3.998a2 2 0 0 1-2 2h-.51q.01-.123.01-.25c0-.443-.09-.865-.25-1.25h.75a.5.5 0 0 0 .5-.5v-3.998c0-.303-.11-.595-.31-.823L18.31 7.92a.5.5 0 0 0-.376-.171H15.75v6.75a3.26 3.26 0 0 0-1.5 1.268V6c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25a3.24 3.24 0 0 0-.241 1.487A2.75 2.75 0 0 1 1.25 15V6A2.75 2.75 0 0 1 4 3.25z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 14.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M17 14.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TruckIconDuotone.displayName = "TruckIconDuotone";
export { TruckIconDuotone };
