import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a9 9 0 1 1-9 9 1 1 0 1 1 2 0 7 7 0 1 0 7-7H9.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M10.3.3a1 1 0 1 1 1.4 1.4L8.42 5l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftBoldDuotone.displayName = 'RotateLeftBoldDuotone';

export { RotateLeftBoldDuotone };
export type { RotateLeftBoldDuotoneProps };
