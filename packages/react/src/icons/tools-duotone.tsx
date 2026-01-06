import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.835 12.849 4.23 17.455a1.637 1.637 0 0 0 2.315 2.316l4.605-4.607.822.821q-.046.27-.063.541l-4.303 4.305a3.137 3.137 0 0 1-4.437-4.436l4.305-4.306q.27-.016.54-.062zM19.885 2.3a.75.75 0 0 1 .802.17l.843.843a.75.75 0 0 1 .114.916l-1.267 2.11a.75.75 0 0 1-1.173.145l-.314-.314-4.354 4.352-1.06-1.06 4.353-4.353-.313-.313a.75.75 0 0 1 .144-1.173l2.11-1.267z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.901 2.417a4.925 4.925 0 0 1 6.126 5.597l3.958 3.958a4.925 4.925 0 0 1 5.598 6.127.75.75 0 0 1-1.255.337l-1.23-1.231h-1.893v1.893l1.23 1.23a.75.75 0 0 1-.336 1.255 4.925 4.925 0 0 1-6.127-5.598l-3.958-3.958a4.925 4.925 0 0 1-5.597-6.126l.032-.094a.75.75 0 0 1 1.223-.243l1.23 1.23h1.893V4.903l-1.23-1.23A.75.75 0 0 1 5.9 2.417m2.174 1.644c.14.141.22.332.22.53v2.954a.75.75 0 0 1-.75.75H4.592a.75.75 0 0 1-.53-.22l-.25-.25a3.425 3.425 0 0 0 4.252 2.66l.097-.02a.75.75 0 0 1 .626.215l4.533 4.533a.75.75 0 0 1 .195.724 3.425 3.425 0 0 0 2.659 4.25l-.25-.249a.75.75 0 0 1-.219-.53v-2.953a.75.75 0 0 1 .75-.75h2.953l.147.015c.144.028.278.1.383.205l.25.249a3.425 3.425 0 0 0-4.251-2.66.75.75 0 0 1-.724-.194L10.68 8.787a.75.75 0 0 1-.195-.724 3.425 3.425 0 0 0-2.66-4.252z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToolsIconDuotone.displayName = "ToolsIconDuotone";
export { ToolsIconDuotone };
