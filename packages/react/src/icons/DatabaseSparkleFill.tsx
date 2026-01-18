import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseSparkleFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleFill = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.47 14.52a16 16 0 0 0 6.11 1.44 2.15 2.15 0 0 0 1.18 3.07l.7.24a3.7 3.7 0 0 1 2.27 2.27l.24.7q.1.28.26.52-1.52.23-3.23.24c-2.3 0-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19v-5.26z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92v6.4a1 1 0 0 1-.53.88q-.5.27-1.07.5l-.13-.32-.24-.7-.07-.17a2.15 2.15 0 0 0-3.99.17l-.24.7a4 4 0 0 1-.97 1.48Q12.9 14 12 14c-3.37 0-6.45-.64-8.47-1.72A1 1 0 0 1 3 11.4V5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" />
        <path fill="currentColor" d="M16.39 12.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.19-3.2l-.7-.24a.65.65 0 0 1 0-1.22l.7-.25a5.2 5.2 0 0 0 3.2-3.19z" />
    </IconBase>
  ))
);

DatabaseSparkleFill.displayName = 'DatabaseSparkleFill';

export { DatabaseSparkleFill };
export type { DatabaseSparkleFillProps };
