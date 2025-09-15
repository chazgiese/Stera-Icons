import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenFilled = memo(
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
          d="M1.718 3.616c3.732-1.096 6.485-.565 8.336.314.35.166.665.344.946.522v15.925c0 .225-.284.344-.458.201a6.5 6.5 0 0 0-1.346-.848c-1.4-.664-3.646-1.16-6.914-.2A1.002 1.002 0 0 1 1 18.57V4.576a1 1 0 0 1 .718-.96M13.946 3.93c1.85-.879 4.604-1.41 8.336-.314a1 1 0 0 1 .718.96V18.57a1 1 0 0 1-1.282.96c-3.268-.96-5.515-.464-6.914.2a6.5 6.5 0 0 0-1.346.848c-.174.143-.458.024-.458-.201V4.452c.28-.178.596-.356.946-.522"
        />
      </svg>
    ))
);
BookOpenFilled.displayName = "BookOpenFilled";
export { BookOpenFilled };
