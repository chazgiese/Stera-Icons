import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentDetailIconFilltone = memo(
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
          d="M13.299 1.008c.198.01.387.03.573.075.306.074.599.195.867.36.326.2.593.475.906.787l4.125 4.125c.312.313.588.58.788.906a3 3 0 0 1 .359.867c.09.372.083.756.083 1.197V15.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H10.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C2.999 17.59 3 16.703 3 15.599V8.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.73 1.544c.593-.302 1.233-.428 1.961-.487C8.41.999 9.297 1 10.401 1h2.274zM9 16a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm4.27-8.646a.25.25 0 0 0-.21.087c-.06.07-.06.223-.06.525V5.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C14.52 9 15.08 9 16.2 9h1.834c.303 0 .454 0 .525-.06a.25.25 0 0 0 .086-.21c-.007-.091-.114-.199-.328-.413l-4.634-4.634c-.214-.214-.322-.321-.413-.329"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 16a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2zM15 12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2zM13.27 3.355c.091.007.199.114.413.328l4.634 4.635c.214.214.321.32.328.413a.25.25 0 0 1-.086.209c-.07.06-.222.06-.525.06H16.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C13 7.481 13 6.92 13 5.8V3.966c0-.302 0-.454.06-.524a.25.25 0 0 1 .21-.087"
        />
      </svg>
    ))
);
DocumentDetailIconFilltone.displayName = "DocumentDetailIconFilltone";
export { DocumentDetailIconFilltone };
