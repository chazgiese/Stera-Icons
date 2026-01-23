import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-bold-duotone" {...props}>
      <path fill="currentColor" d="M5 12c0 .03.01.17.3.42q.4.39 1.4.76c1.3.5 3.18.82 5.3.82s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42v2.61q-.46.25-1 .45c-1.58.6-3.7.94-6 .94s-4.42-.35-6-.94a9 9 0 0 1-1-.45z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v14c0 .8-.44 1.45-.96 1.92-.53.46-1.24.84-2.03 1.14-1.59.6-3.71.94-6.01.94s-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m7 6.61q-.46.25-1 .45c-1.58.6-3.7.94-6 .94s-4.42-.35-6-.94a9 9 0 0 1-1-.45V19c0 .03.01.17.3.42q.4.39 1.4.76c1.3.5 3.18.82 5.3.82s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42zM12 3c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBoldDuotone.displayName = 'DatabaseBoldDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseBoldDuotone, DatabaseBoldDuotone as DatabaseBoldDuotoneIcon, DatabaseBoldDuotone as SiDatabaseBoldDuotone };
export default DatabaseBoldDuotone;
export type { DatabaseBoldDuotoneProps };
