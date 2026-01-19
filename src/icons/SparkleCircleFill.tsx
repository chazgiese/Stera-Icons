import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparkleCircleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleFill = memo(
  forwardRef<SVGSVGElement, SparkleCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m.27 4.54a.3.3 0 0 0-.54 0l-1.47 2.93a4 4 0 0 1-1.79 1.8l-2.93 1.46a.3.3 0 0 0 0 .54l2.93 1.47a4 4 0 0 1 1.8 1.79l1.46 2.93a.3.3 0 0 0 .54 0l1.47-2.93a4 4 0 0 1 1.79-1.8l2.93-1.46a.3.3 0 0 0 0-.54l-2.93-1.47a4 4 0 0 1-1.8-1.79z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleFill.displayName = 'SparkleCircleFill';

// Triple export pattern (lucide-react style)
export { SparkleCircleFill, SparkleCircleFill as SparkleCircleFillIcon, SparkleCircleFill as SiSparkleCircleFill };
export default SparkleCircleFill;
export type { SparkleCircleFillProps };
