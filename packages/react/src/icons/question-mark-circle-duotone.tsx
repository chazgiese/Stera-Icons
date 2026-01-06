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
          d="M12 16.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 5.25c2.459 0 4.75 1.621 4.75 3.95 0 1.962-1.652 3.436-3.606 3.835a.6.6 0 0 0-.304.163.3.3 0 0 0-.09.202v.6a.75.75 0 0 1-1.5 0v-.6c0-.995.796-1.671 1.593-1.835 1.503-.307 2.407-1.341 2.407-2.365 0-1.205-1.29-2.45-3.25-2.45-1.712 0-3.013.97-3.273 1.994a.75.75 0 0 1-1.453-.368C7.755 6.479 9.842 5.25 12 5.25"
        />
      </svg>
    ))
);
QuestionMarkCircleIconDuotone.displayName = "QuestionMarkCircleIconDuotone";
export { QuestionMarkCircleIconDuotone };
