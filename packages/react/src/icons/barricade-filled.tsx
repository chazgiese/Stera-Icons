import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarricadeIconFilled = memo(
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
          d="M18.8 5c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v2.6c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-.173.291v.054l-.021-.021a3 3 0 0 1-1.117.987c-.378.193-.771.264-1.167.297-.336.027-.736.029-1.196.029L19 16v4a1 1 0 1 1-2 0v-4H7v4a1 1 0 1 1-2 0v-4.001c-.46 0-.86-.002-1.195-.03-.396-.032-.789-.103-1.167-.296a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 12.812 1 12.343 1 11.8V9.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C4.188 5 4.657 5 5.2 5zM3 9.2v2.6c0 .576.001.949.024 1.232.023.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.062.422.085.283.023.656.024 1.232.024h3.3L3.003 8.503C3 8.697 3 8.926 3 9.2M15.5 14h3.3c.576 0 .949-.001 1.232-.024.272-.023.373-.06.422-.085a1 1 0 0 0 .437-.437.9.9 0 0 0 .069-.287L14.793 7H8.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarricadeIconFilled.displayName = "BarricadeIconFilled";
export { BarricadeIconFilled };
