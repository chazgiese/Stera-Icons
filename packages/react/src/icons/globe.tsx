import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Globe = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m-9.217 11.5a9.25 9.25 0 0 0 7.53 8.344 15.65 15.65 0 0 1-2.881-8.344zm13.785 0c-.14 2.936-1.1 5.84-2.883 8.344a9.25 9.25 0 0 0 7.532-8.344zm-7.633 0A14.15 14.15 0 0 0 12 20.838a14.15 14.15 0 0 0 3.065-8.088zm1.378-9.845a9.25 9.25 0 0 0-7.53 8.345h4.649c.14-2.936 1.099-5.841 2.881-8.345M12 3.161a14.15 14.15 0 0 0-3.065 8.089h6.13A14.15 14.15 0 0 0 12 3.161m1.685-.256a15.65 15.65 0 0 1 2.883 8.345h4.649a9.25 9.25 0 0 0-7.531-8.345"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Globe.displayName = "Globe";
export { Globe };
