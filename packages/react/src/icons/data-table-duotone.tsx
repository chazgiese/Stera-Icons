import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DataTableIconDuotone = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M8 4v16"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.75 20.75H6.8c-.828 0-1.494.001-2.031-.043-.547-.045-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032V8.8c0-.828-.001-1.494.043-2.031.045-.547.14-1.027.366-1.471a3.75 3.75 0 0 1 1.639-1.639c.444-.226.924-.321 1.47-.366.538-.044 1.204-.043 2.032-.043h1.95zm-5.999-5.334c0 .738.003 1.27.037 1.693.037.454.106.715.207.912.216.424.56.768.984.984.197.1.458.17.912.207.462.038 1.056.038 1.909.038h.45v-3.834zm-.001-1.5h4.5v-3.832h-4.5zM6.8 4.75c-.853 0-1.447 0-1.91.038-.453.037-.714.106-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.034.422-.037.954-.037 1.693H7.25V4.75z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.2 3.25c.828 0 1.494-.001 2.031.043.547.045 1.027.14 1.471.366.706.36 1.28.933 1.639 1.639.226.444.321.924.366 1.47.044.538.043 1.204.043 2.032v6.4c0 .828.001 1.494-.043 2.031-.045.547-.14 1.027-.366 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.321-1.47.366-.538.044-1.204.043-2.032.043H8.75v-1.5h8.45c.852 0 1.447 0 1.91-.038.453-.037.714-.107.912-.207a2.25 2.25 0 0 0 .983-.983c.1-.198.17-.459.207-.913.034-.422.037-.955.037-1.693H8.75v-1.5h12.5v-3.832H8.75v-1.5h12.499c0-.739-.003-1.27-.037-1.693-.037-.454-.107-.715-.207-.912a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207-.462-.038-1.057-.038-1.909-.038H8.75v-1.5z"
          opacity={0.4}
        />
      </svg>
    ))
);
DataTableIconDuotone.displayName = "DataTableIconDuotone";
export { DataTableIconDuotone };
