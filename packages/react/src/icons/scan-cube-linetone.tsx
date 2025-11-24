import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCubeIconLinetone = memo(
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
          <path d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.254 4.454c.492-.098 1-.098 1.492 0 .59.119 1.13.422 1.851.81l2.02 1.087c.796.428 1.403.74 1.853 1.22.375.4.66.876.833 1.395.21.624.197 1.307.197 2.21v1.648c0 .903.012 1.587-.197 2.21-.174.52-.458.996-.833 1.395-.45.48-1.057.793-1.852 1.22l-2.02 1.087c-.722.389-1.262.692-1.852.81-.493.099-1 .099-1.492 0-.591-.118-1.131-.421-1.852-.81l-2.02-1.086c-.796-.428-1.403-.741-1.853-1.221-.375-.4-.66-.875-.833-1.395-.209-.623-.196-1.307-.196-2.21v-1.648c0-.903-.013-1.586.196-2.21.174-.52.458-.995.833-1.395.45-.48 1.057-.792 1.852-1.22l2.021-1.087c.72-.388 1.261-.691 1.852-.81m-4.742 5.728c-.009.227-.012.539-.012.994v1.648c0 1.043.012 1.334.092 1.576.083.245.218.47.395.66.174.185.425.333 1.343.828l2.02 1.088c.274.147.484.257.65.342v-4.72zM13 12.598v4.72c.165-.085.375-.195.65-.342l2.02-1.088c.917-.494 1.168-.643 1.342-.828.178-.19.313-.415.395-.66.08-.242.093-.533.093-1.576v-1.648c0-.456-.005-.768-.014-.995zm-.647-6.183a1.8 1.8 0 0 0-.707 0c-.229.046-.465.162-1.296.61L8.33 8.112c-.304.164-.533.29-.712.392L12 10.864l4.38-2.36a37 37 0 0 0-.711-.392l-2.02-1.087c-.832-.448-1.068-.564-1.297-.61"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanCubeIconLinetone.displayName = "ScanCubeIconLinetone";
export { ScanCubeIconLinetone };
