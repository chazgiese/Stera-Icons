import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, SparkleCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.62 5.57c-.18-.61-1.06-.61-1.24 0l-.26.87a4 4 0 0 1-2.68 2.68l-.87.26c-.61.18-.61 1.06 0 1.24l.87.26a4 4 0 0 1 2.68 2.68l.26.86a.65.65 0 0 0 1.24 0l.26-.86a4 4 0 0 1 2.68-2.68l.86-.26a.65.65 0 0 0 0-1.24l-.86-.26a4 4 0 0 1-2.68-2.68z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.38 7.57a.65.65 0 0 1 1.24 0l.26.87a4 4 0 0 0 2.68 2.68l.86.26a.65.65 0 0 1 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86a.65.65 0 0 1-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.87-.26a.65.65 0 0 1 0-1.24l.87-.26a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleCircleFillDuotone.displayName = 'SparkleCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { SparkleCircleFillDuotone, SparkleCircleFillDuotone as SparkleCircleFillDuotoneIcon, SparkleCircleFillDuotone as SiSparkleCircleFillDuotone };
export default SparkleCircleFillDuotone;
export type { SparkleCircleFillDuotoneProps };
