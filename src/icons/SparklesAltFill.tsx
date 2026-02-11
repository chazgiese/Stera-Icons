import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltFillProps = Omit<IconBaseProps, 'children'>;

const SparklesAltFill = memo(
  forwardRef<SVGSVGElement, SparklesAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-alt-fill" {...props}>
      <path d="M7.5 10a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 7.5 10M16.5 1a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 16.5 1" />
    </IconBase>
  ))
);

SparklesAltFill.displayName = 'SparklesAltFill';

// Triple export pattern (lucide-react style)
export { SparklesAltFill, SparklesAltFill as SparklesAltFillIcon, SparklesAltFill as SiSparklesAltFill };
export default SparklesAltFill;
export type { SparklesAltFillProps };
