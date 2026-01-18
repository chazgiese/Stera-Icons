import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparkleRegularProps = Omit<IconBaseProps, 'children'>;

const SparkleRegular = memo(
  forwardRef<SVGSVGElement, SparkleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.33 0 .62.22.72.53l1.09 3.59a7.3 7.3 0 0 0 4.82 4.82l3.59 1.1a.75.75 0 0 1 0 1.43l-3.59 1.09a7.3 7.3 0 0 0-4.82 4.82l-1.1 3.59a.75.75 0 0 1-1.43 0l-1.09-3.59a7.3 7.3 0 0 0-4.82-4.82l-3.59-1.1a.75.75 0 0 1 0-1.43l3.59-1.09a7.3 7.3 0 0 0 4.82-4.82l1.1-3.59.04-.11a.8.8 0 0 1 .67-.42m-.37 4.55a8.8 8.8 0 0 1-5.83 5.83L4.58 12l1.22.37a8.8 8.8 0 0 1 5.83 5.83l.37 1.22.37-1.22a8.8 8.8 0 0 1 5.83-5.83l1.22-.37-1.22-.37a8.8 8.8 0 0 1-5.83-5.83L12 4.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleRegular.displayName = 'SparkleRegular';

// Triple export pattern (lucide-react style)
export { SparkleRegular, SparkleRegular as SparkleRegularIcon, SparkleRegular as SiSparkleRegular };
export type { SparkleRegularProps };
