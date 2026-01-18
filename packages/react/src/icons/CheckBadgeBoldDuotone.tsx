import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckBadgeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.88 1.7a3 3 0 0 1 4.24 0l1.22 1.23a1 1 0 0 0 .71.3h1.73a3 3 0 0 1 3 3v1.72q0 .42.3.7l1.21 1.23a3 3 0 0 1 0 4.24l-1.22 1.22a1 1 0 0 0-.3.71v1.73a3 3 0 0 1-3 3h-1.72a1 1 0 0 0-.7.3l-1.23 1.21a3 3 0 0 1-4.24 0l-1.22-1.22a1 1 0 0 0-.7-.3H6.21a3 3 0 0 1-3-3v-1.72a1 1 0 0 0-.3-.7l-1.21-1.23a3 3 0 0 1 0-4.24l1.22-1.22a1 1 0 0 0 .3-.7V6.21a3 3 0 0 1 3-3h1.72a1 1 0 0 0 .7-.3zm2.83 1.42a1 1 0 0 0-1.42 0l-1.22 1.22a3 3 0 0 1-2.12.88H6.22a1 1 0 0 0-1 1v1.73a3 3 0 0 1-.88 2.12L3.12 11.3a1 1 0 0 0 0 1.42l1.22 1.22a3 3 0 0 1 .88 2.12v1.73a1 1 0 0 0 1 1h1.73a3 3 0 0 1 2.12.88l1.22 1.22a1 1 0 0 0 1.42 0l1.22-1.22a3 3 0 0 1 2.12-.88h1.73a1 1 0 0 0 1-1v-1.73a3 3 0 0 1 .88-2.12l1.22-1.22a1 1 0 0 0 0-1.42l-1.22-1.22a3 3 0 0 1-.88-2.12V6.22a1 1 0 0 0-1-1h-1.73a3 3 0 0 1-2.12-.88z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.17 8.8a1 1 0 0 1 1.41 1.4l-4.85 4.85q-.15.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.24-.1-.4-.27-.51-.39q-.15-.17-.29-.36l-1.7-2.26a1 1 0 1 1 1.6-1.2l1.56 2.08z" />
    </IconBase>
  ))
);

CheckBadgeBoldDuotone.displayName = 'CheckBadgeBoldDuotone';

export { CheckBadgeBoldDuotone };
export type { CheckBadgeBoldDuotoneProps };
