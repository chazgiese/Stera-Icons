import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FilmStripIconFillDuotone = memo(
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
          <path d="M15.5 13v7h-7v-7zM15.5 4v7h-7V4z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.53 2.001c.676 0 1.247.004 1.722.043.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v8.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.475.039-1.046.041-1.723.042L16.5 22h-9l-.03-.002c-.677 0-1.247-.003-1.722-.042-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C1.999 17.702 2 17.024 2 16.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392.475-.039 1.045-.042 1.722-.043L7.5 2h9zM8.5 20h7v-7h-7zm-4.49-2.5q.007.33.027.589c.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18q.258.021.588.027V17.5zm13.49 0v2.49q.33-.008.589-.027c.438-.036.663-.101.82-.18a2 2 0 0 0 .873-.875c.08-.156.145-.38.18-.82a11 11 0 0 0 .028-.588zm0-2H20V13h-2.5zM4 15.5h2.5V13H4zM4 11h2.5V8.5H4zm4.5 0h7V4h-7zm9 0H20V8.5h-2.5zm-11-6.99q-.33.007-.589.027c-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82q-.021.258-.028.588H6.5zm11 2.49h2.49a11 11 0 0 0-.027-.589c-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18a11 11 0 0 0-.588-.028z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FilmStripIconFillDuotone.displayName = "FilmStripIconFillDuotone";
export { FilmStripIconFillDuotone };
