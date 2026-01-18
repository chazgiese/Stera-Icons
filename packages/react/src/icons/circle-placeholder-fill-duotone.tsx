import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclePlaceholderIconFillDuotone = memo(
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
          <path d="M4.222 4.222q.542-.538 1.134-.987l15.408 15.408c-.3.394-.626.775-.986 1.135q-.541.539-1.135.986L3.235 5.356q.448-.592.987-1.134M16.9 21.848c-1.025.51-2.113.851-3.223 1.022L1.13 10.322c.17-1.11.51-2.197 1.02-3.223zM7.1 2.15a11 11 0 0 1 3.222-1.02L22.87 13.677a11 11 0 0 1-1.022 3.222zM10.926 22.947a10.95 10.95 0 0 1-6.704-3.169 10.96 10.96 0 0 1-3.17-6.705zM13.074 1.053a10.95 10.95 0 0 1 6.704 3.169 10.95 10.95 0 0 1 3.169 6.704z" />
        </g>
        <path
          fill="currentColor"
          d="M18.643 20.764q-.832.632-1.744 1.085L2.15 7.1q.453-.912 1.084-1.745zM5.357 3.234c.554-.42 1.138-.782 1.744-1.084L21.85 16.898q-.453.912-1.084 1.744zM13.677 22.87c-.91.14-1.835.166-2.75.077l-9.875-9.874c-.089-.916-.062-1.84.078-2.75zM10.322 1.13c.91-.14 1.835-.167 2.751-.078l9.874 9.874c.09.916.063 1.84-.077 2.751z"
        />
      </svg>
    ))
);
CirclePlaceholderIconFillDuotone.displayName =
  "CirclePlaceholderIconFillDuotone";
export { CirclePlaceholderIconFillDuotone };
