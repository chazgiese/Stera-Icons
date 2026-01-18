import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseBanFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanFill = memo(
  forwardRef<SVGSVGElement, DatabaseBanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.47 14.52a16 16 0 0 0 6.11 1.44q-.08.5-.08 1.04a6.5 6.5 0 0 0 3.74 5.88Q13.16 23 12 23c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19v-5.26z" />
        <path fill="currentColor" fillRule="evenodd" d="M17 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-2.7 3.7q-.3.6-.3 1.3a3 3 0 0 0 4.3 2.7zM17 14q-.7 0-1.3.3l4 4q.3-.6.3-1.3a3 3 0 0 0-3-3" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v6.4a1 1 0 0 1-.09.4 6.5 6.5 0 0 0-9.67 2.18c-3.07-.08-5.85-.7-7.71-1.7A1 1 0 0 1 3 11.4V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanFill.displayName = 'DatabaseBanFill';

// Triple export pattern (lucide-react style)
export { DatabaseBanFill, DatabaseBanFill as DatabaseBanFillIcon, DatabaseBanFill as SiDatabaseBanFill };
export type { DatabaseBanFillProps };
