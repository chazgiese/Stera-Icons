import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseXFill = memo(
  forwardRef<SVGSVGElement, DatabaseXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-x-fill" {...props}>
      <path fill="currentColor" d="M4.47 14.52c1.59.84 4.22 1.45 7.28 1.48l-.37.38a3 3 0 1 0 4.24 4.24l.38-.38.38.38c.63.63 1.48.92 2.3.87.12 0 .2.19.1.24q-.37.18-.77.33c-1.59.6-3.71.94-6.01.94s-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19v-5.26z" />
        <path fill="currentColor" d="M17.8 12.8a1 1 0 0 1 1.4 1.4L17.42 16l1.8 1.8a1 1 0 0 1-1.42 1.4L16 17.42l-1.8 1.8a1 1 0 1 1-1.4-1.42L14.58 16l-1.8-1.8a1 1 0 1 1 1.42-1.4L16 14.58z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v6.4a1 1 0 0 1-.07.35q-.14-.2-.3-.37a3 3 0 0 0-4.25 0l-.38.38-.38-.38a3 3 0 0 0-5.08 2.58c-2.8-.16-5.29-.76-7.01-1.68A1 1 0 0 1 3 11.4V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseXFill.displayName = 'DatabaseXFill';

// Triple export pattern (lucide-react style)
export { DatabaseXFill, DatabaseXFill as DatabaseXFillIcon, DatabaseXFill as SiDatabaseXFill };
export default DatabaseXFill;
export type { DatabaseXFillProps };
