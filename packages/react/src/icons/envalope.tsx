import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Envalope = memo(
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
          d="M19.16 3.254h.041q.081.006.161.014l.05.004.096.012A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7a3.75 3.75 0 0 1 3.241-3.716q.049-.007.097-.012l.049-.004q.08-.009.16-.013l.043-.001q.057-.003.113-.004h14.094q.056.001.112.004m2.09 5.277a3 3 0 0 1-.266.242l-6.016 4.814a4.75 4.75 0 0 1-5.936 0L3.016 8.773a3 3 0 0 1-.266-.242V17A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17zM5 4.75a2 2 0 0 0-.367.032 1.602 1.602 0 0 0-.68 2.82l6.017 4.813a3.25 3.25 0 0 0 4.06 0l6.017-4.813a1.602 1.602 0 0 0-.68-2.82A2 2 0 0 0 19 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Envalope.displayName = "Envalope";
export { Envalope };
