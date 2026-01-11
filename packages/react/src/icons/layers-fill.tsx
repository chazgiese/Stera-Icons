import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconFill = memo(
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
          d="M9.764 2.5a5 5 0 0 1 4.473 0l6.869 3.435c1.29.645 1.29 2.486 0 3.13l-1.37.685 1.37.685c1.29.645 1.29 2.485 0 3.13l-1.37.684 1.37.686c1.29.645 1.29 2.485 0 3.13l-6.87 3.435a5 5 0 0 1-4.472 0l-6.87-3.435c-1.289-.645-1.289-2.485 0-3.13l1.371-.686-1.37-.684c-1.29-.645-1.29-2.485 0-3.13l1.37-.685-1.37-.684c-1.29-.645-1.29-2.486 0-3.13zM14.236 17a5 5 0 0 1-4.472 0L6.5 15.369 4.235 16.5l6.424 3.211a3 3 0 0 0 2.683 0l6.422-3.211-2.265-1.132zm0-4.5a5 5 0 0 1-4.472 0l-3.266-1.632-2.262 1.131 6.423 3.212a3 3 0 0 0 2.683 0L19.764 12l-2.263-1.131z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIconFill.displayName = "LayersIconFill";
export { LayersIconFill };
