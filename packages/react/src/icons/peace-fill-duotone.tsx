import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PeaceIconFillDuotone = memo(
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
          <path d="M11 22.952a10.95 10.95 0 0 1-6.04-2.5L11 14.414zM19.038 20.452a10.95 10.95 0 0 1-6.038 2.5v-8.538zM4.584 20.124q.108.096.219.19-.101-.084-.2-.171zM19.397 20.143q-.1.087-.2.171.111-.093.219-.19zM11 11.586l-7.453 7.452A10.96 10.96 0 0 1 1 12C1 6.262 5.394 1.552 11 1.047zM13 1.047C18.606 1.552 23 6.262 23 12c0 2.678-.958 5.13-2.548 7.038L13 11.586z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1q.505 0 1 .045v10.54l7.453 7.454q-.642.77-1.414 1.414L13 14.414v8.541a11 11 0 0 1-2 0v-8.54l-6.04 6.038a11 11 0 0 1-1.413-1.414L11 11.586V1.045Q11.495 1 12 1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 1.045a11 11 0 0 0-2 0v10.54L3.547 19.04q.642.771 1.414 1.414L11 14.414v8.541a11 11 0 0 0 2 0v-8.54l6.038 6.038q.771-.642 1.414-1.414L13 11.586z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PeaceIconFillDuotone.displayName = "PeaceIconFillDuotone";
export { PeaceIconFillDuotone };
