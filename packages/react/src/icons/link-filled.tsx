import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkIconFilled = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_5011_3258)">
          <path d="M8.57 7.377a1.5 1.5 0 0 1 1.86 2.356q-.192.15-.369.327a4.157 4.157 0 0 0 0 5.879l3 3a4.157 4.157 0 0 0 6.805-4.473 1.5 1.5 0 1 1 2.789-1.105A7.157 7.157 0 0 1 10.94 21.06l-3-3a7.157 7.157 0 0 1 .63-10.682" />
          <path d="M2.939 2.94a7.16 7.16 0 0 1 10.122 0l3 3a7.158 7.158 0 0 1-.632 10.683 1.5 1.5 0 0 1-1.858-2.354q.19-.15.368-.328a4.157 4.157 0 0 0 0-5.88l-3-3a4.156 4.156 0 0 0-6.797 4.49 1.5 1.5 0 0 1-2.784 1.117 7.16 7.16 0 0 1 1.58-7.727" />
          <path d="M8.57 7.377a1.5 1.5 0 0 1 1.86 2.355q-.192.15-.369.328a4.157 4.157 0 0 0 0 5.878l3 3a4.157 4.157 0 0 0 6.805-4.472 1.5 1.5 0 1 1 2.789-1.105A7.157 7.157 0 0 1 10.94 21.06l-3-3a7.157 7.157 0 0 1 .63-10.682" />
          <path d="M2.939 2.94a7.16 7.16 0 0 1 10.122 0l3 3a7.158 7.158 0 0 1-.632 10.683 1.5 1.5 0 0 1-1.858-2.355q.19-.15.368-.328a4.157 4.157 0 0 0 0-5.878l-3-3A4.156 4.156 0 0 0 4.142 9.55a1.5 1.5 0 0 1-2.784 1.117 7.16 7.16 0 0 1 1.58-7.728" />
        </g>
      </svg>
    ))
);
LinkIconFilled.displayName = "LinkIconFilled";
export { LinkIconFilled };
