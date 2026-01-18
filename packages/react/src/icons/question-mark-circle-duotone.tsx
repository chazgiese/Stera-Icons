import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkCircleIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c1.906 0 3.75 1.263 3.75 3.15 0 1.486-1.174 2.602-2.56 2.989a.75.75 0 0 0-.344.202c-.074.08-.096.15-.096.209v.2a.75.75 0 0 1-1.5 0v-.2c0-1.001.804-1.651 1.537-1.856.955-.266 1.463-.933 1.463-1.544 0-.763-.842-1.65-2.25-1.65-1.228 0-2.106.696-2.273 1.354a.75.75 0 0 1-1.453-.369C8.662 7.203 10.326 6.25 12 6.25"
        />
      </svg>
    ))
);
QuestionMarkCircleIconDuotone.displayName = "QuestionMarkCircleIconDuotone";
export { QuestionMarkCircleIconDuotone };
