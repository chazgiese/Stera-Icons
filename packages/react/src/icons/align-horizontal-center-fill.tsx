import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignHorizontalCenterIconFill = memo(
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
          d="M12 2a1 1 0 0 1 1 1v2h5.4c.264 0 .522-.001.739.017.228.018.498.063.77.2a2 2 0 0 1 .873.875c.139.271.183.54.201.77.018.216.017.474.017.738v.8c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017H13v2h2.4c.264 0 .522-.001.739.017.228.018.498.063.77.2a2 2 0 0 1 .873.875c.139.271.183.54.201.77.018.216.017.474.017.738v.8c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017H13v2a1 1 0 1 1-2 0v-2H8.6c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C5.999 16.923 6 16.665 6 16.4v-.8c0-.264-.001-.522.017-.739.014-.17.042-.365.114-.566l.087-.203.077-.138a2 2 0 0 1 .797-.736c.271-.138.54-.183.77-.201.216-.018.474-.017.738-.017H11v-2H5.6c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C2.999 8.923 3 8.665 3 8.4v-.8c0-.264-.001-.522.017-.739.014-.17.042-.365.114-.566l.087-.203.077-.138a2 2 0 0 1 .797-.736c.271-.138.54-.183.77-.201C5.077 4.999 5.335 5 5.6 5H11V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AlignHorizontalCenterIconFill.displayName = "AlignHorizontalCenterIconFill";
export { AlignHorizontalCenterIconFill };
