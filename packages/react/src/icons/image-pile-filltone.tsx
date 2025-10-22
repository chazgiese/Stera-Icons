import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIconFilltone = memo(
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
          d="M6.19 4.775a4 4 0 0 1 4.456-3.482L19.25 2.35l.203.029a4 4 0 0 1 3.28 4.428l-1.056 8.602a4 4 0 0 1-4.458 3.483l-1.34-.165.243-1.985 1.34.165a2 2 0 0 0 2.23-1.742l1.056-8.602a2 2 0 0 0-1.54-2.193l-.201-.036-8.603-1.056A2 2 0 0 0 8.175 5.02l-.382 3.103-1.984-.244z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.952 5.082q.098.001.194.01a4.006 4.006 0 0 1 3.666 3.502l1.057 8.602q.05.412.018.81a3.98 3.98 0 0 1-.958 2.288 4 4 0 0 1-.71.648 4 4 0 0 1-1.833.712L6.783 22.71a4 4 0 0 1-1.717-.163 4.01 4.01 0 0 1-2.71-3.117l-.03-.203-1.056-8.603a4 4 0 0 1 3.482-4.458l8.603-1.055.204-.02q.198-.015.393-.01m-5.228 9.38a2.25 2.25 0 0 0-3.159.388l-1.522 1.948.269 2.186.035.201a2 2 0 0 0 2.193 1.54l8.603-1.057a2 2 0 0 0 .199-.035zm3.193-4.864a1.833 1.833 0 1 0 .446 3.64 1.833 1.833 0 0 0-.446-3.64"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePileIconFilltone.displayName = "ImagePileIconFilltone";
export { ImagePileIconFilltone };
