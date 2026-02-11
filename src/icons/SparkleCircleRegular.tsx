import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleRegularProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleRegular = memo(
  forwardRef<SVGSVGElement, SparkleCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle" {...props}>
      <path d="M11.38 7.58c.18-.62 1.06-.62 1.24 0l.26.86a4 4 0 0 0 2.68 2.68l.86.26c.62.18.62 1.06 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86c-.18.62-1.06.62-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.86-.26c-.62-.18-.62-1.06 0-1.24l.86-.26a4 4 0 0 0 2.68-2.68z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleRegular.displayName = 'SparkleCircleRegular';

// Triple export pattern (lucide-react style)
export { SparkleCircleRegular, SparkleCircleRegular as SparkleCircleRegularIcon, SparkleCircleRegular as SiSparkleCircleRegular };
export default SparkleCircleRegular;
export type { SparkleCircleRegularProps };
