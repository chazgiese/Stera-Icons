import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock12FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock12FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock12FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock12FillDuotone.displayName = 'Clock12FillDuotone';

export { Clock12FillDuotone };
export type { Clock12FillDuotoneProps };
