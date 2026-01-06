import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NoteIconFillDuotone = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14h-4.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C14 15.52 14 16.08 14 17.2V22H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.2 14H22a3.8 3.8 0 0 1-.083.872 3 3 0 0 1-.36.867c-.187.306-.44.56-.729.847l-.058.059-4.125 4.125-.059.058c-.287.288-.541.542-.847.73a3 3 0 0 1-.867.359A3.8 3.8 0 0 1 14 22v-4.8c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C15.52 14 16.08 14 17.2 14"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NoteIconFillDuotone.displayName = "NoteIconFillDuotone";
export { NoteIconFillDuotone };
