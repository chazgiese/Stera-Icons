import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 19c0 .03-.01.17-.3.42q-.4.39-1.4.76c-1.3.5-3.18.82-5.3.82s-4-.32-5.3-.82a5 5 0 0 1-1.4-.76C5 19.17 5 19.02 5 19v-4.39q.45.25 1 .45c1.58.6 3.7.94 6 .94s4.42-.35 6-.94q.54-.2 1-.45zM19 12c0 .03-.01.17-.3.42q-.4.39-1.4.76c-1.3.5-3.18.82-5.3.82s-4-.32-5.3-.82a5 5 0 0 1-1.4-.76C5 12.17 5 12.02 5 12V7.61q.45.25 1 .45c1.58.6 3.7.94 6 .94s4.42-.35 6-.94q.54-.2 1-.45zM12 3c2.12 0 4 .32 5.3.82q1 .37 1.4.76c.29.25.3.4.3.42 0 .03-.01.17-.3.42q-.4.39-1.4.76C16 6.68 14.13 7 12 7s-4-.32-5.3-.82a5 5 0 0 1-1.4-.76C5 5.17 5 5.02 5 5c0-.03.01-.17.3-.42q.4-.39 1.4-.76C8 3.32 9.87 3 12 3" opacity={0.4} />
        <path stroke="currentColor" strokeWidth="2" d="M4 12V5m0 7c0 1.66 3.58 3 8 3s8-1.34 8-3M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7M4 5c0 1.66 3.58 3 8 3s8-1.34 8-3M4 5c0-1.66 3.58-3 8-3s8 1.34 8 3m0 0v7" />
    </IconBase>
  ))
);

DatabaseFillDuotone.displayName = 'DatabaseFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseFillDuotone, DatabaseFillDuotone as DatabaseFillDuotoneIcon, DatabaseFillDuotone as SiDatabaseFillDuotone };
export type { DatabaseFillDuotoneProps };
