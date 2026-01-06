import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayIconDuotone = memo(
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
          d="M4.178 3.85c-.165.227-.292.597-.36 1.336-.067.735-.068 1.713-.068 3.085v7.458c0 1.372.001 2.35.068 3.085.068.739.195 1.11.36 1.336l-.608.44-.607.44c-.406-.56-.564-1.263-.639-2.079-.075-.82-.074-1.88-.074-3.222V8.27c0-1.342 0-2.402.074-3.222.075-.816.233-1.52.639-2.08z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.596 1.441c.688-.074 1.377.138 2.123.478.749.341 1.669.868 2.835 1.534l6.524 3.728c1.182.676 2.115 1.207 2.797 1.685.679.475 1.216.966 1.501 1.603.436.974.436 2.089 0 3.063-.285.636-.822 1.127-1.501 1.601-.682.478-1.615 1.01-2.797 1.686l-6.524 3.729c-1.166.666-2.086 1.192-2.835 1.534-.746.34-1.435.55-2.123.476a3.75 3.75 0 0 1-2.633-1.527l.607-.44.608-.44a2.25 2.25 0 0 0 1.58.916c.278.03.663-.043 1.338-.35.671-.307 1.52-.791 2.713-1.472l6.525-3.729c1.208-.69 2.069-1.182 2.682-1.611.616-.431.876-.73.99-.986a2.25 2.25 0 0 0 0-1.837c-.114-.257-.374-.555-.99-.987-.613-.428-1.474-.92-2.682-1.61l-6.525-3.73c-1.192-.681-2.042-1.166-2.713-1.472-.675-.307-1.06-.38-1.338-.35a2.25 2.25 0 0 0-1.58.916l-.608-.44-.607-.44a3.75 3.75 0 0 1 2.633-1.528"
        />
      </svg>
    ))
);
PlayIconDuotone.displayName = "PlayIconDuotone";
export { PlayIconDuotone };
