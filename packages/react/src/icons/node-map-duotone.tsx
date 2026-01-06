import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NodeMapIconDuotone = memo(
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
          <path d="M9.269 13.237c.21.466.538.865.943 1.167l-3.233 2.607a3 3 0 0 0-.942-1.167zM16.51 14.809a3 3 0 0 0-.965 1.148l-1.806-1.517c.412-.293.745-.688.965-1.148zM16.253 9.895a3 3 0 0 0 .447 1.43l-1.704.53a3 3 0 0 0-.447-1.431zM10.942 9.194c-.48.181-.9.48-1.227.864L8.307 8.055a3 3 0 0 0 1.226-.863z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.25 15.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.25 14.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19.25 6.75a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.25 2.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NodeMapIconDuotone.displayName = "NodeMapIconDuotone";
export { NodeMapIconDuotone };
