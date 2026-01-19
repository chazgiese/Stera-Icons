import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlagFillProps = Omit<IconBaseProps, 'children'>;

const FlagFill = memo(
  forwardRef<SVGSVGElement, FlagFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flag-fill" {...props}>
      <path fill="currentColor" d="M6.01 2.02a12 12 0 0 1 3.57.18c1.06.24 1.8.65 2.46 1 .64.34 1.24.64 2.15.83.92.2 2.2.3 4.17.14h.16c.78.02 1.48.65 1.48 1.5v8.92c0 .78-.6 1.42-1.36 1.49-2.18.2-3.7.11-4.9-.14a10 10 0 0 1-2.7-1.06c-.69-.37-1.23-.66-2.05-.83a10 10 0 0 0-2.99-.1V21a1 1 0 0 1-2 0V3.57c0-.77.59-1.4 1.34-1.48z" />
    </IconBase>
  ))
);

FlagFill.displayName = 'FlagFill';

// Triple export pattern (lucide-react style)
export { FlagFill, FlagFill as FlagFillIcon, FlagFill as SiFlagFill };
export type { FlagFillProps };
