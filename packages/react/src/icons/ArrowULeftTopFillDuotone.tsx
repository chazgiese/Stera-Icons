import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.5 6a7.5 7.5 0 0 1 0 15H8a1 1 0 1 1 0-2h7.5a5.5 5.5 0 1 0 0-11H7V6z" opacity={.4} />
        <path fill="currentColor" d="M5.3 2.3A1 1 0 0 1 7 3v8a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.07-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopFillDuotone.displayName = 'ArrowULeftTopFillDuotone';

export { ArrowULeftTopFillDuotone };
export type { ArrowULeftTopFillDuotoneProps };
