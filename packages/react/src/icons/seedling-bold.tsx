import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SeedlingIconBold = memo(
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
          d="M22.985 4.015c0 2.555-.326 4.418-.897 5.877-.577 1.474-1.38 2.47-2.224 3.315a5 5 0 0 1-6.033.797 7 7 0 0 0-.831 3.31V21a1 1 0 1 1-2 0v-1.343c0-.795-.316-1.56-.879-2.122l-1.847-1.847a4 4 0 0 1-4.86-.617C2.004 13.661 1 11.01 1 8V7h1c3.01 0 5.66 1.003 7.071 2.414a4 4 0 0 1 .618 4.861l1.454 1.454a9 9 0 0 1 1.164-3.085 5 5 0 0 1 .486-6.508c.844-.845 1.841-1.647 3.315-2.224 1.459-.57 3.322-.897 5.877-.897h1zM3.05 9.05c.197 2.142.975 3.802 1.78 4.607a2 2 0 0 0 1.93.516l-.966-.966a1 1 0 1 1 1.414-1.414l.966.966a2 2 0 0 0-.516-1.93c-.805-.806-2.465-1.582-4.608-1.78m17.914-4.013c-1.84.075-3.143.352-4.126.737-1.14.447-1.912 1.058-2.63 1.776a3 3 0 0 0-.584 3.413l1.67-1.67a1 1 0 1 1 1.414 1.414l-1.657 1.657-.013.012a3 3 0 0 0 3.412-.583c.718-.718 1.33-1.49 1.777-2.63.385-.983.662-2.286.737-4.126"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SeedlingIconBold.displayName = "SeedlingIconBold";
export { SeedlingIconBold };
