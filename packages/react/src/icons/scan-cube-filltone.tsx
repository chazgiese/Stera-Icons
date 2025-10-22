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
        <g fill="currentColor" opacity={0.32}>
          <path d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M4.936 9.44c.159-.02.308.06.604.219l5.459 2.94v5.847c0 .304 0 .456-.072.576a.53.53 0 0 1-.4.24c-.141.007-.268-.061-.52-.197l-3.3-1.776c-.55-.296-1.035-.545-1.396-.929a3 3 0 0 1-.657-1.1c-.167-.5-.155-1.045-.155-1.67v-3.348c0-.31 0-.466.093-.597a.54.54 0 0 1 .344-.206M18.852 9.458c.257-.08.58.112.636.375.01.048.01.074.01.126v4.086c-.004.44-.029.84-.154 1.214-.138.41-.362.786-.658 1.101-.36.384-.846.632-1.396.929l-3.3 1.776c-.252.136-.377.204-.518.196a.53.53 0 0 1-.4-.239C13 18.902 13 18.75 13 18.446v-5.847l5.707-3.073c.066-.036.1-.054.146-.068M11.41 4.332c.388-.078.79-.078 1.178 0 .473.094.903.337 1.402.606l3.3 1.777.11.058c.286.153.428.231.498.383a.54.54 0 0 1 0 .417c-.07.152-.224.236-.534.403L12 10.865l-5.365-2.89c-.31-.166-.465-.25-.535-.401a.55.55 0 0 1 0-.418c.07-.152.213-.229.498-.382l.11-.06 3.3-1.776c.5-.269.93-.511 1.403-.606"
        />
      </svg>
    ))
);
ScanCubeIconFilltone.displayName = "ScanCubeIconFilltone";
export { ScanCubeIconFilltone };
