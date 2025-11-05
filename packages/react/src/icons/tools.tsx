import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIcon = memo(
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
          d="M5.901 2.417a4.925 4.925 0 0 1 6.126 5.597l1.449 1.448 4.352-4.353-.312-.313a.75.75 0 0 1 .144-1.173l2.11-1.267.114-.055a.75.75 0 0 1 .802.169l.844.843a.75.75 0 0 1 .113.916l-1.266 2.11a.74.74 0 0 1-.362.308.8.8 0 0 1-.276.056.75.75 0 0 1-.536-.219l-.313-.313-4.353 4.352 1.448 1.449a4.925 4.925 0 0 1 5.598 6.127.75.75 0 0 1-1.255.337l-1.23-1.23h-1.893v1.892l1.23 1.23a.75.75 0 0 1-.336 1.255 4.925 4.925 0 0 1-6.19-5.056l-4.304 4.304a3.137 3.137 0 0 1-4.436-4.436l4.303-4.304A4.925 4.925 0 0 1 2.417 5.9l.032-.094a.75.75 0 0 1 1.223-.243l1.23 1.23h1.893V4.903l-1.23-1.23A.75.75 0 0 1 5.9 2.417M4.23 17.455a1.637 1.637 0 0 0 2.316 2.316l4.605-4.607-2.315-2.315zM8.075 4.062c.14.14.22.331.22.53v2.953a.75.75 0 0 1-.75.75H4.592a.75.75 0 0 1-.53-.22l-.25-.25a3.425 3.425 0 0 0 4.252 2.66l.097-.02a.75.75 0 0 1 .626.215l4.533 4.533a.75.75 0 0 1 .195.724 3.425 3.425 0 0 0 2.659 4.25l-.25-.248a.75.75 0 0 1-.219-.53v-2.954a.75.75 0 0 1 .75-.75h2.953l.147.015c.144.028.278.1.383.205l.25.249a3.425 3.425 0 0 0-4.251-2.66.75.75 0 0 1-.724-.194L10.68 8.787a.75.75 0 0 1-.195-.724 3.425 3.425 0 0 0-2.66-4.251z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToolsIcon.displayName = "ToolsIcon";
export { ToolsIcon };
