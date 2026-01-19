import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseSparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-sparkle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v5.71a1 1 0 1 1-2 0v-3.1q-.46.25-1 .45c-1.58.6-3.7.94-6 .94s-4.42-.35-6-.94a9 9 0 0 1-1-.45V12c0 .04.05.33.76.75.65.38 1.66.73 2.92.96a1 1 0 1 1-.36 1.97c-1.27-.23-2.42-.6-3.32-1.07V19c0 .03.01.17.3.42q.4.39 1.4.76a16 16 0 0 0 5.59.82 1 1 0 0 1 .03 2H12c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.39 12.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.19-3.2l-.7-.24a.65.65 0 0 1 0-1.22l.7-.25a5.2 5.2 0 0 0 3.2-3.19z" />
    </IconBase>
  ))
);

DatabaseSparkleBoldDuotone.displayName = 'DatabaseSparkleBoldDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseSparkleBoldDuotone, DatabaseSparkleBoldDuotone as DatabaseSparkleBoldDuotoneIcon, DatabaseSparkleBoldDuotone as SiDatabaseSparkleBoldDuotone };
export type { DatabaseSparkleBoldDuotoneProps };
