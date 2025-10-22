import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoIconFilled = memo(
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
          d="M12.2 5c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.748 1.748c.248.485.346 1.002.392 1.564.045.55.044 1.228.044 2.052v2.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 14.702 1 14.024 1 13.2v-2.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 4.999 5.976 5 6.8 5zM21.375 6.219A1.002 1.002 0 0 1 23 7v10a1 1 0 0 1-1.625.781l-2.476-1.98q.034-.237.053-.468c.05-.6.048-1.326.048-2.133v-2.4c0-.807.001-1.533-.048-2.133a8 8 0 0 0-.053-.469z"
        />
      </svg>
    ))
);
VideoIconFilled.displayName = "VideoIconFilled";
export { VideoIconFilled };
