import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NodeMapIcon = memo(
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
          d="M7.25 2.25a3 3 0 0 1 2.284 4.942l1.408 2.002a2.99 2.99 0 0 1 3.608 1.228l1.705-.528q-.004-.072-.005-.144a3 3 0 1 1 .45 1.577l-1.706.528Q15 11.927 15 12c0 .463-.106.902-.294 1.294l1.802 1.513a3 3 0 1 1-.965 1.149l-1.802-1.514c-.49.35-1.092.558-1.741.558-.671 0-1.29-.222-1.79-.594L6.981 17.01a3 3 0 1 1-.942-1.167l3.229-2.604A3 3 0 0 1 9 12c0-.742.27-1.42.715-1.943L8.307 8.055a3 3 0 0 1-1.057.195 3 3 0 0 1 0-6m-3 14.5a1.5 1.5 0 1 0 1.242.658l-.074-.1a1.5 1.5 0 0 0-1.168-.558m14-1c-.46 0-.872.207-1.148.535a1.5 1.5 0 1 0 1.148-.535M12 10.5a1.498 1.498 0 0 0-1.168 2.441c.276.342.697.559 1.168.559.46 0 .872-.207 1.148-.535a1.49 1.49 0 0 0 .285-1.41A1.5 1.5 0 0 0 12 10.5m7.25-2.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-12-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NodeMapIcon.displayName = "NodeMapIcon";
export { NodeMapIcon };
