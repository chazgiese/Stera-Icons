import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayIconLinetone = memo(
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
          d="M5.57 1.192c.756-.082 1.495.153 2.252.498.762.348 1.694.88 2.856 1.544l-.992 1.737C8.489 4.288 7.652 3.81 6.993 3.51c-.663-.303-.997-.352-1.208-.33a2 2 0 0 0-1.404.815c-.124.171-.247.487-.314 1.213C4.001 5.928 4 6.893 4 8.27v7.458c0 1.378.001 2.342.067 3.063.067.725.19 1.04.314 1.212a2 2 0 0 0 1.404.815c.21.023.545-.028 1.208-.33.659-.3 1.497-.777 2.693-1.46l.992 1.735c-1.162.664-2.094 1.198-2.856 1.545-.757.346-1.496.58-2.253.498a4 4 0 0 1-2.808-1.63c-.447-.615-.61-1.374-.686-2.203C2 18.14 2 17.066 2 15.728V8.27c0-1.338-.001-2.41.075-3.245.076-.829.24-1.587.686-2.203a4 4 0 0 1 2.808-1.63"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M17.203 6.962c1.178.673 2.123 1.211 2.817 1.697.689.482 1.271 1.005 1.585 1.705a4 4 0 0 1 0 3.267c-.314.7-.896 1.224-1.585 1.706-.694.486-1.64 1.023-2.817 1.696l-6.525 3.73-.992-1.737 6.525-3.73c1.212-.692 2.06-1.177 2.661-1.598.606-.424.82-.69.907-.883a2 2 0 0 0 0-1.634c-.087-.194-.302-.46-.907-.883-.6-.42-1.45-.907-2.661-1.6L9.686 4.97l.992-1.737z"
        />
      </svg>
    ))
);
PlayIconLinetone.displayName = "PlayIconLinetone";
export { PlayIconLinetone };
