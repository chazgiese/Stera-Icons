import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LotusIconDuotone = memo(
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
          <path d="M4.921 4.82a.75.75 0 0 1 .67.018l2.976 1.59q-.489.591-.859 1.241L5.766 6.631l-.568 2.701A9 9 0 0 0 4 9.25h-.317l.821-3.905.023-.085a.75.75 0 0 1 .394-.44M18.408 4.838a.75.75 0 0 1 1.088.507l.82 3.905h-.319a9 9 0 0 0-1.196.082l-.567-2.701-1.944 1.038a8.7 8.7 0 0 0-.858-1.24z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.526 3.418a.75.75 0 0 1 1.004.052l2.343 2.342a8.7 8.7 0 0 1 2.263 3.916 8.7 8.7 0 0 1 2.861-.478H22a.75.75 0 0 1 .75.75v2.003a8.75 8.75 0 0 1-8.75 8.75l-2.001-.003H10A8.75 8.75 0 0 1 1.25 12v-2A.75.75 0 0 1 2 9.25h2a8.7 8.7 0 0 1 2.862.48 8.7 8.7 0 0 1 2.265-3.918L11.47 3.47zm8.471 7.332c-.916 0-1.791.172-2.597.481a8.73 8.73 0 0 1-2.527 6.956l-1.065 1.065H14a7.25 7.25 0 0 0 7.25-7.25V10.75zM2.75 12A7.25 7.25 0 0 0 10 19.25h.19l-1.063-1.063a8.73 8.73 0 0 1-2.528-6.955A7.2 7.2 0 0 0 4 10.75H2.75zm7.438-5.127a7.2 7.2 0 0 0-2.038 4.003 7.24 7.24 0 0 0 2.037 6.25L12 18.94l1.813-1.812a7.24 7.24 0 0 0 2.037-6.251 7.2 7.2 0 0 0-2.037-4.003L12 5.06z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LotusIconDuotone.displayName = "LotusIconDuotone";
export { LotusIconDuotone };
