import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIconFilled = memo(
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
          d="M6.19 4.775a4 4 0 0 1 4.457-3.482l8.602 1.057.203.029a4 4 0 0 1 3.28 4.428l-1.056 8.602a4 4 0 0 1-2.934 3.375 4 4 0 0 1-.195.541 4 4 0 0 1-.618.969 4 4 0 0 1-.71.647 4 4 0 0 1-1.833.712L6.783 22.71a4 4 0 0 1-1.716-.163 4.01 4.01 0 0 1-2.711-3.117l-.03-.203-1.056-8.603a4 4 0 0 1 3.482-4.458l1.286-.158zm2.534 9.687a2.25 2.25 0 0 0-3.158.388l-1.523 1.948.269 2.185.035.201a2 2 0 0 0 2.193 1.54l8.603-1.056a2 2 0 0 0 .199-.035zm1.68-11.184a2 2 0 0 0-2.23 1.741l-.09.738 5.27-.647.205-.02a4 4 0 0 1 .587 0 4.01 4.01 0 0 1 3.667 3.504l.982 8.003c.478-.311.82-.822.896-1.432l1.056-8.602a2 2 0 0 0-1.54-2.193l-.201-.036zm1.513 6.32a1.834 1.834 0 1 0 .446 3.64 1.834 1.834 0 0 0-.446-3.64"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.19 4.776a4 4 0 0 1 4.457-3.482l8.602 1.056.203.03a4 4 0 0 1 3.28 4.428l-1.056 8.602a4 4 0 0 1-2.934 3.375 4 4 0 0 1-.195.541 4 4 0 0 1-.618.969 4 4 0 0 1-.71.647 4 4 0 0 1-1.833.712l-8.603 1.057a4 4 0 0 1-1.716-.163 4.01 4.01 0 0 1-2.711-3.117l-.03-.204-1.056-8.602a4 4 0 0 1 3.482-4.458l1.286-.158zm2.534 9.687a2.25 2.25 0 0 0-3.158.388l-1.523 1.948.269 2.185.035.201a2 2 0 0 0 2.193 1.54l8.603-1.056a2 2 0 0 0 .199-.035zm1.68-11.184a2 2 0 0 0-2.23 1.741l-.09.738 5.27-.647.205-.02a4 4 0 0 1 .587 0 4.01 4.01 0 0 1 3.667 3.504l.982 8.003c.478-.311.82-.822.896-1.432l1.056-8.602a2 2 0 0 0-1.54-2.193l-.201-.036zm1.513 6.32a1.834 1.834 0 1 0 .446 3.64 1.834 1.834 0 0 0-.446-3.64"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePileIconFilled.displayName = "ImagePileIconFilled";
export { ImagePileIconFilled };
