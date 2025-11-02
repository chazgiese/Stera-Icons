import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffIcon = memo(
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
          d="M.421 4.524a.75.75 0 0 1 1.056-.103l17 14a.75.75 0 0 1-.953 1.158l-1.653-1.361a.8.8 0 0 1-.169.123c-.444.226-.924.322-1.47.366-.538.044-1.204.043-2.032.043H6.8c-.828 0-1.493.001-2.031-.043-.547-.044-1.027-.14-1.471-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.321-.924-.366-1.47-.044-.538-.043-1.204-.043-2.032v-2.4c0-.828 0-1.493.043-2.031.045-.547.14-1.027.366-1.471q.14-.273.32-.52L.525 5.58A.75.75 0 0 1 .42 4.524m2.72 3.21a2 2 0 0 0-.146.245c-.1.197-.17.458-.207.912-.038.462-.038 1.057-.038 1.909v2.4c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.038 1.057.038 1.909.038h5.4c.853 0 1.447 0 1.91-.038.182-.015.333-.038.462-.063zM12.2 5.25c.828 0 1.494 0 2.032.043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.639 1.639c.226.444.322.924.366 1.47q.024.31.031.68l3.793-3.034a.75.75 0 0 1 1.22.586v10a.75.75 0 0 1-1.22.586l-5-4a.75.75 0 0 1-.28-.586v-2.2c0-.852-.001-1.447-.039-1.91-.037-.453-.106-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.912-.207-.463-.038-1.057-.038-1.91-.038H6.934a.75.75 0 0 1 0-1.5zm5.55 6.11v1.279l3.5 2.8V8.56z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
VideoOffIcon.displayName = "VideoOffIcon";
export { VideoOffIcon };
