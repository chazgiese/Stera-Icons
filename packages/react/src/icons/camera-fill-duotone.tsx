import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CameraIconFillDuotone = memo(
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
          d="M13.287 3.25c.58 0 1.026-.007 1.441.12.346.104.668.276.948.506.335.276.577.65.898 1.133l.32.481c.142.212.182.27.22.316.206.244.499.4.817.436.06.007.129.008.383.008.604 0 1.006-.003 1.355.06a3.75 3.75 0 0 1 3.02 3.021c.064.349.061.75.061 1.354V15.2c0 .828.001 1.494-.043 2.031-.045.547-.14 1.027-.366 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.321-1.47.366-.538.044-1.204.043-2.032.043H6.8c-.828 0-1.494 0-2.031-.043-.547-.045-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032v-4.514c0-.604-.003-1.006.06-1.355a3.75 3.75 0 0 1 3.021-3.02c.349-.064.75-.061 1.355-.061.254 0 .324-.001.383-.008.318-.036.61-.192.817-.436a4 4 0 0 0 .22-.316l.32-.481c.321-.482.563-.857.898-1.133.28-.23.602-.402.947-.507.416-.126.862-.12 1.442-.12zM12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 9.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
CameraIconFillDuotone.displayName = "CameraIconFillDuotone";
export { CameraIconFillDuotone };
