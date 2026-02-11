import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparkleSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-square-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12.89 3c1.23 0 2.2 0 3 .06.8.07 1.5.2 2.14.53a5.4 5.4 0 0 1 2.38 2.38c.32.64.46 1.34.53 2.14.06.8.06 1.77.06 3v1.78c0 1.23 0 2.2-.06 3-.07.8-.2 1.5-.53 2.14a5.4 5.4 0 0 1-2.38 2.38c-.64.32-1.34.46-2.14.53-.8.06-1.77.06-3 .06H11.1c-1.23 0-2.2 0-3-.06-.8-.07-1.5-.2-2.14-.53a5.4 5.4 0 0 1-2.38-2.38 6 6 0 0 1-.53-2.14c-.06-.8-.06-1.77-.06-3V11.1c0-1.23 0-2.2.06-3 .07-.8.2-1.5.53-2.14A5.4 5.4 0 0 1 5.97 3.6a6 6 0 0 1 2.14-.53c.8-.06 1.77-.06 3-.06zM11.1 5c-1.26 0-2.15 0-2.84.06s-1.08.16-1.39.32q-.99.51-1.5 1.5c-.16.31-.27.71-.32 1.4C5 8.95 5 9.84 5 11.1v1.78c0 1.26 0 2.15.06 2.84s.16 1.08.32 1.39q.51.99 1.5 1.5c.31.16.71.27 1.4.32.68.06 1.57.06 2.83.06h1.78c1.26 0 2.15 0 2.84-.06a4 4 0 0 0 1.39-.32 3.5 3.5 0 0 0 1.5-1.5c.16-.31.27-.71.32-1.4.06-.68.06-1.57.06-2.83V11.1c0-1.26 0-2.15-.06-2.84a4 4 0 0 0-.32-1.39 3.5 3.5 0 0 0-1.5-1.5 4 4 0 0 0-1.4-.32C15.05 5 14.16 5 12.9 5z" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.57a.65.65 0 0 1 1.24 0l.26.87a4 4 0 0 0 2.68 2.68l.86.26a.65.65 0 0 1 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86a.65.65 0 0 1-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.87-.26a.65.65 0 0 1 0-1.24l.87-.26a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleSquareBoldDuotone.displayName = 'SparkleSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { SparkleSquareBoldDuotone, SparkleSquareBoldDuotone as SparkleSquareBoldDuotoneIcon, SparkleSquareBoldDuotone as SiSparkleSquareBoldDuotone };
export default SparkleSquareBoldDuotone;
export type { SparkleSquareBoldDuotoneProps };
