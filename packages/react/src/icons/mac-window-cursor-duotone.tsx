import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MacWindowCursorIconDuotone = memo(
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
          <path d="M17.2 3.25c.828 0 1.494-.001 2.031.043.547.045 1.027.14 1.471.366a3.75 3.75 0 0 1 1.639 1.639c.226.444.321.924.366 1.47.044.538.043 1.204.043 2.032v1.99a.75.75 0 0 1-1.5 0V8.8c0-.853 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207-.462-.038-1.057-.038-1.909-.038H6.8c-.853 0-1.447 0-1.91.038-.453.037-.714.106-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.038.462-.038 1.056-.038 1.909v6.4c0 .852 0 1.447.038 1.91.037.453.106.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.038 1.056.038 1.909.038h5.99a.75.75 0 0 1 0 1.5H6.8c-.828 0-1.494.001-2.031-.043-.547-.045-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032V8.8c0-.828-.001-1.494.043-2.031.045-.547.14-1.027.366-1.471a3.75 3.75 0 0 1 1.639-1.639c.444-.226.924-.321 1.47-.366.538-.044 1.204-.043 2.032-.043z" />
          <path d="M6.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M9.75 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m14.84 11.315.193.05 7.816 2.605c1.225.408 1.194 2.152-.045 2.516l-3.337.98-.98 3.338c-.365 1.238-2.108 1.27-2.517.045l-2.605-7.817c-.322-.966.52-1.888 1.475-1.717m2.37 8.511.934-3.175a.75.75 0 0 1 .508-.508l3.175-.933-6.925-2.309z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MacWindowCursorIconDuotone.displayName = "MacWindowCursorIconDuotone";
export { MacWindowCursorIconDuotone };
