import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicOffIcon = memo(
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
          d="M1.47 1.47a.75.75 0 0 1 1.06 0l12.247 12.247a1 1 0 0 1 .088.088l2.745 2.745q.056.044.103.1l.008.01 4.81 4.81a.75.75 0 1 1-1.061 1.06l-4.4-4.4a8.7 8.7 0 0 1-4.32 1.587v1.533H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.534c-4.481-.38-8-4.136-8-8.716a.75.75 0 0 1 1.5 0 7.25 7.25 0 0 0 11.241 6.052l-1.826-1.826A4.75 4.75 0 0 1 7.25 11V8.31L1.47 2.53a.75.75 0 0 1 0-1.06M8.75 11a3.25 3.25 0 0 0 4.273 3.084L8.75 9.811z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M20 10.25a.75.75 0 0 1 .75.75c0 1.5-.379 2.915-1.046 4.151a.75.75 0 0 1-1.32-.713A7.2 7.2 0 0 0 19.25 11a.75.75 0 0 1 .75-.75M12 1.25A4.75 4.75 0 0 1 16.75 6v5.055a.75.75 0 0 1-1.5 0V6a3.25 3.25 0 0 0-5.936-1.831.75.75 0 0 1-1.238-.846A4.75 4.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
MicOffIcon.displayName = "MicOffIcon";
export { MicOffIcon };
