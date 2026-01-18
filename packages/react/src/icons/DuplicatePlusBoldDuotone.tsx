import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DuplicatePlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, DuplicatePlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 2h.18c1.22 0 2.08 0 2.8.25a4.5 4.5 0 0 1 2.77 2.76c.2.56.24 1.2.25 2Q16 7 15 7a4 4 0 0 0-.14-1.33 2.5 2.5 0 0 0-1.53-1.53C12.97 4.01 12.48 4 11 4H8.6c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 6.92 4 7.6 4 8.6V11c0 1.48.01 1.97.14 2.33a2.5 2.5 0 0 0 1.53 1.53c.27.1.6.12 1.33.13l.01 2a6 6 0 0 1-2-.24 4.5 4.5 0 0 1-2.76-2.76C2 13.26 2 12.39 2 11.19V8.54q-.01-1.4.05-2.33a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.14 2 8.55 2H11" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.5 10.5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M15.4 7q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05h-1.8q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.04-.48-.04-1.07L7 15.4v-1.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q12.16 7 13.6 7zm-1.8 2c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C9 11.92 9 12.6 9 13.6v3.08l.04.94c.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h1.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-1.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C17.08 9 16.4 9 15.4 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

DuplicatePlusBoldDuotone.displayName = 'DuplicatePlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { DuplicatePlusBoldDuotone, DuplicatePlusBoldDuotone as DuplicatePlusBoldDuotoneIcon, DuplicatePlusBoldDuotone as SiDuplicatePlusBoldDuotone };
export type { DuplicatePlusBoldDuotoneProps };
