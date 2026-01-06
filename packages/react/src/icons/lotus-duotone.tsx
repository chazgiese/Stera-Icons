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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.41 10.76a7.99 7.99 0 0 0 2.247 6.897L12 20m-4.59-9.24A8 8 0 0 0 4 10H2v2a8 8 0 0 0 8 8h2m-4.59-9.24a7.96 7.96 0 0 1 2.247-4.417L12 4l2.343 2.343a7.97 7.97 0 0 1 2.247 4.417M12 20l2.343-2.343a7.99 7.99 0 0 0 2.247-6.897M12 20l2 .003a8 8 0 0 0 8-8V10h-2.003a8 8 0 0 0-3.407.76"
        />
      </svg>
    ))
);
LotusIconDuotone.displayName = "LotusIconDuotone";
export { LotusIconDuotone };
