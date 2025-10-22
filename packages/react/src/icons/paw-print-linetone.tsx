import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PawPrintIconLinetone = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.32}
        >
          <path d="M4 7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 9.5c1.275 0 2.209.331 2.907.941.653.57 1.005 1.315 1.263 1.84.078.16.246.39.528.73.244.295.617.718.922 1.098.605.753 1.38 1.836 1.38 3.058 0 1.041-.34 2.118-1.064 2.95-.743.85-1.84 1.383-3.209 1.383-.72 0-1.317-.159-1.772-.288-.501-.143-.734-.212-.955-.212s-.454.07-.955.212c-.455.13-1.052.288-1.773.288-1.368 0-2.465-.533-3.208-1.384C5.34 19.286 5 18.208 5 17.167c0-1.222.775-2.305 1.38-3.058.305-.38.678-.803.922-1.097.282-.34.45-.571.528-.73.258-.526.61-1.27 1.263-1.84.699-.61 1.632-.942 2.907-.942m0 2c-.907 0-1.337.225-1.593.448-.3.263-.495.63-.782 1.215-.195.396-.505.79-.785 1.127-.318.383-.593.689-.902 1.072-.622.775-.938 1.36-.938 1.805 0 .625.206 1.215.571 1.634.349.399.889.699 1.701.699.429 0 .802-.091 1.226-.212.378-.107.934-.288 1.502-.288s1.124.18 1.502.288c.424.12.797.212 1.225.212.813 0 1.353-.3 1.702-.7.365-.418.57-1.008.571-1.633 0-.445-.316-1.03-.939-1.805-.308-.383-.583-.689-.9-1.072-.28-.337-.591-.73-.786-1.127-.287-.585-.481-.952-.782-1.215-.256-.223-.686-.448-1.593-.448"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PawPrintIconLinetone.displayName = "PawPrintIconLinetone";
export { PawPrintIconLinetone };
