import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm.12 4.95a.65.65 0 0 0-1.24 0l-.26.86a4 4 0 0 1-2.68 2.68l-.86.26a.65.65 0 0 0 0 1.24l.86.26a4 4 0 0 1 2.68 2.68l.26.86a.65.65 0 0 0 1.24 0l.26-.86a4 4 0 0 1 2.68-2.68l.86-.26a.65.65 0 0 0 0-1.24l-.86-.26a4 4 0 0 1-2.68-2.68z" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.58a.65.65 0 0 1 1.24 0l.26.86a4 4 0 0 0 2.68 2.68l.86.26a.65.65 0 0 1 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86a.65.65 0 0 1-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.86-.26a.65.65 0 0 1 0-1.24l.86-.26a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleSquareFillDuotone.displayName = 'SparkleSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SparkleSquareFillDuotone, SparkleSquareFillDuotone as SparkleSquareFillDuotoneIcon, SparkleSquareFillDuotone as SiSparkleSquareFillDuotone };
export default SparkleSquareFillDuotone;
export type { SparkleSquareFillDuotoneProps };
