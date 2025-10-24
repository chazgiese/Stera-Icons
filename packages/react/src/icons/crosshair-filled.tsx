import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CrosshairIconFilled = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipPath="url(#clip0_5005_6660)"
          clipRule="evenodd"
        >
          <path d="M12 .5A1.5 1.5 0 0 1 13.5 2v1.634a8.5 8.5 0 0 1 6.865 6.866H22a1.5 1.5 0 0 1 0 3h-1.635a8.5 8.5 0 0 1-6.865 6.865V22a1.5 1.5 0 0 1-3 0v-1.635A8.5 8.5 0 0 1 3.635 13.5H2a1.5 1.5 0 0 1 0-3h1.635A8.5 8.5 0 0 1 10.5 3.634V2A1.5 1.5 0 0 1 12 .5m-5.292 13a5.51 5.51 0 0 0 3.792 3.791V13.5zm6.792 0v3.791a5.51 5.51 0 0 0 3.792-3.791zm0-3h3.792A5.51 5.51 0 0 0 13.5 6.708zm-3-3.792A5.51 5.51 0 0 0 6.708 10.5H10.5z" />
          <path d="M12 .5A1.5 1.5 0 0 1 13.5 2v1.634a8.5 8.5 0 0 1 6.865 6.866H22a1.5 1.5 0 0 1 0 3h-1.635a8.5 8.5 0 0 1-6.865 6.865V22a1.5 1.5 0 0 1-3 0v-1.635A8.5 8.5 0 0 1 3.635 13.5H2a1.5 1.5 0 0 1 0-3h1.635A8.5 8.5 0 0 1 10.5 3.634V2A1.5 1.5 0 0 1 12 .5m-5.292 13a5.51 5.51 0 0 0 3.792 3.791V13.5zm6.792 0v3.791a5.51 5.51 0 0 0 3.792-3.791zm0-3h3.792A5.51 5.51 0 0 0 13.5 6.708zm-3-3.792A5.51 5.51 0 0 0 6.708 10.5H10.5z" />
        </g>
      </svg>
    ))
);
CrosshairIconFilled.displayName = "CrosshairIconFilled";
export { CrosshairIconFilled };
