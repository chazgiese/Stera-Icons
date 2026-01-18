import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleCheckerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 22V12h10a10 10 0 0 1-10 10" />
        <path fillRule="evenodd" d="M2 12A10 10 0 0 1 12 2v10z" clipRule="evenodd" />
        <path fill="currentColor" d="M22 12H12V2a10 10 0 0 1 10 10" />
        <path fill="currentColor" fillRule="evenodd" d="M12 22A10 10 0 0 1 2 12h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFillDuotone.displayName = 'CircleCheckerFillDuotone';

export { CircleCheckerFillDuotone };
export type { CircleCheckerFillDuotoneProps };
