import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 20.75a.75.75 0 0 1-.75-.75v-8A3.75 3.75 0 0 1 6 8.25h13.19l.75.75-.75.75H6c-1.24 0-2.25 1-2.25 2.25v8c0 .41-.34.75-.75.75" opacity={.4} />
        <path fill="currentColor" d="M16.53 14.53a.75.75 0 1 1-1.06-1.06L19.94 9l-4.47-4.47a.75.75 0 1 1 1.06-1.06l5 5 .1.11a.75.75 0 0 1-.1.95z" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegularDuotone.displayName = 'ArrowCornerUpRightRegularDuotone';

export { ArrowCornerUpRightRegularDuotone };
export type { ArrowCornerUpRightRegularDuotoneProps };
