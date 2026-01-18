import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

MoreCircleVFillDuotone.displayName = 'MoreCircleVFillDuotone';

export { MoreCircleVFillDuotone };
export type { MoreCircleVFillDuotoneProps };
