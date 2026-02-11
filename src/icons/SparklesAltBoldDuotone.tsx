import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparklesAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-alt-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M16.5 1a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 16.5 1m0 3.67a8 8 0 0 1-2.83 2.83 8 8 0 0 1 2.83 2.83 8 8 0 0 1 2.83-2.83 8 8 0 0 1-2.83-2.83" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M7.5 10a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 7.5 10m0 3.67a8 8 0 0 1-2.83 2.83 8 8 0 0 1 2.83 2.83 8 8 0 0 1 2.83-2.83 8 8 0 0 1-2.83-2.83" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesAltBoldDuotone.displayName = 'SparklesAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { SparklesAltBoldDuotone, SparklesAltBoldDuotone as SparklesAltBoldDuotoneIcon, SparklesAltBoldDuotone as SiSparklesAltBoldDuotone };
export default SparklesAltBoldDuotone;
export type { SparklesAltBoldDuotoneProps };
