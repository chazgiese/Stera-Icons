import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.7 5.3a1 1 0 0 0-1.4 1.4L13.58 8h-2.1a5 5 0 1 0 4.1 7.89 1 1 0 0 0-1.64-1.16A3 3 0 1 1 11.5 10h2.09l-1.3 1.3a1 1 0 0 0 1.42 1.4l2.93-2.92a1.1 1.1 0 0 0 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleRightBoldDuotone.displayName = 'RotateCircleRightBoldDuotone';

export { RotateCircleRightBoldDuotone };
export type { RotateCircleRightBoldDuotoneProps };
