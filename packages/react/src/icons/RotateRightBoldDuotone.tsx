import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m14.59 4 1 1-1 1H12a7 7 0 1 0 7 7 1 1 0 1 1 2 0 9 9 0 1 1-9-9z" opacity={.4} />
        <path fill="currentColor" d="M13.7.3a1 1 0 1 0-1.4 1.4L15.58 5l-3.3 3.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotateRightBoldDuotone.displayName = 'RotateRightBoldDuotone';

export { RotateRightBoldDuotone };
export type { RotateRightBoldDuotoneProps };
