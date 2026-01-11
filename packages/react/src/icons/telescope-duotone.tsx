import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TelescopeIconDuotone = memo(
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
          <path d="M10.147 15.027c.369.338.829.577 1.34.673l-2.816 5.635a.75.75 0 0 1-1.342-.67zM16.67 20.665a.75.75 0 0 1-1.34.67L12.511 15.7c.511-.096.97-.335 1.34-.673zM14.643 4.575a2.74 2.74 0 0 0-.153 1.838l-.047-.177-7.095 2.498.835 3.117 1.467-.276c-.252.416-.4.903-.4 1.425q.002.088.009.175l-2.165.406-1.554-5.8zM15.532 10.299a2.74 2.74 0 0 0 1.048 1.506l-1.959.366a2.75 2.75 0 0 0-.946-1.349l1.902-.355z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="m5.54 7.781.389 1.453L4 9.913a.5.5 0 0 0-.317.6l.436 1.63a.5.5 0 0 0 .575.36l2.009-.376.389 1.453-2.122.398a2 2 0 0 1-2.3-1.448l-.437-1.628a2 2 0 0 1 1.268-2.404z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.127 2.6a2 2 0 0 1 2.45 1.413L22 9.326a2 2 0 0 1-1.414 2.45l-1.69.452a2.75 2.75 0 0 1-3.369-1.944L14.492 6.42a2.75 2.75 0 0 1 1.944-3.368zm.388 1.448-1.69.453a1.25 1.25 0 0 0-.885 1.531l1.036 3.863a1.25 1.25 0 0 0 1.53.884l1.691-.452a.5.5 0 0 0 .354-.613L19.127 4.4a.5.5 0 0 0-.612-.353"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TelescopeIconDuotone.displayName = "TelescopeIconDuotone";
export { TelescopeIconDuotone };
