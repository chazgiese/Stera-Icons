import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayIcon = memo(
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
          d="M5.597 1.44c.688-.074 1.376.137 2.122.477.749.342 1.668.868 2.835 1.534l6.525 3.73c1.182.675 2.115 1.207 2.797 1.684.679.475 1.215.966 1.5 1.603a3.75 3.75 0 0 1 0 3.063c-.285.636-.821 1.127-1.5 1.602-.682.478-1.615 1.01-2.797 1.685l-6.525 3.73c-1.167.666-2.086 1.192-2.835 1.533-.746.34-1.434.551-2.122.477a3.75 3.75 0 0 1-2.634-1.528c-.406-.56-.564-1.264-.639-2.08-.075-.82-.074-1.88-.074-3.222V8.27c0-1.343-.001-2.403.074-3.223.075-.816.233-1.519.639-2.079a3.75 3.75 0 0 1 2.634-1.528m.16 1.492a2.25 2.25 0 0 0-1.58.917c-.164.227-.29.598-.359 1.336-.067.735-.068 1.713-.068 3.086v7.457c0 1.373.001 2.35.068 3.086.068.738.195 1.109.36 1.336a2.25 2.25 0 0 0 1.58.917c.279.03.664-.043 1.339-.35.671-.307 1.52-.792 2.713-1.473l6.525-3.728c1.208-.69 2.068-1.183 2.68-1.611.617-.431.877-.73.992-.987a2.25 2.25 0 0 0 0-1.838c-.115-.257-.376-.555-.991-.986-.613-.429-1.473-.921-2.681-1.611L9.81 4.754c-1.192-.68-2.042-1.165-2.713-1.472-.675-.307-1.06-.38-1.34-.35"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlayIcon.displayName = "PlayIcon";
export { PlayIcon };
