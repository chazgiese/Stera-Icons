import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIconBold = memo(
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
          d="M11.94 2.147c.945-.945 2.56-.276 2.56 1.06V7H18a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3.5v3.793c0 1.336-1.615 2.005-2.56 1.06l-8.263-8.262a2.25 2.25 0 0 1 0-3.182zM5.09 11.823a.25.25 0 0 0 0 .354l7.41 7.409V16a1 1 0 0 1 1-1H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5a1 1 0 0 1-1-1V4.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigLeftIconBold.displayName = "ArrowBigLeftIconBold";
export { ArrowBigLeftIconBold };
