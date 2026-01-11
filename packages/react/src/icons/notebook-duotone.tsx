import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookIconDuotone = memo(
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
          d="M16 2.25c.688 0 1.249-.001 1.703.036.463.038.882.12 1.273.318a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.318 1.273.037.454.036 1.015.036 1.703v10c0 .688.001 1.249-.036 1.703-.038.463-.12.882-.319 1.273a3.25 3.25 0 0 1-1.42 1.42c-.39.199-.809.28-1.272.318-.454.037-1.015.036-1.703.036H8.25v-1.5H16c.712 0 1.202 0 1.581-.031.37-.03.57-.086.714-.16.329-.167.597-.435.765-.764.073-.144.129-.344.159-.714.03-.38.031-.869.031-1.581V7c0-.712 0-1.202-.031-1.581-.03-.37-.086-.57-.16-.714a1.75 1.75 0 0 0-.764-.765c-.144-.073-.344-.128-.714-.159-.38-.03-.869-.031-1.581-.031H8.25v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.25 21.75H7.5c-.872 0-1.486.009-2.004-.16a3.25 3.25 0 0 1-2.087-2.086c-.168-.518-.159-1.132-.159-2.004v-11c0-.872-.01-1.486.16-2.004a3.25 3.25 0 0 1 2.086-2.087c.518-.168 1.132-.16 2.004-.16h.75zM6.75 3.756c-.43.008-.63.027-.791.08a1.75 1.75 0 0 0-1.123 1.123c-.077.235-.086.552-.086 1.54v11c0 .99.01 1.307.086 1.542.173.532.59.95 1.123 1.123.161.052.362.071.791.079z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M14 12.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM16 8.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
NotebookIconDuotone.displayName = "NotebookIconDuotone";
export { NotebookIconDuotone };
