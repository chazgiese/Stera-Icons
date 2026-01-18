import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquarePlaceholderIcon = memo(
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
          d="M13 2.25c1.388 0 2.473 0 3.345.07.88.072 1.607.222 2.265.557a5.75 5.75 0 0 1 2.513 2.513c.335.658.485 1.385.557 2.265.07.872.07 1.957.07 3.345v2c0 2.167.006 3.631-.297 4.745-.083.306-.19.592-.33.865a5.75 5.75 0 0 1-2.513 2.513c-.273.14-.559.247-.865.33-1.114.303-2.579.297-4.745.297h-2c-1.388 0-2.473 0-3.345-.07-.88-.072-1.607-.222-2.265-.557a5.75 5.75 0 0 1-2.513-2.513c-.335-.658-.485-1.385-.557-2.265-.07-.872-.07-1.957-.07-3.345v-2c0-2.166-.006-3.631.297-4.745.083-.306.19-.592.33-.865A5.75 5.75 0 0 1 5.39 2.877c.273-.14.56-.247.865-.33C7.369 2.244 8.833 2.25 11 2.25zM3.798 8.04c-.045.736-.048 1.68-.048 2.96v1.235l8.015 8.015H13c1.28 0 2.223-.004 2.959-.049zm-.042 6.322c.005.743.018 1.347.06 1.86.064.788.187 1.296.397 1.708a4.25 4.25 0 0 0 1.857 1.857c.412.21.92.333 1.707.398.513.042 1.117.053 1.86.058zM6.07 4.212A4.25 4.25 0 0 0 4.213 6.07q-.045.088-.083.181l13.618 13.618q.094-.038.182-.082a4.25 4.25 0 0 0 1.857-1.857q.044-.089.082-.182L6.251 4.13a3 3 0 0 0-.18.083M11 3.75c-1.28 0-2.224.003-2.96.048l12.161 12.161c.045-.736.049-1.68.049-2.959v-1.235L12.235 3.75zm9.243 5.887a26 26 0 0 0-.058-1.86c-.065-.787-.188-1.295-.398-1.707a4.25 4.25 0 0 0-1.857-1.857c-.412-.21-.92-.333-1.707-.398a26 26 0 0 0-1.86-.06z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SquarePlaceholderIcon.displayName = "SquarePlaceholderIcon";
export { SquarePlaceholderIcon };
