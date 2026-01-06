import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NoteTextIconFillDuotone = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14h-4.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C14 15.52 14 16.08 14 17.2V22H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2zM7 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M6 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22 14h-4.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C14 15.52 14 16.08 14 17.2V22a3.8 3.8 0 0 0 .872-.083c.306-.074.599-.195.867-.36.306-.187.56-.44.847-.729l4.242-4.242c.288-.287.542-.541.73-.847.164-.268.285-.56.359-.867A3.8 3.8 0 0 0 22 14"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NoteTextIconFillDuotone.displayName = "NoteTextIconFillDuotone";
export { NoteTextIconFillDuotone };
