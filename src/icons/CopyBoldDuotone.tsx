import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CopyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyBoldDuotone = memo(
  forwardRef<SVGSVGElement, CopyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="copy-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.4 2q1.44-.01 2.38.05c.65.05 1.22.17 1.76.44a4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38V11c0 1.31.01 2.22-.25 2.99a4.5 4.5 0 0 1-2.76 2.76c-.56.2-1.2.24-2 .25l.01-1.6V15a4 4 0 0 0 1.33-.14 2.5 2.5 0 0 0 1.53-1.53c.13-.36.14-.85.14-2.33V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C17.08 4 16.4 4 15.4 4H13c-1.48 0-1.97.01-2.33.14a2.5 2.5 0 0 0-1.53 1.53c-.1.27-.12.6-.13 1.33H8.6L7 7.01c.01-.8.06-1.44.25-2a4.5 4.5 0 0 1 2.76-2.76C10.78 2 11.7 2 13 2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.4 7q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 16.84 2 15.4v-1.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.16 7 8.6 7zM8.6 9c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 11.92 4 12.6 4 13.6v1.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h1.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-1.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C12.08 9 11.4 9 10.4 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyBoldDuotone.displayName = 'CopyBoldDuotone';

// Triple export pattern (lucide-react style)
export { CopyBoldDuotone, CopyBoldDuotone as CopyBoldDuotoneIcon, CopyBoldDuotone as SiCopyBoldDuotone };
export type { CopyBoldDuotoneProps };
