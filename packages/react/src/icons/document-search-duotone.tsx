import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentSearchIconDuotone = memo(
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
          <path d="M15 1.75c.688 0 1.249-.001 1.703.036.463.038.882.12 1.273.318a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.318 1.273.037.454.036 1.015.036 1.703v5a.75.75 0 0 1-1.5 0v-5c0-.712 0-1.202-.031-1.581-.03-.37-.086-.57-.16-.714a1.75 1.75 0 0 0-.764-.765c-.144-.073-.344-.128-.714-.159-.38-.03-.869-.031-1.581-.031H9c-.712 0-1.202 0-1.581.031-.37.03-.57.086-.714.16a1.75 1.75 0 0 0-.765.764c-.073.144-.128.344-.159.714-.03.38-.031.869-.031 1.581v10c0 .712 0 1.202.031 1.581.03.37.086.57.16.714.167.329.435.597.764.765.144.073.344.129.714.159.38.03.869.031 1.581.031h1a.75.75 0 0 1 0 1.5H9c-.688 0-1.249.001-1.703-.036-.463-.038-.882-.12-1.273-.319a3.25 3.25 0 0 1-1.42-1.42c-.199-.39-.28-.809-.318-1.272-.037-.454-.036-1.015-.036-1.703v-10c0-.688-.001-1.249.036-1.703.038-.463.12-.882.318-1.273a3.25 3.25 0 0 1 1.42-1.42c.391-.199.81-.28 1.273-.318C7.75 1.75 8.312 1.75 9 1.75z" />
          <path d="M15 9.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM15 5.75a.75.75 0 0 1 0 1.5H9a.75.75 0 1 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 12.75a4.25 4.25 0 0 1 3.628 6.464l2.079 2.079a1 1 0 1 1-1.414 1.414l-2.08-2.08A4.25 4.25 0 1 1 15.5 12.75m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DocumentSearchIconDuotone.displayName = "DocumentSearchIconDuotone";
export { DocumentSearchIconDuotone };
