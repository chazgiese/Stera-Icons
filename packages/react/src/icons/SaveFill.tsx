import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SaveFillProps = Omit<IconBaseProps, 'children'>;

const SaveFill = memo(
  forwardRef<SVGSVGElement, SaveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v5.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2H11v11.09l-3.3-3.3a1 1 0 0 0-1.4 1.42l5 5a1 1 0 0 0 1.4 0l5-5a1 1 0 1 0-1.4-1.42L13 13.1V2z" />
    </IconBase>
  ))
);

SaveFill.displayName = 'SaveFill';

// Triple export pattern (lucide-react style)
export { SaveFill, SaveFill as SaveFillIcon, SaveFill as SiSaveFill };
export type { SaveFillProps };
