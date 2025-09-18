import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideVertical = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m-.75 1.532c-4.758.382-8.5 4.362-8.5 9.218s3.742 8.835 8.5 9.217zm1.5 18.435c4.758-.382 8.5-4.36 8.5-9.217 0-4.856-3.742-8.836-8.5-9.218z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideVertical.displayName = "CircleDivideVertical";
export { CircleDivideVertical };
