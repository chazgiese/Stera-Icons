import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImageSquareIconFilled = memo(
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
        <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365a8 8 0 0 1-.23 1.42l.041.04-.264.622q-.06.14-.13.277a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622 4 4 0 0 1-.113-.242l-.02-.044-.048-.123q-.047-.12-.086-.24l-.033-.102a6 6 0 0 1-.076-.272l-.016-.064a7 7 0 0 1-.074-.347l-.02-.13a8 8 0 0 1-.097-.795l-.007-.1a17 17 0 0 1-.029-.5l-.009-.199-.002-.055-.015-.435.005-.006C2 14.462 2 13.776 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zm-2 2c-1.416 0-2.419 0-3.202.064-.772.064-1.244.183-1.614.372a4 4 0 0 0-1.748 1.748c-.19.37-.308.842-.372 1.614C4 8.58 4 9.584 4 11v2.085l2.44-2.439.113-.103a1.5 1.5 0 0 1 2.008.104l4.939 4.939 1.94-1.94.113-.103a1.5 1.5 0 0 1 1.893 0l.114.104 2.385 2.383c.052-.757.055-1.715.055-3.03v-2c0-1.416 0-2.419-.064-3.202-.064-.772-.183-1.244-.372-1.614a4 4 0 0 0-1.748-1.748c-.37-.19-.842-.308-1.614-.372C15.42 4 14.416 4 13 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImageSquareIconFilled.displayName = "ImageSquareIconFilled";
export { ImageSquareIconFilled };
