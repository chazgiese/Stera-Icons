import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreVFillProps = Omit<IconBaseProps, 'children'>;

const MoreVFill = memo(
  forwardRef<SVGSVGElement, MoreVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 18.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-1.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q10.4.99 11.2 1h1.6q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4zM14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreVFill.displayName = 'MoreVFill';

// Triple export pattern (lucide-react style)
export { MoreVFill, MoreVFill as MoreVFillIcon, MoreVFill as SiMoreVFill };
export type { MoreVFillProps };
