import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownRightIcon = memo(
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
          d="M7.934 7.934a.75.75 0 0 1 1.06 0l5.792 5.791v-5.26a.75.75 0 1 1 1.5 0v7.07a.75.75 0 0 1-.75.75H8.464a.75.75 0 0 1 0-1.5h5.261l-5.79-5.79a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.399 4.399C8.597.2 15.403.2 19.6 4.399s4.198 11.004 0 15.202-11.004 4.198-15.202 0S.2 8.597 4.399 4.4m1.06 1.06a9.25 9.25 0 1 0 13.082 13.082A9.25 9.25 0 0 0 5.459 5.459"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleDownRightIcon.displayName = "ArrowCircleDownRightIcon";
export { ArrowCircleDownRightIcon };
