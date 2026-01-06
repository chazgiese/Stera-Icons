import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SeedlingIconDuotone = memo(
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
          <path d="M2 7.25c2.965 0 5.543.99 6.895 2.34a3.75 3.75 0 0 1 .476 4.72l-1.1-1.1a2.25 2.25 0 0 0-.437-2.559c-.895-.894-2.73-1.72-5.057-1.874.154 2.326.98 4.162 1.875 5.056a2.25 2.25 0 0 0 2.558.438l1.1 1.1a3.75 3.75 0 0 1-4.72-.476C2.24 13.544 1.25 10.965 1.25 8v-.75zM22.735 4.016c0 2.535-.323 4.366-.88 5.787-.56 1.432-1.339 2.4-2.168 3.228a4.75 4.75 0 0 1-5.946.625c.252-.431.548-.839.888-1.214a3.25 3.25 0 0 0 3.997-.471c.733-.734 1.37-1.533 1.833-2.715.417-1.064.705-2.475.764-4.478-2.002.059-3.413.348-4.477.765-1.182.463-1.982 1.099-2.716 1.832a3.25 3.25 0 0 0-.465 4.009 8.7 8.7 0 0 0-.954 1.245 4.75 4.75 0 0 1 .359-6.315c.828-.828 1.797-1.607 3.23-2.168 1.42-.556 3.25-.88 5.785-.88h.75z" />
        </g>
        <path
          fill="currentColor"
          d="M15.47 9.47a.75.75 0 1 1 1.06 1.06l-1.657 1.657a7.25 7.25 0 0 0-2.123 5.126V21a.75.75 0 0 1-.331.622.747.747 0 0 1-1.041-.203.75.75 0 0 1-.128-.42v-1.342c0-.862-.343-1.69-.952-2.299L5.97 13.03a.75.75 0 1 1 1.06-1.06l4.286 4.286a8.75 8.75 0 0 1 2.497-5.13z"
        />
      </svg>
    ))
);
SeedlingIconDuotone.displayName = "SeedlingIconDuotone";
export { SeedlingIconDuotone };
