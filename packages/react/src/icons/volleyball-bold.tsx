import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VolleyballBold = memo(
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
          d="M12 1c1.932 0 3.75.499 5.33 1.375 1.803 1 3.295 2.493 4.295 4.296A10.96 10.96 0 0 1 23 12a10.997 10.997 0 0 1-11.845 10.968c-5.563-.424-9.968-4.982-10.149-10.609A10.997 10.997 0 0 1 12 1M6.554 11.993c.603 4.337 2.582 7.034 5.05 8.997a9.1 9.1 0 0 0 2.845-.332c-.92-.653-1.608-1.499-2.116-2.386-1.035-1.808-1.37-3.858-1.495-5.007-1.77-.742-3.17-1.13-4.284-1.272m-2.014.031a3.35 3.35 0 0 0-1.51.712 9 9 0 0 0 4.664 7.167c-1.572-1.997-2.73-4.535-3.154-7.879m16.42-.882c-1.016 2.508-3.048 4.937-6.335 6.959a4.63 4.63 0 0 0 2.157 1.522 8.99 8.99 0 0 0 4.177-8.481m-2.946-5.836c-.192 1.25-.813 2.488-1.599 3.627-.946 1.372-2.224 2.74-3.596 4.04.085.82.285 2.13.808 3.395 4.377-2.707 6.022-6.03 6.118-8.953a9 9 0 0 0-1.731-2.11m-7.812 1.37c-2-.447-4.198-.298-6.153 1.104a9 9 0 0 0-.897 2.582c.648-.26 1.395-.415 2.26-.432 1.62-.032 3.625.415 6.157 1.472 1.01-.965 1.925-1.936 2.666-2.884-.948-.713-2.39-1.473-4.033-1.841M12 3a8.96 8.96 0 0 0-5.032 1.537 10.5 10.5 0 0 1 3.671.189c1.864.417 3.534 1.26 4.715 2.13.631-1.145.838-2.113.656-2.915A8.96 8.96 0 0 0 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
VolleyballBold.displayName = "VolleyballBold";
export { VolleyballBold };
