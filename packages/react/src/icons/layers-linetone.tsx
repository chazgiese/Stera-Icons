import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconLinetone = memo(
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
          d="M21.106 10.435c1.29.644 1.29 2.485 0 3.13l-1.87.935 1.87.935c1.29.644 1.29 2.485 0 3.13L14.236 22a5 5 0 0 1-4.472 0l-6.869-3.435c-1.29-.645-1.29-2.485 0-3.13l1.87-.935-1.87-.935c-1.29-.644-1.29-2.485 0-3.13L4.763 9.5l2.235 1.118L4.236 12l6.423 3.21c.844.423 1.839.423 2.683 0L19.764 12 17 10.617 19.236 9.5zM14.236 17a5 5 0 0 1-4.472 0L7 15.617 4.236 17l6.423 3.21c.844.423 1.839.423 2.683 0L19.764 17 17 15.617z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.763 2a5 5 0 0 1 4.472 0l6.87 3.435c1.29.645 1.29 2.485 0 3.13L14.235 12a5 5 0 0 1-4.472 0L2.894 8.565c-1.29-.645-1.29-2.485 0-3.13zm3.579 1.788a3 3 0 0 0-2.684 0L4.235 7l6.423 3.212c.844.422 1.84.422 2.684 0L19.763 7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIconLinetone.displayName = "LayersIconLinetone";
export { LayersIconLinetone };
