import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightRegular = memo(
  forwardRef<SVGSVGElement, RotateCircleRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.53 5.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H11.5a4.75 4.75 0 1 0 3.88 7.5.75.75 0 1 0-1.22-.87 3.25 3.25 0 1 1-2.66-5.13h2.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.93-2.93a.85.85 0 0 0 0-1.2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5m0 1.5a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightRegular.displayName = 'RotateCircleRightRegular';

export { RotateCircleRightRegular };
export type { RotateCircleRightRegularProps };
