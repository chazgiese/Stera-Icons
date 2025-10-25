import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeviceDesktopIconLinetone = memo(
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
          d="M15 15a1 1 0 0 1 1 1c0 1.258.46 3.053.755 4.057.279.95-.423 1.943-1.448 1.943H8.693c-1.025 0-1.727-.992-1.448-1.943C7.54 19.054 8 17.258 8 16a1 1 0 0 1 1-1zm-5.062 2c-.116 1.06-.38 2.181-.601 3h5.326c-.22-.819-.485-1.94-.601-3z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.558 2.004q.349.004.637.026c.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v6.6c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03H6.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C2 13.812 2 13.343 2 12.8V6.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C5.188 2 5.657 2 6.2 2h11.6zM6.2 4c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.062.15-.085.422C4.001 5.25 4 5.624 4 6.2v6.6c0 .576.001.949.024 1.232.023.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.062.422.085.283.023.656.024 1.232.024h11.6c.576 0 .949-.001 1.232-.024.272-.023.373-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.062-.15.085-.422.023-.283.024-.656.024-1.232V6.2c0-.576-.001-.949-.024-1.232-.023-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.062-.422-.085a8 8 0 0 0-.506-.021L17.8 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DeviceDesktopIconLinetone.displayName = "DeviceDesktopIconLinetone";
export { DeviceDesktopIconLinetone };
