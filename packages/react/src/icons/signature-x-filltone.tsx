import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignatureXIconFilltone = memo(
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
          <path d="M22 16.5a1.5 1.5 0 1 1 0 3H2a1.5 1.5 0 0 1 0-3zM4.293 11.293a1 1 0 1 1 1.414 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414l-.793-.793-.793.793a1 1 0 1 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 1.414-1.414l.793.793z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 2.5c.915 0 1.77.26 2.452.85.666.576 1.028 1.345 1.21 2.11.352 1.477.121 3.306-.335 5.07-.188.729-.428 1.483-.704 2.245.503-.263.77-.453.993-.68.282-.287.575-.714 1.065-1.618a1.5 1.5 0 0 1 2.819.715c0 .672.071 1.614.255 2.342q.035.136.068.243a7 7 0 0 0 .944-.801c.762-.76 1.493-1.722 1.914-2.499a1.501 1.501 0 0 1 2.638 1.43c-.58 1.07-1.499 2.262-2.436 3.195-.471.468-.983.909-1.497 1.243-.467.302-1.14.655-1.886.655-.985 0-1.63-.608-1.98-1.12a4.4 4.4 0 0 1-.507-1.048c-.413.296-.858.54-1.35.783-.813.4-1.646.564-2.466.485-.906 1.823-1.963 3.529-3.033 4.846a1.5 1.5 0 0 1-2.328-1.892c.919-1.131 1.849-2.635 2.655-4.252-1.17-1.109-1.931-2.745-2.32-4.327-.397-1.624-.466-3.447.01-4.954.241-.764.648-1.522 1.303-2.098.68-.598 1.54-.923 2.516-.923m0 3c-.275 0-.424.078-.534.175-.135.118-.297.347-.425.75-.262.829-.267 2.065.044 3.336.178.725.442 1.378.749 1.912.23-.644.43-1.28.589-1.895.419-1.62.5-2.87.321-3.623-.083-.35-.198-.486-.255-.535-.04-.035-.155-.12-.489-.12"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SignatureXIconFilltone.displayName = "SignatureXIconFilltone";
export { SignatureXIconFilltone };
