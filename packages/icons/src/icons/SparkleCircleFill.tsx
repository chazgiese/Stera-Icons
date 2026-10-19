import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleFill = memo(
  forwardRef<SVGSVGElement, SparkleCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m.62 5.33c-.18-.62-1.06-.62-1.24 0l-.26.86c-.39 1.28-1.4 2.3-2.68 2.68l-.86.26c-.62.18-.62 1.06 0 1.24l.86.26c1.28.39 2.3 1.4 2.68 2.68l.26.86c.18.62 1.06.62 1.24 0l.26-.86c.39-1.28 1.4-2.3 2.68-2.68l.86-.26c.62-.18.62-1.06 0-1.24l-.86-.26c-1.28-.39-2.3-1.4-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleFill.displayName = 'SparkleCircleFill';

// Triple export pattern
export { SparkleCircleFill, SparkleCircleFill as SparkleCircleFillIcon, SparkleCircleFill as SiSparkleCircleFill };
export default SparkleCircleFill;
export type { SparkleCircleFillProps };
