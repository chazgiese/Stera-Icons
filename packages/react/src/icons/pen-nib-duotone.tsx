import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenNibIconDuotone = memo(
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
          d="M11.25 1.25v1.5h-.873C8.22 5.67 6.088 9.196 5.19 12.214c-.466 1.565-.572 2.9-.269 3.916.286.959.96 1.724 2.307 2.156.31.1.52.388.52.714v1.75a.5.5 0 0 0 .5.5h7.502a.5.5 0 0 0 .5-.5V19a.75.75 0 0 1 .522-.714c1.347-.432 2.02-1.197 2.306-2.156.303-1.016.197-2.351-.27-3.916-.898-3.018-3.028-6.543-5.186-9.464h-.872v-1.5H14l.088.005a.75.75 0 0 1 .512.295c2.267 3.023 4.64 6.858 5.646 10.236.502 1.685.693 3.35.27 4.772-.395 1.327-1.302 2.356-2.766 2.964v1.228a2 2 0 0 1-2 2H12v-.001l-.002.001h-3.75a2 2 0 0 1-2-2v-1.23c-1.463-.607-2.37-1.635-2.764-2.962-.423-1.421-.233-3.087.268-4.772C4.758 8.408 7.132 4.573 9.4 1.55l.056-.068a.75.75 0 0 1 .543-.232z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.75 10.88a2.248 2.248 0 0 1-.75 4.37 2.25 2.25 0 0 1-.75-4.37V1.25h1.5z"
        />
      </svg>
    ))
);
PenNibIconDuotone.displayName = "PenNibIconDuotone";
export { PenNibIconDuotone };
