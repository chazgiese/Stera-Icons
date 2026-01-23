import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBanBoldProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanBold = memo(
  forwardRef<SVGSVGElement, DatabaseBanBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-ban-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v5.71a1 1 0 1 1-2 0v-3.1q-.46.25-1 .45c-1.58.6-3.7.94-6 .94s-4.42-.35-6-.94a9 9 0 0 1-1-.45V12c0 .02 0 .13.18.31q.26.3.96.64c.93.44 2.3.8 3.96.96a1 1 0 0 1-.2 1.99A14 14 0 0 1 5 14.62V19c0 .03.01.17.3.42q.4.39 1.4.76c1.3.5 3.18.82 5.3.82a1 1 0 1 1 0 2c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M17 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-2.7 3.7A2.98 2.98 0 0 0 17 20q.7 0 1.29-.3zM17 14q-.7 0-1.3.3l4 3.99A2.98 2.98 0 0 0 17 14" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanBold.displayName = 'DatabaseBanBold';

// Triple export pattern (lucide-react style)
export { DatabaseBanBold, DatabaseBanBold as DatabaseBanBoldIcon, DatabaseBanBold as SiDatabaseBanBold };
export default DatabaseBanBold;
export type { DatabaseBanBoldProps };
