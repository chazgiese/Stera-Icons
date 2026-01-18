import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFill = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.3 4.3a1 1 0 0 0-1.4 0L7.35 8.21a1.1 1.1 0 0 0 0 1.56l2.93 2.93a1 1 0 1 0 1.42-1.42L10.4 10h2.09a3 3 0 1 1-2.45 4.73 1 1 0 1 0-1.63 1.16A5 5 0 1 0 12.5 8h-2.09l1.3-1.3a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftFill.displayName = 'RotateCircleLeftFill';

export { RotateCircleLeftFill };
export type { RotateCircleLeftFillProps };
