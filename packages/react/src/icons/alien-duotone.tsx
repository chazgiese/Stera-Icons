import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlienIconDuotone = memo(
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
          d="M12 2.25c4.848 0 8.75 4.015 8.75 8.932 0 2.13-1.072 4.047-2.368 5.595-1.304 1.557-2.903 2.824-4.112 3.67a3.94 3.94 0 0 1-4.54 0c-1.209-.846-2.808-2.113-4.112-3.67-1.296-1.548-2.368-3.464-2.368-5.595C3.25 6.265 7.152 2.25 12 2.25m0 1.5c-3.988 0-7.25 3.311-7.25 7.432 0 1.626.826 3.208 2.019 4.633 1.185 1.415 2.666 2.595 3.82 3.402a2.44 2.44 0 0 0 2.822 0c1.154-.807 2.635-1.987 3.82-3.402 1.193-1.425 2.019-3.007 2.019-4.633 0-4.12-3.262-7.432-7.25-7.432"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.197 15.201a.646.646 0 0 1 .803.626c0 .395-.269.74-.652.836l-.863.216c-.318.08-.652.08-.97 0l-.863-.216a.86.86 0 0 1-.652-.836c0-.42.395-.728.803-.626l.784.195c.271.068.555.068.826 0zM8 9a3 3 0 0 1 3 3 1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 0 1 1-1M16 9a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3"
        />
      </svg>
    ))
);
AlienIconDuotone.displayName = "AlienIconDuotone";
export { AlienIconDuotone };
