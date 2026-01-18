import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForwardIcon = memo(
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
          d="M12.713 3.306a.75.75 0 0 1 .817.163l8 8a.75.75 0 0 1 0 1.061l-8 8a.75.75 0 0 1-1.28-.53v-4.75H11c-2.792 0-4.618 1.04-5.748 2.057a7.5 7.5 0 0 0-1.222 1.406 6 6 0 0 0-.333.566l-.011.024v.002l-.002.002A.75.75 0 0 1 2.25 19c0-3.786.62-6.45 2.43-8.115 1.67-1.536 4.188-2.064 7.57-2.128V4c0-.303.183-.578.463-.694M13.75 9.5a.75.75 0 0 1-.75.75c-3.738 0-5.97.512-7.305 1.739-.994.914-1.595 2.33-1.83 4.57q.18-.183.383-.367C5.618 14.96 7.792 13.75 11 13.75h2a.75.75 0 0 1 .75.75v3.69L19.94 12l-6.19-6.19z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ForwardIcon.displayName = "ForwardIcon";
export { ForwardIcon };
