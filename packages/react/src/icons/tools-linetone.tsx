import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconLinetone = memo(
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
          <path d="m8.835 13.202-4.429 4.43a1.387 1.387 0 0 0 1.962 1.962l4.429-4.43.907.907q-.076.527-.044 1.058l-3.878 3.879a3.387 3.387 0 0 1-4.79-4.79l3.879-3.88q.53.032 1.057-.043zM19.642 2.143a1 1 0 0 1 1.221.15l.844.844a1 1 0 0 1 .15 1.221l-1.265 2.11a1 1 0 0 1-1.565.193l-.137-.137-4 3.999-1.415-1.415 4-3.999-.136-.136a1 1 0 0 1 .193-1.565z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.838 2.176a5.175 5.175 0 0 1 6.458 5.752l3.776 3.776a5.175 5.175 0 0 1 5.753 6.459 1 1 0 0 1-1.673.45l-1.157-1.158h-1.54v1.54l1.158 1.157a1 1 0 0 1-.45 1.673 5.175 5.175 0 0 1-6.458-5.753l-3.777-3.777a5.175 5.175 0 0 1-5.752-6.458l.043-.126a1 1 0 0 1 1.63-.323l1.157 1.157h1.54V5.006L5.388 3.85a1 1 0 0 1 .45-1.673m2.66 2.112q.046.147.048.304v2.953a1 1 0 0 1-1 1H4.592q-.157 0-.303-.048a3.175 3.175 0 0 0 3.71 1.748l.13-.027a1 1 0 0 1 .835.285l4.534 4.534a1 1 0 0 1 .258.964 3.175 3.175 0 0 0 1.746 3.71 1 1 0 0 1-.046-.302v-2.954a1 1 0 0 1 1-1h2.953l.098.005q.106.01.204.042a3.174 3.174 0 0 0-3.71-1.746 1 1 0 0 1-.964-.259l-4.533-4.533a1 1 0 0 1-.26-.965 3.175 3.175 0 0 0-1.746-3.71"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToolsIconLinetone.displayName = "ToolsIconLinetone";
export { ToolsIconLinetone };
