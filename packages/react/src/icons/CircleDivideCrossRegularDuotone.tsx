import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideCrossRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.75 12a10.75 10.75 0 1 1-21.5 0 10.75 10.75 0 0 1 21.5 0m-1.5 0a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m12 2.75.75.03v8.47h8.47a9 9 0 0 1 0 1.5h-8.47v8.47a9 9 0 0 1-1.5 0v-8.47H2.78a9 9 0 0 1 0-1.5h8.47V2.78z" />
    </IconBase>
  ))
);

CircleDivideCrossRegularDuotone.displayName = 'CircleDivideCrossRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossRegularDuotone, CircleDivideCrossRegularDuotone as CircleDivideCrossRegularDuotoneIcon, CircleDivideCrossRegularDuotone as SiCircleDivideCrossRegularDuotone };
export type { CircleDivideCrossRegularDuotoneProps };
