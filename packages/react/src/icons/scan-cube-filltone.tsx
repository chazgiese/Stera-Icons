import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCubeIconFilltone = memo(
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
          d="M4.937 9.439c.158-.02.307.06.603.22L11 12.598v5.848c0 .304 0 .456-.073.576a.53.53 0 0 1-.4.24c-.14.007-.267-.062-.519-.197l-3.3-1.777c-.55-.296-1.035-.544-1.396-.928a3 3 0 0 1-.658-1.1c-.167-.5-.155-1.045-.155-1.67v-3.348c0-.311 0-.467.093-.597a.54.54 0 0 1 .345-.206M18.853 9.457c.256-.078.58.113.635.375.01.049.01.075.011.126v4.086c-.004.44-.03.84-.155 1.215-.137.41-.362.786-.657 1.1-.361.385-.847.633-1.397.93l-3.3 1.776c-.251.135-.377.204-.517.196a.53.53 0 0 1-.4-.24c-.073-.119-.074-.271-.074-.575v-5.847l5.707-3.073c.067-.036.1-.054.147-.069M11.41 4.331c.389-.077.79-.077 1.178 0 .473.095.904.338 1.402.607l3.3 1.776.11.059c.286.153.428.23.499.383a.54.54 0 0 1 0 .417c-.07.152-.225.236-.535.403L12 10.865l-5.365-2.89c-.309-.166-.464-.25-.534-.401a.55.55 0 0 1 0-.418c.07-.152.213-.23.498-.382l.11-.06 3.3-1.776c.499-.269.93-.512 1.402-.607"
        />
      </svg>
    ))
);
ScanCubeIconFilltone.displayName = "ScanCubeIconFilltone";
export { ScanCubeIconFilltone };
