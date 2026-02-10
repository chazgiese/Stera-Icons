import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparkleCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.38 7.57a.65.65 0 0 1 1.24 0l.26.87a4 4 0 0 0 2.68 2.68l.86.26a.65.65 0 0 1 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86a.65.65 0 0 1-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.87-.26a.65.65 0 0 1 0-1.24l.87-.26a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleCircleRegularDuotone.displayName = 'SparkleCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { SparkleCircleRegularDuotone, SparkleCircleRegularDuotone as SparkleCircleRegularDuotoneIcon, SparkleCircleRegularDuotone as SiSparkleCircleRegularDuotone };
export default SparkleCircleRegularDuotone;
export type { SparkleCircleRegularDuotoneProps };
