import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchwayFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a9 9 0 0 1 9 9v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-3.8V10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7v9l.01.2A2 2 0 0 0 7 21h10a2 2 0 0 0 2-2v-9a7 7 0 0 0-7-7" clipRule="evenodd" />
        <path fill="currentColor" d="M12 3a7 7 0 0 1 7 7v9a2 2 0 0 1-2 2H7a2 2 0 0 1-1.99-1.8L5 19v-9a7 7 0 0 1 7-7" opacity={.4} />
    </IconBase>
  ))
);

ArchwayFillDuotone.displayName = 'ArchwayFillDuotone';

export { ArchwayFillDuotone };
export type { ArchwayFillDuotoneProps };
