import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparklesAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparklesAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-alt-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 1.25c.35 0 .66.24.73.59a6.5 6.5 0 0 0 4.93 4.93.75.75 0 0 1 0 1.46 6.5 6.5 0 0 0-4.93 4.93.75.75 0 0 1-1.46 0 6.5 6.5 0 0 0-4.93-4.93.75.75 0 0 1 0-1.46 6.5 6.5 0 0 0 4.93-4.93l.04-.13a.8.8 0 0 1 .69-.46m0 2.9a8 8 0 0 1-3.35 3.35 8 8 0 0 1 3.35 3.35 8 8 0 0 1 3.35-3.35 8 8 0 0 1-3.35-3.35" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7.5 10.25c.35 0 .66.24.73.59a6.5 6.5 0 0 0 4.93 4.93.75.75 0 0 1 0 1.46 6.5 6.5 0 0 0-4.93 4.93.75.75 0 0 1-1.46 0 6.5 6.5 0 0 0-4.93-4.93.75.75 0 0 1 0-1.46 6.5 6.5 0 0 0 4.93-4.93l.04-.13a.8.8 0 0 1 .69-.46m0 2.9a8 8 0 0 1-3.35 3.35 8 8 0 0 1 3.35 3.35 8 8 0 0 1 3.35-3.35 8 8 0 0 1-3.35-3.35" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesAltRegularDuotone.displayName = 'SparklesAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { SparklesAltRegularDuotone, SparklesAltRegularDuotone as SparklesAltRegularDuotoneIcon, SparklesAltRegularDuotone as SiSparklesAltRegularDuotone };
export type { SparklesAltRegularDuotoneProps };
