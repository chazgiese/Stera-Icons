import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleSlashIconBoldDuotone = memo(
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
          <path d="M4.969 6.383A9 9 0 0 0 17.616 19.03l1.422 1.422A10.95 10.95 0 0 1 12 23C5.925 23 1 18.075 1 12c0-2.678.957-5.132 2.547-7.04zM12 1c6.075 0 11 4.925 11 11 0 2.678-.958 5.13-2.548 7.038l-1.422-1.422A9 9 0 0 0 6.383 4.97L4.96 3.547A10.96 10.96 0 0 1 12 1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.04 20.453 3.546 4.961c.427-.513.9-.987 1.414-1.414l15.492 15.492q-.642.77-1.414 1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleSlashIconBoldDuotone.displayName = "CircleSlashIconBoldDuotone";
export { CircleSlashIconBoldDuotone };
