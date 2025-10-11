import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ContactBookIconFilled = memo(
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
          d="M8.4 3c-1.103 0-1.991-.001-2.709.058-.728.06-1.368.185-1.96.487A5 5 0 0 0 1.544 5.73c-.302.593-.428 1.233-.487 1.961C.999 8.41 1 9.297 1 10.401V13.6c0 1.103-.001 1.991.058 2.709.06.728.185 1.368.487 1.96a5 5 0 0 0 2.185 2.186c.593.302 1.233.428 1.961.487.718.059 1.606.058 2.71.058h10.742A3.86 3.86 0 0 0 23 17.143V6.857A3.86 3.86 0 0 0 19.143 3zM21 15.667v1.476A1.86 1.86 0 0 1 19.143 19H18v-3.333zM9.5 7.5a3 3 0 0 1 3 3c0 .979-.47 1.845-1.195 2.393a4.07 4.07 0 0 1 2.132 2.256A1 1 0 0 1 12.5 16.5h-6a1 1 0 0 1-.937-1.35 4.07 4.07 0 0 1 2.133-2.257A2.99 2.99 0 0 1 6.5 10.5a3 3 0 0 1 3-3M21 10.333v3.334h-3v-3.334zM19.143 5C20.168 5 21 5.832 21 6.857v1.476h-3V5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ContactBookIconFilled.displayName = "ContactBookIconFilled";
export { ContactBookIconFilled };
