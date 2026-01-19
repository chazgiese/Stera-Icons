import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparklesAltBoldProps = Omit<IconBaseProps, 'children'>;

const SparklesAltBold = memo(
  forwardRef<SVGSVGElement, SparklesAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-alt-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.5 10a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 7.5 10m0 3.67a8 8 0 0 1-2.83 2.83 8 8 0 0 1 2.83 2.83 8 8 0 0 1 2.83-2.83 8 8 0 0 1-2.83-2.83M16.5 1a1 1 0 0 1 .98.78 6.2 6.2 0 0 0 4.74 4.74 1 1 0 0 1 0 1.96 6.2 6.2 0 0 0-4.74 4.74 1 1 0 0 1-1.96 0 6.2 6.2 0 0 0-4.74-4.74 1 1 0 0 1 0-1.96 6.2 6.2 0 0 0 4.74-4.74A1 1 0 0 1 16.5 1m0 3.67a8 8 0 0 1-2.83 2.83 8 8 0 0 1 2.83 2.83 8 8 0 0 1 2.83-2.83 8 8 0 0 1-2.83-2.83" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesAltBold.displayName = 'SparklesAltBold';

// Triple export pattern (lucide-react style)
export { SparklesAltBold, SparklesAltBold as SparklesAltBoldIcon, SparklesAltBold as SiSparklesAltBold };
export default SparklesAltBold;
export type { SparklesAltBoldProps };
