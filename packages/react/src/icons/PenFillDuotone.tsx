import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenFillDuotone = memo(
  forwardRef<SVGSVGElement, PenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.25 1.87c1 0 2.03.35 2.78 1.1s1.1 1.78 1.1 2.78-.35 2.03-1.1 2.78l-1.97 1.97-5.56-5.56 1.97-1.97a4 4 0 0 1 2.78-1.1" opacity={.4} />
        <path fill="currentColor" d="M19.06 10.5 8.53 21.03q-.16.16-.4.2l-5.5 1a.75.75 0 0 1-.87-.86l1-5.5q.05-.24.2-.4L13.5 4.94z" />
    </IconBase>
  ))
);

PenFillDuotone.displayName = 'PenFillDuotone';

export { PenFillDuotone };
export type { PenFillDuotoneProps };
