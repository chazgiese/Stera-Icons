import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclePlaceholderIconDuotone = memo(
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
          <path d="M13.672 21.096c-.543.099-1.1.154-1.672.154q-.152-.002-.305-.008l-8.938-8.94q-.006-.15-.007-.302.002-.857.152-1.673zM17.595 19.363q-.611.466-1.295.826L3.81 7.7q.36-.684.826-1.296zM20.19 16.3q-.361.683-.827 1.295L6.403 4.635q.611-.465 1.296-.824zM12.303 2.757l8.94 8.94c.002.1.007.201.007.303 0 .571-.055 1.13-.154 1.672L10.327 2.902A9.3 9.3 0 0 1 12 2.75q.152.001.303.007" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CirclePlaceholderIconDuotone.displayName = "CirclePlaceholderIconDuotone";
export { CirclePlaceholderIconDuotone };
