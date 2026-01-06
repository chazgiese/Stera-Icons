import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconBoldDuotone = memo(
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
          <path d="M8.188 14.56c.623.215 1.271.38 1.94.487l-.644 2.231a1 1 0 0 1-1.921-.555zM16.438 16.723a1 1 0 1 1-1.921.554l-.646-2.231q1.006-.162 1.94-.486zM3.533 11.458q.661.752 1.46 1.373l-1.813 1.68a1 1 0 0 1-1.36-1.466zM22.18 13.045a1 1 0 0 1-1.36 1.467l-1.814-1.682q.799-.621 1.46-1.373z" />
        </g>
        <path
          fill="currentColor"
          d="M20.07 8.536a1 1 0 1 1 1.771.928c-1.792 3.418-5.545 5.733-9.841 5.733s-8.05-2.315-9.843-5.733a1 1 0 0 1 1.772-.928c1.433 2.734 4.49 4.661 8.071 4.661 3.582 0 6.637-1.927 8.07-4.661"
        />
      </svg>
    ))
);
EyeClosedIconBoldDuotone.displayName = "EyeClosedIconBoldDuotone";
export { EyeClosedIconBoldDuotone };
