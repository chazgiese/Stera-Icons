import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleRegularProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleRegular = memo(
  forwardRef<SVGSVGElement, SparkleCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle" {...props}>
      <path fill="currentColor" d="M11.73 6.54a.3.3 0 0 1 .54 0L13.4 8.8a4 4 0 0 0 1.8 1.79l2.26 1.13a.3.3 0 0 1 0 .54L15.2 13.4a4 4 0 0 0-1.79 1.8l-1.13 2.26a.3.3 0 0 1-.54 0L10.6 15.2a4 4 0 0 0-1.8-1.79l-2.26-1.13a.3.3 0 0 1 0-.54L8.8 10.6a4 4 0 0 0 1.79-1.8z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleRegular.displayName = 'SparkleCircleRegular';

// Triple export pattern (lucide-react style)
export { SparkleCircleRegular, SparkleCircleRegular as SparkleCircleRegularIcon, SparkleCircleRegular as SiSparkleCircleRegular };
export default SparkleCircleRegular;
export type { SparkleCircleRegularProps };
