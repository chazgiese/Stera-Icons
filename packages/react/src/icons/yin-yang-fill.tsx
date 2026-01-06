import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const YinYangIconFill = memo(
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
          d="M12 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 0 0-5.053 16.996 6 6 0 0 1-.28-.595l-.03-.078a6 6 0 0 1-.096-.265l-.013-.04a6 6 0 0 1-.16-.609l-.014-.068q-.007-.04-.013-.08a6 6 0 0 1-.038-.235l-.01-.082a6 6 0 0 1-.025-.268q-.004-.028-.006-.056l-.004-.074A5.75 5.75 0 0 1 12 11.25a4.25 4.25 0 0 0 0-8.5m0 12.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
YinYangIconFill.displayName = "YinYangIconFill";
export { YinYangIconFill };
