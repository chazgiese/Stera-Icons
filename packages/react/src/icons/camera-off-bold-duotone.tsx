import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CameraOffIconBoldDuotone = memo(
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
          <path d="M6.526 7.94a3 3 0 0 1-.26.041c-.18.02-.366.019-.58.019-.68 0-.888.004-1.042.032a2 2 0 0 0-1.612 1.611c-.028.155-.032.363-.032 1.042V15.2c0 .856 0 1.439.037 1.889.036.438.101.663.18.819.192.376.499.682.875.874.156.08.38.145.82.18C5.361 19 5.942 19 6.8 19h10.786l2 2H6.8c-.824 0-1.502 0-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 16.702 1 16.023 1 15.2v-4.515c0-.592-.004-1.023.064-1.399a4 4 0 0 1 3.222-3.222q.154-.027.323-.04zM13.287 3c.564 0 1.055-.01 1.515.13.377.114.728.302 1.033.552.37.306.635.719.947 1.188l.32.481c.145.217.176.26.204.293a1 1 0 0 0 .652.35c.043.005.096.006.356.006.593 0 1.024-.004 1.4.064a4 4 0 0 1 3.222 3.222c.068.376.064.807.064 1.4v7.059a1 1 0 0 1-2 0v-7.06c0-.68-.004-.887-.032-1.042a2 2 0 0 0-1.612-1.61C19.202 8.003 18.994 8 18.314 8c-.214 0-.4.002-.58-.019a3 3 0 0 1-1.958-1.048c-.117-.138-.219-.294-.338-.472l-.32-.482c-.382-.572-.466-.68-.554-.752a1 1 0 0 0-.343-.184C14.112 5.01 13.975 5 13.287 5h-2.574c-.688 0-.825.01-.934.043a1 1 0 0 0-.343.184l-.017.015a1 1 0 0 1-1.342-1.484l.088-.076c.305-.25.656-.438 1.033-.552.46-.14.951-.13 1.515-.13z" />
          <path d="M10.036 11.45a2.5 2.5 0 0 0 3.513 3.513l1.418 1.418a4.5 4.5 0 0 1-6.35-6.35z" />
        </g>
        <path
          fill="currentColor"
          d="M1.793 1.793a1 1 0 0 1 1.414 0l20 20a1 1 0 1 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
CameraOffIconBoldDuotone.displayName = "CameraOffIconBoldDuotone";
export { CameraOffIconBoldDuotone };
