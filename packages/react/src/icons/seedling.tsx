import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SeedlingIcon = memo(
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
          d="M22.735 4.015c0 2.535-.323 4.365-.88 5.786-.56 1.432-1.339 2.4-2.168 3.23a4.75 4.75 0 0 1-5.946.624 7.25 7.25 0 0 0-.991 3.659V21a.75.75 0 0 1-1.5 0v-1.343c0-.862-.343-1.69-.952-2.299L8.31 15.371a3.75 3.75 0 0 1-4.72-.476C2.24 13.543 1.25 10.965 1.25 8v-.75H2c2.964 0 5.543.99 6.895 2.34a3.75 3.75 0 0 1 .476 4.72l1.945 1.946a8.75 8.75 0 0 1 1.296-3.627 4.75 4.75 0 0 1 .358-6.316c.828-.829 1.797-1.607 3.23-2.167 1.42-.557 3.25-.881 5.785-.881h.75zM2.777 8.777c.154 2.326.98 4.163 1.875 5.057a2.25 2.25 0 0 0 2.559.438L5.97 13.03a.75.75 0 1 1 1.06-1.06l1.241 1.24a2.25 2.25 0 0 0-.437-2.559c-.895-.894-2.73-1.72-5.057-1.874m18.446-4c-2.002.059-3.413.348-4.477.764-1.182.463-1.982 1.099-2.716 1.832a3.25 3.25 0 0 0-.464 4.012q.12-.131.246-.258L15.47 9.47a.75.75 0 1 1 1.06 1.06l-1.657 1.658a7 7 0 0 0-.243.254 3.25 3.25 0 0 0 3.996-.472c.733-.734 1.37-1.534 1.833-2.716.416-1.064.705-2.475.764-4.477"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SeedlingIcon.displayName = "SeedlingIcon";
export { SeedlingIcon };
