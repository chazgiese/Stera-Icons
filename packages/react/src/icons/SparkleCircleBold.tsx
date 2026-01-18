import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparkleCircleBoldProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleBold = memo(
  forwardRef<SVGSVGElement, SparkleCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.73 6.54a.3.3 0 0 1 .54 0L13.4 8.8a4 4 0 0 0 1.8 1.79l2.26 1.13a.3.3 0 0 1 0 .54L15.2 13.4a4 4 0 0 0-1.79 1.8l-1.13 2.26a.3.3 0 0 1-.54 0L10.6 15.2a4 4 0 0 0-1.8-1.79l-2.26-1.13a.3.3 0 0 1 0-.54L8.8 10.6a4 4 0 0 0 1.79-1.8z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleBold.displayName = 'SparkleCircleBold';

// Triple export pattern (lucide-react style)
export { SparkleCircleBold, SparkleCircleBold as SparkleCircleBoldIcon, SparkleCircleBold as SiSparkleCircleBold };
export type { SparkleCircleBoldProps };
