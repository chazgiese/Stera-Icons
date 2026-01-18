import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparklesAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesAltFillDuotone = memo(
  forwardRef<SVGSVGElement, SparklesAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.5 1a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 16.5 1" opacity={.4} />
        <path fill="currentColor" d="M7.5 10a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 7.5 10" />
    </IconBase>
  ))
);

SparklesAltFillDuotone.displayName = 'SparklesAltFillDuotone';

export { SparklesAltFillDuotone };
export type { SparklesAltFillDuotoneProps };
