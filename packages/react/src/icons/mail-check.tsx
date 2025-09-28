import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailCheck = memo(
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
          d="M19 14.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m2.516 2.955a.75.75 0 0 0-1.06.03l-2.212 2.336-.633-.891a.75.75 0 1 0-1.222.868l.801 1.13c.054.076.122.173.189.252.07.083.192.21.379.294.232.104.493.122.737.051.196-.057.333-.165.415-.238.077-.068.158-.154.222-.222l2.413-2.55a.75.75 0 0 0-.03-1.06"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.16 3.254h.041q.081.006.161.014l.05.004.096.012A3.75 3.75 0 0 1 22.75 7v5.668a.75.75 0 0 1-1.5 0V8.531a3 3 0 0 1-.266.242l-6.016 4.814a4.75 4.75 0 0 1-5.936 0L3.016 8.773a3 3 0 0 1-.266-.242V17A2.25 2.25 0 0 0 5 19.25h7.07a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 17V7a3.75 3.75 0 0 1 3.241-3.716q.049-.007.097-.012l.049-.004q.08-.009.16-.013l.043-.001q.057-.003.113-.004h14.094q.056.001.112.004M5 4.75a2 2 0 0 0-.367.032 1.602 1.602 0 0 0-.68 2.82l6.017 4.813a3.25 3.25 0 0 0 4.06 0l6.017-4.813a1.602 1.602 0 0 0-.68-2.82A2 2 0 0 0 19 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailCheck.displayName = "MailCheck";
export { MailCheck };
