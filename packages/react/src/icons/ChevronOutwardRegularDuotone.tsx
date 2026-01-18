import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronOutwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.47 1.47c.3-.3.77-.3 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 3.06 6.53 8.53a.75.75 0 0 1-1.06-1.06z" />
        <path fill="currentColor" d="M17.47 15.47a.75.75 0 1 1 1.06 1.06l-6 6c-.3.3-.77.3-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L12 20.94z" opacity={.4} />
    </IconBase>
  ))
);

ChevronOutwardRegularDuotone.displayName = 'ChevronOutwardRegularDuotone';

export { ChevronOutwardRegularDuotone };
export type { ChevronOutwardRegularDuotoneProps };
