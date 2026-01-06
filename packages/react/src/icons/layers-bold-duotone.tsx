import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconBoldDuotone = memo(
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
          d="M21.106 10.436c1.289.645 1.29 2.485 0 3.13l-1.37.684 1.37.685c1.289.646 1.29 2.486 0 3.13l-6.87 3.436a5 5 0 0 1-4.472 0l-6.869-3.436c-1.29-.645-1.29-2.485 0-3.13l1.37-.685-1.37-.685c-1.29-.644-1.29-2.484 0-3.13l1.37-.685L6.5 10.867 4.236 12l6.423 3.212c.844.422 1.839.422 2.683 0L19.764 12l-2.263-1.133 2.234-1.117zM14.236 17a5 5 0 0 1-4.472 0L6.5 15.368 4.235 16.5l6.424 3.212c.844.422 1.839.422 2.683 0l6.422-3.212-2.264-1.132z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.764 2.5a5 5 0 0 1 4.472 0l6.87 3.435c1.29.645 1.29 2.485 0 3.13l-6.87 3.435a5 5 0 0 1-4.472 0L2.895 9.065c-1.29-.645-1.29-2.485 0-3.13zm3.578 1.789a3 3 0 0 0-2.683 0l-6.423 3.21 6.423 3.212c.844.422 1.839.423 2.683 0L19.764 7.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIconBoldDuotone.displayName = "LayersIconBoldDuotone";
export { LayersIconBoldDuotone };
