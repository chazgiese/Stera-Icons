import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRightIconFilltone = memo(
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
        <path fill="currentColor" d="M22 13H2v-2h20z" opacity={0.32} />
        <path
          fill="currentColor"
          d="M5.97 6.97a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-1.28.53l-4.5-4.5-.052-.056a.75.75 0 0 1 .052-1.004zM17.213 6.807a.75.75 0 0 1 .817.163l4.5 4.5a.75.75 0 0 1 .094.946l-.094.114-4.5 4.5a.75.75 0 0 1-1.28-.53v-9a.75.75 0 0 1 .463-.693"
        />
      </svg>
    ))
);
ArrowLeftRightIconFilltone.displayName = "ArrowLeftRightIconFilltone";
export { ArrowLeftRightIconFilltone };
