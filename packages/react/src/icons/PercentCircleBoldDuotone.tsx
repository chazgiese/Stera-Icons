import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.3 7.3a1 1 0 1 1 1.4 1.4l-8 8a1 1 0 1 1-1.4-1.4zM15.25 13.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M8.75 7a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

PercentCircleBoldDuotone.displayName = 'PercentCircleBoldDuotone';

export { PercentCircleBoldDuotone };
export type { PercentCircleBoldDuotoneProps };
