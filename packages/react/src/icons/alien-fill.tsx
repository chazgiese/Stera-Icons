import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlienIconFill = memo(
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
          d="M12 3c4.418 0 8 3.663 8 8.182 0 3.757-3.797 6.998-6.16 8.65a3.19 3.19 0 0 1-3.68 0C7.796 18.18 4 14.939 4 11.182 4 6.663 7.582 3 12 3m2 12.827a.646.646 0 0 0-.803-.626l-.784.195a1.7 1.7 0 0 1-.826 0l-.784-.195a.646.646 0 0 0-.803.626c0 .395.269.74.652.836l.863.216c.318.08.652.08.97 0l.863-.216a.86.86 0 0 0 .652-.836M8 9a1 1 0 0 0-1 1 3 3 0 0 0 3 3 1 1 0 0 0 1-1 3 3 0 0 0-3-3m8 0a3 3 0 0 0-3 3 1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlienIconFill.displayName = "AlienIconFill";
export { AlienIconFill };
