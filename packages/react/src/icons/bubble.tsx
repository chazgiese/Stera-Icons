import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIcon = memo(
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
          d="M10.814 4.974a1.04 1.04 0 0 1 .834.165c.243.173.41.448.461.757.052.31-.015.625-.188.868a1.04 1.04 0 0 1-.734.428q-.15.016-.3.041C9.09 7.516 7.44 8.935 6.904 10.81q-.045.155-.082.314a.76.76 0 0 1-.317.458.75.75 0 0 1-.54.121.75.75 0 0 1-.47-.29.76.76 0 0 1-.151-.537q.026-.208.063-.414c.44-2.486 2.414-4.691 4.979-5.384q.211-.06.428-.104"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BubbleIcon.displayName = "BubbleIcon";
export { BubbleIcon };
