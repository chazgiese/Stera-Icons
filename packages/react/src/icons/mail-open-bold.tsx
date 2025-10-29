import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailOpenIconBold = memo(
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
          d="M9.517 2.58a4.2 4.2 0 0 1 4.966 0l5.801 4.255A4.2 4.2 0 0 1 21.994 10H22v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8h.007a4.2 4.2 0 0 1 1.709-3.165zm5.367 12.645a4 4 0 0 1-2.366.775h-1.37a4 4 0 0 1-2.444-.834L4 11.535V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.527zM13.3 4.195a2.2 2.2 0 0 0-2.602 0L4.9 8.446a2.2 2.2 0 0 0-.648.755l5.675 4.38c.35.271.78.418 1.222.418h1.37a2 2 0 0 0 1.182-.388l6.037-4.428a2.2 2.2 0 0 0-.636-.737z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailOpenIconBold.displayName = "MailOpenIconBold";
export { MailOpenIconBold };
