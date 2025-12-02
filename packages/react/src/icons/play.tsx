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
          d="M5.597 1.441c.688-.074 1.376.137 2.122.477.749.341 1.668.867 2.835 1.534l6.525 3.73c1.182.675 2.115 1.206 2.797 1.684.679.475 1.215.966 1.5 1.603a3.75 3.75 0 0 1 0 3.062c-.285.637-.821 1.127-1.5 1.602-.682.478-1.615 1.01-2.797 1.685l-6.525 3.73c-1.167.666-2.086 1.192-2.835 1.534-.746.34-1.434.55-2.122.476a3.75 3.75 0 0 1-2.634-1.528c-.406-.56-.564-1.263-.639-2.08-.075-.819-.074-1.879-.074-3.222V8.271c0-1.343-.001-2.403.074-3.222.075-.816.233-1.52.639-2.08a3.75 3.75 0 0 1 2.634-1.528m.16 1.491a2.25 2.25 0 0 0-1.58.917c-.164.227-.29.598-.359 1.336-.067.735-.068 1.713-.068 3.086v7.457c0 1.373.001 2.351.068 3.086.068.738.195 1.11.36 1.336a2.25 2.25 0 0 0 1.58.917c.279.03.664-.043 1.339-.35.671-.307 1.52-.791 2.713-1.472l6.525-3.729c1.208-.69 2.068-1.182 2.68-1.611.617-.431.877-.73.992-.986a2.25 2.25 0 0 0 0-1.838c-.115-.257-.376-.556-.991-.986-.613-.43-1.473-.922-2.681-1.612L9.81 4.755c-1.192-.681-2.042-1.166-2.713-1.472-.675-.308-1.06-.38-1.34-.35"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlayIcon.displayName = "PlayIcon";
export { PlayIcon };
