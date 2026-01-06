import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHIconDuotone = memo(
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
          d="M14 11.25a.75.75 0 0 1 0 1.5H7.444l.214-.392a.75.75 0 0 0 0-.717l-.213-.391z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.25 4.859c-.938-1.72.899-3.623 2.65-2.747l16.2 8.1c1.473.736 1.473 2.84 0 3.576l-16.2 8.1c-1.751.876-3.587-1.027-2.65-2.746l3.896-7.143zm1.98-1.406a.5.5 0 0 0-.662.687l4.09 7.501a.75.75 0 0 1 0 .718l-4.09 7.5c-.235.43.224.907.662.688l16.199-8.1a.5.5 0 0 0 0-.894z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendHIconDuotone.displayName = "SendHIconDuotone";
export { SendHIconDuotone };
