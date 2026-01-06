import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconBoldDuotone = memo(
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
          <path d="m8.835 13.202-4.429 4.43a1.387 1.387 0 0 0 1.962 1.962l4.429-4.43.907.907q-.075.527-.044 1.058l-3.878 3.879a3.387 3.387 0 0 1-4.79-4.79l3.88-3.88q.53.032 1.056-.043zM19.642 2.143a1 1 0 0 1 1.221.15l.844.844a1 1 0 0 1 .15 1.221l-1.265 2.11a1 1 0 0 1-1.565.193l-.137-.137-4 3.999-1.414-1.415 4-3.999-.137-.136a1 1 0 0 1 .193-1.565z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.837 2.176a5.175 5.175 0 0 1 6.458 5.752l3.777 3.776a5.175 5.175 0 0 1 5.753 6.459 1 1 0 0 1-1.673.45l-1.158-1.158h-1.539v1.54l1.158 1.157a1 1 0 0 1-.45 1.673 5.175 5.175 0 0 1-6.459-5.753l-3.776-3.777a5.175 5.175 0 0 1-5.752-6.458l.043-.126a1 1 0 0 1 1.63-.323l1.157 1.157h1.54V5.006L5.387 3.85a1 1 0 0 1 .45-1.673m2.66 2.112q.047.147.048.304v2.953a1 1 0 0 1-1 1H4.592q-.157 0-.304-.048A3.174 3.174 0 0 0 8 10.245l.13-.027a1 1 0 0 1 .835.285l4.533 4.534a1 1 0 0 1 .26.964 3.175 3.175 0 0 0 1.745 3.71q-.045-.147-.047-.302v-2.954a1 1 0 0 1 1-1h2.954l.098.005a1 1 0 0 1 .204.042 3.174 3.174 0 0 0-3.71-1.746 1 1 0 0 1-.965-.259l-4.533-4.533A1 1 0 0 1 10.245 8a3.175 3.175 0 0 0-1.748-3.71"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToolsIconBoldDuotone.displayName = "ToolsIconBoldDuotone";
export { ToolsIconBoldDuotone };
