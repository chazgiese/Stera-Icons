import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleFill = memo(
  forwardRef<SVGSVGElement, SparkleCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.62 5.58c-.18-.62-1.06-.62-1.24 0l-.26.86a4 4 0 0 1-2.68 2.68l-.86.26c-.62.18-.62 1.06 0 1.24l.86.26a4 4 0 0 1 2.68 2.68l.26.86c.18.62 1.06.62 1.24 0l.26-.86a4 4 0 0 1 2.68-2.68l.86-.26c.62-.18.62-1.06 0-1.24l-.86-.26a4 4 0 0 1-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleFill.displayName = 'SparkleCircleFill';

// Triple export pattern (lucide-react style)
export { SparkleCircleFill, SparkleCircleFill as SparkleCircleFillIcon, SparkleCircleFill as SiSparkleCircleFill };
export default SparkleCircleFill;
export type { SparkleCircleFillProps };
