import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14 16.59 9.41 12 14 7.41z" opacity={.4} />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 5-7 7 7 7z" />
    </IconBase>
  ))
);

ChevronLeftFillDuotone.displayName = 'ChevronLeftFillDuotone';

export { ChevronLeftFillDuotone };
export type { ChevronLeftFillDuotoneProps };
