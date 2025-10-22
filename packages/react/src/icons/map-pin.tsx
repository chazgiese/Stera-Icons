import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinIcon = memo(
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
          d="M12 6.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c4.848 0 8.75 4.015 8.75 8.932 0 1.539-.561 3.088-1.343 4.51-.785 1.427-1.822 2.78-2.843 3.94a36.5 36.5 0 0 1-4 3.876l-.07.057-.024.02h-.002l-.001.002-.03.02a1 1 0 0 1-.114.067l-.044.02a.7.7 0 0 1-.216.052l-.006.001-.057.003q-.02 0-.04-.003h-.012a.8.8 0 0 1-.224-.05l-.043-.021q-.02-.007-.04-.018l-.032-.02-.05-.034-.029-.019-.024-.02-.07-.057q-.093-.076-.263-.219a36.507 36.507 0 0 1-3.736-3.657c-1.022-1.16-2.059-2.513-2.844-3.94-.782-1.422-1.343-2.971-1.343-4.51C3.25 5.265 7.152 1.25 12 1.25m0 1.5c-3.988 0-7.25 3.311-7.25 7.432 0 1.188.44 2.48 1.157 3.786.715 1.299 1.678 2.56 2.656 3.673A35 35 0 0 0 11.975 21h.05a35.002 35.002 0 0 0 3.411-3.36c.98-1.112 1.942-2.373 2.657-3.672.718-1.306 1.157-2.598 1.157-3.786 0-4.12-3.262-7.432-7.25-7.432"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapPinIcon.displayName = "MapPinIcon";
export { MapPinIcon };
