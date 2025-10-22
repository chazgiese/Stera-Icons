import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchiveIconFilltone = memo(
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
          d="M21.75 16.2c0 .828.001 1.494-.043 2.031-.045.547-.14 1.027-.366 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.321-1.47.366-.538.044-1.204.043-2.032.043H7.8c-.828 0-1.494.001-2.031-.043-.547-.045-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032V9.25h19.5z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M15 12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM21.2 2.25c.128 0 .269 0 .39.01.13.01.3.037.477.127.235.12.427.31.546.546.09.176.117.347.127.477.01.121.01.262.01.39v2.4c0 .128 0 .269-.01.39-.01.13-.037.3-.127.477-.12.236-.31.426-.546.546-.176.09-.347.117-.477.127-.121.01-.262.01-.39.01H2.8c-.128 0-.269 0-.39-.01-.13-.01-.3-.037-.477-.127a1.25 1.25 0 0 1-.546-.546 1.3 1.3 0 0 1-.127-.477c-.01-.121-.01-.262-.01-.39V3.8c0-.128 0-.269.01-.39.01-.13.037-.3.127-.477.12-.236.31-.426.546-.546.176-.09.347-.117.477-.127.121-.01.262-.01.39-.01z"
        />
      </svg>
    ))
);
ArchiveIconFilltone.displayName = "ArchiveIconFilltone";
export { ArchiveIconFilltone };
