import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconBoldDuotone = memo(
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
          d="M12 1.001c.283 0 .514.127.723.298q.095.076.266.22a36.77 36.77 0 0 1 3.762 3.684c1.028 1.169 2.078 2.536 2.875 3.985.792 1.441 1.374 3.033 1.374 4.63C21 18.868 16.991 23 12 23v-2c3.845 0 7-3.194 7-7.182 0-1.13-.419-2.38-1.126-3.666-.703-1.277-1.653-2.524-2.625-3.628a35 35 0 0 0-3.25-3.217z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 3.307q-.251.217-.577.512A35 35 0 0 0 8.75 6.524c-.972 1.104-1.922 2.35-2.625 3.628C5.419 11.44 5 12.69 5 13.818 5 17.806 8.155 21 12 21v2c-4.991 0-9-4.132-9-9.182 0-1.597.582-3.189 1.374-4.63.797-1.449 1.847-2.816 2.875-3.985a37 37 0 0 1 3.762-3.683q.171-.144.266-.221l.073-.059c.185-.15.41-.24.65-.239z"
        />
      </svg>
    ))
);
DropletIconBoldDuotone.displayName = "DropletIconBoldDuotone";
export { DropletIconBoldDuotone };
