import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PawPrintIconFill = memo(
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
          d="M12 9.5c1.275 0 2.209.331 2.907.941.653.57 1.005 1.315 1.263 1.84.078.16.246.39.528.73.244.295.617.718.922 1.098.605.753 1.38 1.836 1.38 3.058 0 1.041-.34 2.118-1.064 2.95-.743.85-1.84 1.383-3.209 1.383-.72 0-1.317-.159-1.772-.288-.501-.143-.734-.212-.955-.212s-.454.07-.955.212c-.455.13-1.052.288-1.773.288-1.368 0-2.465-.533-3.208-1.384C5.34 19.286 5 18.208 5 17.167c0-1.222.775-2.305 1.38-3.058.305-.38.678-.803.922-1.097.282-.34.45-.571.528-.73.258-.526.61-1.27 1.263-1.84.699-.61 1.632-.942 2.907-.942M4 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M8.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M15.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"
        />
      </svg>
    ))
);
PawPrintIconFill.displayName = "PawPrintIconFill";
export { PawPrintIconFill };
