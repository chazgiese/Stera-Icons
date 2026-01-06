import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalCenterIconFill = memo(
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
          d="M2 12a1 1 0 0 1 1-1h2V5.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C7.077 2.999 7.335 3 7.6 3h.8c.264 0 .522-.001.739.017.228.018.498.063.77.2a2 2 0 0 1 .873.875c.138.271.183.54.201.77.018.216.017.474.017.738V11h2V8.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201.216-.018.474-.017.738-.017h.8c.264 0 .522-.001.739.017.228.018.498.063.77.2a2 2 0 0 1 .873.875c.138.271.183.54.201.77.018.216.017.474.017.738V11h2a1 1 0 1 1 0 2h-2v2.4c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017h-.8c-.264 0-.522.001-.739-.017a2.2 2.2 0 0 1-.566-.114l-.203-.087-.138-.077a2 2 0 0 1-.736-.797 2 2 0 0 1-.201-.77c-.018-.216-.017-.474-.017-.738V13h-2v5.4c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017h-.8c-.264 0-.522.001-.739-.017a2.2 2.2 0 0 1-.566-.114l-.203-.087-.138-.077a2 2 0 0 1-.736-.797 2 2 0 0 1-.201-.77C4.999 18.923 5 18.665 5 18.4V13H3a1 1 0 0 1-1-1"
        />
      </svg>
    ))
);
AlignVerticalCenterIconFill.displayName = "AlignVerticalCenterIconFill";
export { AlignVerticalCenterIconFill };
