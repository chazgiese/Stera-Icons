import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailCheckBold = memo(
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
          d="M19 14a5 5 0 1 1 0 10 5 5 0 0 1 0-10m2.516 3.205a.75.75 0 0 0-1.06.03l-2.212 2.336-.633-.891a.75.75 0 1 0-1.222.868l.801 1.13c.054.076.122.173.189.252.07.083.192.21.379.294.232.104.493.122.737.051.196-.057.333-.165.415-.238.077-.068.158-.154.222-.222l2.413-2.55a.75.75 0 0 0-.03-1.06"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m19.129 3.003.102.004a3 3 0 0 1 .244.021l.06.008A4 4 0 0 1 23 7v5.124a1 1 0 1 1-2 0V9.081l-5.877 4.701a5 5 0 0 1-6.246 0L3 9.081V17a2 2 0 0 0 2 2h6.566a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.464-3.964l.06-.008a4 4 0 0 1 .244-.021l.102-.004q.041-.001.083-.003h14.094zM5 5q-.14.001-.273.02a1.35 1.35 0 0 0-.618 2.386l6.017 4.814a3 3 0 0 0 3.748 0l6.017-4.814a1.35 1.35 0 0 0-.622-2.386A2 2 0 0 0 19 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailCheckBold.displayName = "MailCheckBold";
export { MailCheckBold };
