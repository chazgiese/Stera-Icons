import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailIconDuotone = memo(
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
          stroke="currentColor"
          strokeWidth={1.5}
          d="m9.501 13.001-7.49-5.992A.03.03 0 0 1 2 6.986 2.986 2.986 0 0 1 4.986 4h14.028A2.986 2.986 0 0 1 22 6.986a.03.03 0 0 1-.011.023L14.499 13a4 4 0 0 1-4.998 0Z"
        />
        <path
          fill="currentColor"
          d="M1.25 6.99c.001.235.11.458.293.605l1.207.965V17A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17V8.56l1.207-.965a.78.78 0 0 0 .292-.606L22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V6.99"
          opacity={0.4}
        />
      </svg>
    ))
);
MailIconDuotone.displayName = "MailIconDuotone";
export { MailIconDuotone };
