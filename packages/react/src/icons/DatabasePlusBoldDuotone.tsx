import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabasePlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabasePlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v5.71a1 1 0 1 1-2 0v-3.1q-.46.25-1 .45c-1.58.6-3.7.94-6 .94s-4.42-.35-6-.94a9 9 0 0 1-1-.45V12c0 .03.03.28.6.65q.82.54 2.46.94a1 1 0 0 1-.45 1.95C6.63 15.3 5.73 15 5 14.6V19c0 .03.01.17.3.42q.4.39 1.4.76a16 16 0 0 0 5.59.82 1 1 0 0 1 .03 2H12c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

DatabasePlusBoldDuotone.displayName = 'DatabasePlusBoldDuotone';

export { DatabasePlusBoldDuotone };
export type { DatabasePlusBoldDuotoneProps };
