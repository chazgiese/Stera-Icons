import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffBold = memo(
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
          d="M.229 4.365a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.271 1.543l-1.5-1.236-.048.029c-.485.247-1.003.345-1.565.391-.55.045-1.228.044-2.051.044H6.8c-.824 0-1.502.001-2.053-.044-.561-.046-1.079-.144-1.564-.391a4 4 0 0 1-1.748-1.748c-.247-.486-.346-1.003-.392-1.565C1 14.702 1 14.024 1 13.2v-2.4c0-.823 0-1.501.044-2.052.046-.562.145-1.079.392-1.564q.095-.186.207-.36L.365 5.773a1 1 0 0 1-.136-1.407m2.98 3.749c-.075.155-.137.378-.171.797C3 9.361 3 9.944 3 10.801v2.4c0 .856 0 1.438.038 1.888.035.438.1.663.18.82.192.376.498.682.874.873.157.08.381.145.82.181C5.362 17 5.944 17 6.8 17h5.4c.779 0 1.33-.002 1.762-.03zM12.2 5c.824 0 1.502 0 2.052.044.562.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.345 1.002.391 1.564q.007.096.011.197l3.408-2.726A1.001 1.001 0 0 1 23 7v10a1.001 1.001 0 0 1-1.625.782l-5-4A1 1 0 0 1 16 13v-2.2c0-.856 0-1.439-.037-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.157-.08-.382-.145-.82-.18C13.64 7 13.057 7 12.201 7H6.934a1 1 0 0 1 0-2zm5.8 6.48v1.039l3 2.4V9.08z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
VideoOffBold.displayName = "VideoOffBold";
export { VideoOffBold };
