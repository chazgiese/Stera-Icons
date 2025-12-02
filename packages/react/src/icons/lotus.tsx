import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LotusIcon = memo(
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
          d="M11.526 3.418a.75.75 0 0 1 1.004.052l2.343 2.342q.293.293.564.614l2.971-1.588.08-.037a.75.75 0 0 1 1.008.544l.82 3.905H22a.75.75 0 0 1 .75.75v2.003a8.75 8.75 0 0 1-8.75 8.75l-2.001-.003H10A8.75 8.75 0 0 1 1.25 12v-2A.75.75 0 0 1 2 9.25h1.683l.82-3.905.023-.085a.75.75 0 0 1 1.065-.422l2.976 1.59a9 9 0 0 1 .56-.616L11.47 3.47zm8.189 7.338a7.2 7.2 0 0 0-2.315.475 8.73 8.73 0 0 1-2.527 6.956l-1.065 1.065H14a7.25 7.25 0 0 0 7.25-7.25V10.75h-1.253q-.142 0-.282.006M2.75 12A7.25 7.25 0 0 0 10 19.25h.19l-1.063-1.063a8.73 8.73 0 0 1-2.528-6.956A7.2 7.2 0 0 0 4 10.75H2.75zm7.438-5.127a7.212 7.212 0 0 0-2.037 4.003 7.24 7.24 0 0 0 2.037 6.25L12 18.94l1.813-1.812a7.24 7.24 0 0 0 2.037-6.251 7.2 7.2 0 0 0-1.228-3.058 7.4 7.4 0 0 0-.81-.945L12 5.06zm-4.99 2.459a8.7 8.7 0 0 1 1.664.398 8.7 8.7 0 0 1 .848-2.058l-1.944-1.04zm11.1-1.666c.373.657.651 1.351.84 2.062a8.7 8.7 0 0 1 1.663-.396l-.568-2.701z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LotusIcon.displayName = "LotusIcon";
export { LotusIcon };
