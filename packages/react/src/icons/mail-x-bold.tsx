import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailXIconBold = memo(
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
          d="M21.294 15.292a1 1 0 0 1 1.412 1.416l-1.792 1.788 1.794 1.798a1 1 0 0 1-1.416 1.412L19.5 19.911l-1.792 1.795a1 1 0 0 1-1.416-1.412l1.793-1.798-1.791-1.788a1 1 0 0 1 1.412-1.416l1.794 1.791z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m19.129 3.003.102.004a3 3 0 0 1 .244.021l.06.008A4 4 0 0 1 23 7v5.5a1 1 0 1 1-2 0V9.081l-5.877 4.701a5 5 0 0 1-6.246 0L3 9.081V17a2 2 0 0 0 2 2h8.5a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.464-3.964l.06-.008a4 4 0 0 1 .244-.021l.102-.004q.041-.001.083-.003h14.094zM5 5q-.14.001-.273.02a1.35 1.35 0 0 0-.618 2.386l6.017 4.814a3 3 0 0 0 3.748 0l6.017-4.814a1.35 1.35 0 0 0-.622-2.386A2 2 0 0 0 19 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailXIconBold.displayName = "MailXIconBold";
export { MailXIconBold };
