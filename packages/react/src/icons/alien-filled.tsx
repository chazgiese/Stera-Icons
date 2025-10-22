import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlienIconFilled = memo(
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
          d="M12 2.25c4.848 0 8.75 4.015 8.75 8.932 0 2.13-1.072 4.047-2.368 5.595-1.304 1.557-2.903 2.824-4.112 3.67a3.94 3.94 0 0 1-4.54 0c-1.209-.846-2.808-2.113-4.112-3.67-1.296-1.548-2.368-3.464-2.368-5.595C3.25 6.265 7.152 2.25 12 2.25m2 13.577a.646.646 0 0 0-.803-.626l-.784.195a1.7 1.7 0 0 1-.826 0l-.784-.195a.646.646 0 0 0-.803.626c0 .395.269.74.652.836l.863.216c.318.08.652.08.97 0l.863-.216a.86.86 0 0 0 .652-.836M8 9a1 1 0 0 0-1 1 3 3 0 0 0 3 3 1 1 0 0 0 1-1 3 3 0 0 0-3-3m8 0a3 3 0 0 0-3 3 1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlienIconFilled.displayName = "AlienIconFilled";
export { AlienIconFilled };
