import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NoteTextIconFilled = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71v4.274c0 .441.006.825-.083 1.197a3 3 0 0 1-.36.867c-.2.326-.475.593-.787.906l-4.125 4.125c-.313.312-.58.588-.906.788a3 3 0 0 1-.867.359c-.372.09-.756.083-1.197.083H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2zm1.6 11c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C13 14.52 13 15.08 13 16.2V20h.337c.245 0 .367 0 .482-.027a1 1 0 0 0 .29-.12c.1-.062.187-.149.36-.322l5.062-5.062c.173-.173.26-.26.322-.36a1 1 0 0 0 .12-.29c.027-.115.027-.238.027-.482V13zM7 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NoteTextIconFilled.displayName = "NoteTextIconFilled";
export { NoteTextIconFilled };
