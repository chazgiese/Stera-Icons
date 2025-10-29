import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ContactBookIconFilltone = memo(
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
          d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v6.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 15.59 1 14.703 1 13.599V10.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 3.73 3.544c.593-.302 1.233-.428 1.961-.487C6.41 2.999 7.297 3 8.401 3zM17 19h.2c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 0 0 .873-.875c.08-.156.145-.38.18-.82.03-.362.035-.812.036-1.422H17zM9.5 7.5a3 3 0 0 0-3 3c0 .979.47 1.845 1.195 2.393a4.07 4.07 0 0 0-2.132 2.256A1 1 0 0 0 6.5 16.5h6a1 1 0 0 0 .937-1.35 4.07 4.07 0 0 0-2.133-2.257A3 3 0 0 0 12.5 10.5a3 3 0 0 0-3-3m7.5 6.166h4v-3.332h-4zm0-5.332h3.998a19 19 0 0 0-.035-1.423c-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C18.639 5 18.058 5 17.2 5H17z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.5 7.5a3 3 0 0 1 3 3c0 .979-.471 1.845-1.196 2.393a4.07 4.07 0 0 1 2.133 2.256A1 1 0 0 1 12.5 16.5h-6a1 1 0 0 1-.936-1.35 4.07 4.07 0 0 1 2.131-2.257A3 3 0 0 1 6.5 10.5a3 3 0 0 1 3-3"
        />
      </svg>
    ))
);
ContactBookIconFilltone.displayName = "ContactBookIconFilltone";
export { ContactBookIconFilltone };
