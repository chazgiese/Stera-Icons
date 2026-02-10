import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleBoldProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleBold = memo(
  forwardRef<SVGSVGElement, SparkleCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-circle-bold" {...props}>
      <path fill="currentColor" d="M11.38 7.58c.18-.62 1.06-.62 1.24 0l.26.86a4 4 0 0 0 2.68 2.68l.86.26c.62.18.62 1.06 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86c-.18.62-1.06.62-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.86-.26c-.62-.18-.62-1.06 0-1.24l.86-.26a4 4 0 0 0 2.68-2.68z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleBold.displayName = 'SparkleCircleBold';

// Triple export pattern (lucide-react style)
export { SparkleCircleBold, SparkleCircleBold as SparkleCircleBoldIcon, SparkleCircleBold as SiSparkleCircleBold };
export default SparkleCircleBold;
export type { SparkleCircleBoldProps };
