import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 11a1 1 0 1 1 0 2H7.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M11.3 4.3a1 1 0 1 1 1.4 1.4L6.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowLeftBoldDuotone.displayName = 'ArrowLeftBoldDuotone';

export { ArrowLeftBoldDuotone };
export type { ArrowLeftBoldDuotoneProps };
