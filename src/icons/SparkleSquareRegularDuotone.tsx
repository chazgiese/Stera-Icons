import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparkleSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-square-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.89 3.25q1.83-.02 2.98.06c.79.07 1.45.2 2.04.5a5.2 5.2 0 0 1 2.27 2.28c.3.6.44 1.25.5 2.04q.09 1.15.07 2.98v1.78q.02 1.83-.06 2.98c-.07.79-.2 1.45-.5 2.04a5.2 5.2 0 0 1-2.28 2.27c-.6.3-1.25.44-2.04.5q-1.15.09-2.98.07H11.1q-1.83.02-2.98-.06a5 5 0 0 1-2.04-.5 5.2 5.2 0 0 1-2.27-2.28c-.3-.6-.44-1.25-.5-2.04q-.09-1.15-.07-2.98V11.1q-.02-1.83.06-2.98c.07-.79.2-1.45.5-2.04A5.2 5.2 0 0 1 6.1 3.82c.6-.3 1.25-.44 2.04-.5q1.15-.09 2.98-.07zm-1.78 1.5c-1.26 0-2.15 0-2.86.06-.7.05-1.13.16-1.48.34a3.7 3.7 0 0 0-1.62 1.62c-.18.35-.29.79-.34 1.48-.06.7-.06 1.6-.06 2.86v1.78c0 1.26 0 2.15.06 2.86.05.7.16 1.13.34 1.48q.55 1.06 1.62 1.62c.35.18.79.29 1.48.34.7.06 1.6.06 2.86.06h1.78c1.26 0 2.15 0 2.86-.06.7-.05 1.13-.16 1.48-.34a3.7 3.7 0 0 0 1.62-1.62c.18-.35.29-.79.34-1.48.06-.7.06-1.6.06-2.86V11.1c0-1.26 0-2.15-.06-2.86a4 4 0 0 0-.34-1.48 3.7 3.7 0 0 0-1.62-1.62c-.35-.18-.79-.29-1.48-.34-.7-.06-1.6-.06-2.86-.06z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.38 7.57a.65.65 0 0 1 1.24 0l.26.87a4 4 0 0 0 2.68 2.68l.86.26a.65.65 0 0 1 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86a.65.65 0 0 1-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.87-.26a.65.65 0 0 1 0-1.24l.87-.26a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleSquareRegularDuotone.displayName = 'SparkleSquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { SparkleSquareRegularDuotone, SparkleSquareRegularDuotone as SparkleSquareRegularDuotoneIcon, SparkleSquareRegularDuotone as SiSparkleSquareRegularDuotone };
export default SparkleSquareRegularDuotone;
export type { SparkleSquareRegularDuotoneProps };
