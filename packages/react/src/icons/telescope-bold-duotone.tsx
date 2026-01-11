import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TelescopeIconBoldDuotone = memo(
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
          <path d="M14.466 4.372a2.99 2.99 0 0 0-.215 2.112l.02.078L7.65 8.894l.715 2.669 1.131-.212a2.99 2.99 0 0 0-.459 2.12l-2.124.398-1.674-6.246zM15.286 10.349c.197.735.653 1.33 1.241 1.72l-1.595.298a3 3 0 0 0-1.195-1.81l1.528-.286zM9.84 15.08a3 3 0 0 0 1.79.896l-2.736 5.471a1 1 0 0 1-1.789-.894zM16.894 20.553a1 1 0 0 1-1.789.894l-2.736-5.471a3 3 0 0 0 1.789-.896z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="m5.757 9.56-1.674.59a.25.25 0 0 0-.158.3l.437 1.627a.25.25 0 0 0 .287.182l1.744-.327.52 1.937-1.896.356a2.25 2.25 0 0 1-2.587-1.63l-.437-1.628A2.25 2.25 0 0 1 3.42 8.263l1.82-.64z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.063 2.357a2.25 2.25 0 0 1 2.755 1.591l1.423 5.313a2.25 2.25 0 0 1-1.59 2.756l-1.69.453a3 3 0 0 1-3.675-2.121L14.25 6.484a3 3 0 0 1 2.122-3.673zm.517 1.932-1.69.453a1 1 0 0 0-.707 1.225l1.035 3.864a1 1 0 0 0 1.225.707l1.69-.453a.25.25 0 0 0 .177-.306l-1.424-5.313a.25.25 0 0 0-.306-.177"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TelescopeIconBoldDuotone.displayName = "TelescopeIconBoldDuotone";
export { TelescopeIconBoldDuotone };
