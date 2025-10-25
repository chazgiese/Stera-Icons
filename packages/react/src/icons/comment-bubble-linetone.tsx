import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommentBubbleIconLinetone = memo(
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H5.571c-.476 0-.882.006-1.239-.075a3 3 0 0 1-2.257-2.257c-.081-.357-.075-.763-.075-1.24V12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-8 8v6.429c0 .586.007.712.026.794a1 1 0 0 0 .751.752c.083.018.208.025.794.025h6.43a8 8 0 1 0 0-16"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3 14a1 1 0 0 1 1 1v2.8c0 .576.001.949.024 1.232.023.272.06.373.085.422.096.188.249.34.437.437.05.025.15.062.422.085.283.023.656.024 1.232.024H9a1 1 0 1 1 0 2H6.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C2 18.812 2 18.343 2 17.8V15a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CommentBubbleIconLinetone.displayName = "CommentBubbleIconLinetone";
export { CommentBubbleIconLinetone };
