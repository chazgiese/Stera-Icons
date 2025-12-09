import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailOpenIconLinetone = memo(
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
          d="M21.982 9.82Q22 9.908 22 10v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8q0-.09.016-.175a1 1 0 0 0 .383.632L4 11.659V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403l1.581-1.128a1 1 0 0 0 .401-.649"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.512 2.794a4.3 4.3 0 0 1 4.977 0l5.845 4.173a4.14 4.14 0 0 1 1.643 2.474 1 1 0 0 1-.396 1.028l-6.69 4.775c-.689.493-1.52.756-2.368.756h-1.381a4.08 4.08 0 0 1-2.448-.813L2.4 10.457a1 1 0 0 1-.376-1.013 4.13 4.13 0 0 1 1.642-2.477zm3.814 1.628a2.3 2.3 0 0 0-2.652 0L4.828 8.595a2.2 2.2 0 0 0-.634.709l5.7 4.283a2.08 2.08 0 0 0 1.248.413h1.38c.437 0 .86-.136 1.208-.383l6.066-4.332a2.2 2.2 0 0 0-.623-.69z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailOpenIconLinetone.displayName = "MailOpenIconLinetone";
export { MailOpenIconLinetone };
