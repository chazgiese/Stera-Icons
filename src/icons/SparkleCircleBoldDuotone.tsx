import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparkleCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.38 7.57a.65.65 0 0 1 1.24 0l.26.87a4 4 0 0 0 2.68 2.68l.86.26a.65.65 0 0 1 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86a.65.65 0 0 1-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.87-.26a.65.65 0 0 1 0-1.24l.87-.26a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleCircleBoldDuotone.displayName = 'SparkleCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { SparkleCircleBoldDuotone, SparkleCircleBoldDuotone as SparkleCircleBoldDuotoneIcon, SparkleCircleBoldDuotone as SiSparkleCircleBoldDuotone };
export default SparkleCircleBoldDuotone;
export type { SparkleCircleBoldDuotoneProps };
