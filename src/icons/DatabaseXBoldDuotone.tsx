import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseXBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-x-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v5.71a1 1 0 1 1-2 0v-3.1q-.46.25-1 .45c-1.58.6-3.7.94-6 .94s-4.42-.35-6-.94a9 9 0 0 1-1-.45V12c0 .02 0 .13.18.31q.26.3.96.64c.93.44 2.3.8 3.96.96a1 1 0 0 1-.2 1.99A14 14 0 0 1 5 14.62V19c0 .03.01.17.3.42q.4.39 1.4.76a16 16 0 0 0 5.59.82 1 1 0 0 1 .03 2H12c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.8 12.8a1 1 0 1 1 1.4 1.4L17.42 16l1.8 1.8a1 1 0 0 1-1.42 1.4L16 17.42l-1.8 1.8a1 1 0 0 1-1.4-1.42L14.58 16l-1.8-1.8a1 1 0 1 1 1.42-1.4L16 14.58z" />
    </IconBase>
  ))
);

DatabaseXBoldDuotone.displayName = 'DatabaseXBoldDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseXBoldDuotone, DatabaseXBoldDuotone as DatabaseXBoldDuotoneIcon, DatabaseXBoldDuotone as SiDatabaseXBoldDuotone };
export type { DatabaseXBoldDuotoneProps };
