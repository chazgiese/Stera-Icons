import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoIconFillDuotone = memo(
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
          d="M21.375 6.219a1.002 1.002 0 0 1 1.625.78v10a1 1 0 0 1-1.625.782l-3.646-2.917c.02-.466.021-1.015.021-1.664v-2.4c0-.65 0-1.199-.021-1.665z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.324 5.255q.505.006.907.038c.547.045 1.027.14 1.471.366a3.75 3.75 0 0 1 1.639 1.639c.226.444.321.924.366 1.47.044.538.043 1.204.043 2.032v2.4c0 .828.001 1.494-.043 2.031-.045.547-.14 1.027-.366 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.321-1.47.366-.538.044-1.204.043-2.032.043H6.8c-.828 0-1.494.001-2.031-.043-.547-.045-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032v-2.4c0-.828-.001-1.494.043-2.031.045-.547.14-1.027.366-1.471a3.75 3.75 0 0 1 1.639-1.639c.444-.226.924-.321 1.47-.366.538-.044 1.204-.043 2.032-.043h5.4z"
        />
      </svg>
    ))
);
VideoIconFillDuotone.displayName = "VideoIconFillDuotone";
export { VideoIconFillDuotone };
