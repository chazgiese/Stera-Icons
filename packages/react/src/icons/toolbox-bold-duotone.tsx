import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolboxIconBoldDuotone = memo(
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
          <path d="M16 12v2H8v-2z" />
          <path
            fillRule="evenodd"
            d="M18.8 6c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v6.6c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03H5.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 17.812 1 17.343 1 16.8v-6.6c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C4.188 6 4.657 6 5.2 6zM5.2 8c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.062.15-.085.422C3.001 9.25 3 9.624 3 10.2V12h3v2H3v2.8c0 .576.001.949.024 1.232.023.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.062.422.085.283.023.656.024 1.232.024h13.6c.576 0 .949-.001 1.232-.024.272-.023.373-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.062-.15.085-.422.023-.283.024-.656.024-1.232V14h-3v-2h3v-1.8c0-.576-.001-.949-.024-1.232-.023-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.062-.422-.085A17 17 0 0 0 18.8 8z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M7 10.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M17 10.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M9.584 4.5a.25.25 0 0 0-.247.215L9.153 6h-2.02l.223-1.568A2.25 2.25 0 0 1 9.584 2.5h4.832c1.12 0 2.07.823 2.228 1.932L16.867 6h-2.02l-.184-1.285a.25.25 0 0 0-.247-.215z"
        />
      </svg>
    ))
);
ToolboxIconBoldDuotone.displayName = "ToolboxIconBoldDuotone";
export { ToolboxIconBoldDuotone };
