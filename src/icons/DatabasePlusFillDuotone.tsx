import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabasePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabasePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-plus-fill-duotone" {...props}>
      <path d="M4.47 14.52c1.09.58 2.67 1.04 4.54 1.29V16a3 3 0 0 0 3 3h1v1a3 3 0 0 0 1.93 2.8q-1.4.2-2.94.2c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19v-5.26z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v6.4a1 1 0 0 1-.53.88q-.66.36-1.47.64V12a3 3 0 1 0-6 0v1h-1c-.84 0-1.6.35-2.15.9a17 17 0 0 1-6.32-1.62A1 1 0 0 1 3 11.4V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M16 11a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

DatabasePlusFillDuotone.displayName = 'DatabasePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabasePlusFillDuotone, DatabasePlusFillDuotone as DatabasePlusFillDuotoneIcon, DatabasePlusFillDuotone as SiDatabasePlusFillDuotone };
export default DatabasePlusFillDuotone;
export type { DatabasePlusFillDuotoneProps };
