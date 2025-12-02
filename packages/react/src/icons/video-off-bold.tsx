import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffIconBold = memo(
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
          d="M.23 4.365a1 1 0 0 1 1.406-.136l17 14a1 1 0 0 1-1.271 1.543l-1.5-1.235q-.023.015-.048.028c-.485.247-1.002.345-1.564.391-.55.045-1.229.044-2.052.044H6.8c-.824 0-1.502.001-2.052-.044-.562-.045-1.08-.144-1.565-.391a4 4 0 0 1-1.748-1.748c-.247-.485-.345-1.003-.391-1.565C1 14.702 1 14.024 1 13.201v-2.4c0-.824-.001-1.502.044-2.053.046-.562.144-1.079.391-1.564a4 4 0 0 1 .207-.36L.365 5.773a1 1 0 0 1-.136-1.407m2.979 3.749c-.075.155-.137.379-.171.798C3 9.362 3 9.944 3 10.8v2.4c0 .857 0 1.44.037 1.89.036.438.1.662.18.819.192.376.498.682.874.874.157.08.382.144.82.18C5.362 17 5.944 17 6.8 17h5.4c.779 0 1.33-.002 1.763-.03zM12.2 5c.824 0 1.502 0 2.053.044.562.046 1.079.145 1.564.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.003.392 1.564q.006.096.01.197l3.409-2.726A1.001 1.001 0 0 1 23 7v10a1 1 0 0 1-1.625.782l-5-4A1 1 0 0 1 16 13v-2.2c0-.856 0-1.438-.038-1.888-.035-.439-.1-.663-.18-.82a2 2 0 0 0-.874-.874c-.157-.08-.381-.145-.82-.18C13.64 7 13.058 7 12.202 7H6.934a1 1 0 0 1 0-2zm5.8 6.48v1.039l3 2.4V9.08z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
VideoOffIconBold.displayName = "VideoOffIconBold";
export { VideoOffIconBold };
