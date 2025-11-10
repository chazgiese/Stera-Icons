import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarricadeIconFilltone = memo(
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
          <path d="m7.086 6 7 7H9.914L3.253 6.339a1 1 0 0 1 .293-.23c.05-.025.15-.062.422-.085C4.25 6.001 4.624 6 5.2 6zM18.8 6c.576 0 .949.001 1.232.024.272.023.373.06.422.085.188.096.34.249.437.437.025.05.062.15.085.422.023.283.024.656.024 1.232v1.886L16.914 6z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.8 4c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v2.6c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.336.027-.736.029-1.196.029L19 15v4a1 1 0 1 1-2 0v-4H7v4a1 1 0 1 1-2 0v-4.001c-.46 0-.86-.002-1.195-.03-.396-.032-.789-.103-1.167-.296a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 11.812 1 11.343 1 10.8V8.2c0-.483 0-.906.022-1.263L1 6.914V6.5A2.5 2.5 0 0 1 3.5 4zm-1.886 9H18.8c.576 0 .949-.001 1.232-.024.272-.023.373-.06.422-.085a1 1 0 0 0 .292-.23L14.086 6H9.914zM5.2 6c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.293.23L9.914 13h4.172l-7-7zM3 10.8c0 .576.001.949.024 1.232.023.272.06.373.085.422.096.188.249.34.437.437.05.025.15.062.422.085.283.023.656.024 1.232.024h1.886L3 8.914zm18-.714V8.2c0-.576-.001-.949-.024-1.232-.023-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.062-.422-.085A17 17 0 0 0 18.8 6h-1.886z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarricadeIconFilltone.displayName = "BarricadeIconFilltone";
export { BarricadeIconFilltone };
