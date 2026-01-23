import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparkleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-duotone" {...props}>
      <path fill="currentColor" d="m12.67 1.67.04.1 1.24 3.7a7.3 7.3 0 0 0 4.58 4.58l3.7 1.24a.75.75 0 0 1 0 1.42l-3.7 1.24a7.3 7.3 0 0 0-4.58 4.58l-1.24 3.7-.04.1q.13-.26.04-.57L12 19.63l.52-1.57a8.8 8.8 0 0 1 5.54-5.54l1.57-.52-1.57-.52a8.8 8.8 0 0 1-5.54-5.54L12 4.37l.71-2.13q.1-.3-.04-.57" opacity={.4} />
        <path fill="currentColor" d="M11.29 1.76a.75.75 0 0 1 1.42.48l-1.23 3.7a8.8 8.8 0 0 1-5.54 5.54L4.37 12l1.57.52a8.8 8.8 0 0 1 5.54 5.54l1.23 3.7a.75.75 0 0 1-1.42.48l-1.24-3.7a7.3 7.3 0 0 0-4.58-4.6l-3.7-1.23a.75.75 0 0 1 0-1.42l3.7-1.24a7.3 7.3 0 0 0 4.58-4.58z" />
    </IconBase>
  ))
);

SparkleRegularDuotone.displayName = 'SparkleRegularDuotone';

// Triple export pattern (lucide-react style)
export { SparkleRegularDuotone, SparkleRegularDuotone as SparkleRegularDuotoneIcon, SparkleRegularDuotone as SiSparkleRegularDuotone };
export default SparkleRegularDuotone;
export type { SparkleRegularDuotoneProps };
