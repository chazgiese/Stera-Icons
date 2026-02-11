import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFill = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-square-fill" {...props}>
      <path fillRule="evenodd" d="M12.89 3c1.23 0 2.2 0 3 .06.8.07 1.5.2 2.14.53a5.4 5.4 0 0 1 2.38 2.38c.32.64.46 1.34.53 2.14.06.8.06 1.77.06 3v1.78c0 1.23 0 2.2-.06 3-.07.8-.2 1.5-.53 2.14a5.4 5.4 0 0 1-2.38 2.38c-.64.32-1.34.46-2.14.53-.8.06-1.77.06-3 .06H11.1c-1.23 0-2.2 0-3-.06-.8-.07-1.5-.2-2.14-.53a5.4 5.4 0 0 1-2.38-2.38 6 6 0 0 1-.53-2.14c-.06-.8-.06-1.77-.06-3V11.1c0-1.23 0-2.2.06-3 .07-.8.2-1.5.53-2.14A5.4 5.4 0 0 1 5.97 3.6a6 6 0 0 1 2.14-.53c.8-.06 1.77-.06 3-.06zm-.27 4.58c-.18-.62-1.06-.62-1.24 0l-.26.86a4 4 0 0 1-2.68 2.68l-.86.26c-.62.18-.62 1.06 0 1.24l.86.26a4 4 0 0 1 2.68 2.68l.26.86c.18.62 1.06.62 1.24 0l.26-.86a4 4 0 0 1 2.68-2.68l.86-.26c.62-.18.62-1.06 0-1.24l-.86-.26a4 4 0 0 1-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleSquareFill.displayName = 'SparkleSquareFill';

// Triple export pattern (lucide-react style)
export { SparkleSquareFill, SparkleSquareFill as SparkleSquareFillIcon, SparkleSquareFill as SiSparkleSquareFill };
export default SparkleSquareFill;
export type { SparkleSquareFillProps };
