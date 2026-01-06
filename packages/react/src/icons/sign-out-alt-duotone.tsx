import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignOutAltIconDuotone = memo(
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
          d="M16 1.25c.882 0 1.47-.006 1.97.128a3.75 3.75 0 0 1 2.652 2.651c.134.501.128 1.09.128 1.971a.75.75 0 0 1-1.5 0c0-.978-.007-1.32-.077-1.582a2.25 2.25 0 0 0-1.591-1.59c-.262-.071-.604-.078-1.582-.078H8.8c-.853 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.038.462-.038 1.057-.038 1.909v10.4c0 .853 0 1.447.038 1.91.037.453.106.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.038 1.056.038 1.909.038H16c.978 0 1.32-.007 1.582-.077a2.25 2.25 0 0 0 1.59-1.59c.071-.263.078-.605.078-1.583a.75.75 0 0 1 1.5 0c0 .882.006 1.47-.128 1.97a3.75 3.75 0 0 1-2.651 2.652c-.501.134-1.09.128-1.971.128H8.8c-.828 0-1.494.001-2.031-.043-.547-.045-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032V6.8c0-.828-.001-1.494.043-2.031.045-.547.14-1.027.366-1.471a3.75 3.75 0 0 1 1.639-1.639c.444-.226.924-.321 1.47-.366.538-.044 1.204-.043 2.032-.043z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.72-3.72H8.5a.75.75 0 0 1 0-1.5h9.69l-3.72-3.72a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
SignOutAltIconDuotone.displayName = "SignOutAltIconDuotone";
export { SignOutAltIconDuotone };
