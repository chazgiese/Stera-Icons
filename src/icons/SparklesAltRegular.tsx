import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltRegularProps = Omit<IconBaseProps, 'children'>;

const SparklesAltRegular = memo(
  forwardRef<SVGSVGElement, SparklesAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-alt" {...props}>
      <path fillRule="evenodd" d="M7.5 10.25c.35 0 .66.24.73.59a6.5 6.5 0 0 0 4.93 4.93.75.75 0 0 1 0 1.46 6.5 6.5 0 0 0-4.93 4.93.75.75 0 0 1-1.46 0 6.5 6.5 0 0 0-4.93-4.93.75.75 0 0 1 0-1.46 6.5 6.5 0 0 0 4.93-4.93l.04-.13a.8.8 0 0 1 .69-.46m0 2.9a8 8 0 0 1-3.35 3.35 8 8 0 0 1 3.35 3.35 8 8 0 0 1 3.35-3.35 8 8 0 0 1-3.35-3.35M16.5 1.25c.35 0 .66.24.73.59a6.5 6.5 0 0 0 4.93 4.93.75.75 0 0 1 0 1.46 6.5 6.5 0 0 0-4.93 4.93.75.75 0 0 1-1.46 0 6.5 6.5 0 0 0-4.93-4.93.75.75 0 0 1 0-1.46 6.5 6.5 0 0 0 4.93-4.93l.04-.13a.8.8 0 0 1 .69-.46m0 2.9a8 8 0 0 1-3.35 3.35 8 8 0 0 1 3.35 3.35 8 8 0 0 1 3.35-3.35 8 8 0 0 1-3.35-3.35" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesAltRegular.displayName = 'SparklesAltRegular';

// Triple export pattern (lucide-react style)
export { SparklesAltRegular, SparklesAltRegular as SparklesAltRegularIcon, SparklesAltRegular as SiSparklesAltRegular };
export default SparklesAltRegular;
export type { SparklesAltRegularProps };
