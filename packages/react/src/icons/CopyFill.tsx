import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CopyFillProps = Omit<IconBaseProps, 'children'>;

const CopyFill = memo(
  forwardRef<SVGSVGElement, CopyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.4 2q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38V11c0 1.31.01 2.22-.25 2.99a4.5 4.5 0 0 1-2.76 2.76c-.56.2-1.2.24-2 .25l-.04.78a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.04-.48-.04-1.07L2 15.4v-1.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44L7 7.01c.01-.8.06-1.44.25-2a4.5 4.5 0 0 1 2.76-2.76C10.78 2 11.7 2 13 2zM13 4c-1.48 0-1.97.01-2.33.14a2.5 2.5 0 0 0-1.53 1.53c-.1.27-.12.6-.13 1.33h1.39q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38V15a4 4 0 0 0 1.33-.14 2.5 2.5 0 0 0 1.53-1.53c.13-.36.14-.85.14-2.33V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C17.08 4 16.4 4 15.4 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyFill.displayName = 'CopyFill';

// Triple export pattern (lucide-react style)
export { CopyFill, CopyFill as CopyFillIcon, CopyFill as SiCopyFill };
export type { CopyFillProps };
