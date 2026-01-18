import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersFillProps = Omit<IconBaseProps, 'children'>;

const UsersFill = memo(
  forwardRef<SVGSVGElement, UsersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.2 3a5.5 5.5 0 0 1 5.6 5.4c0 1.7-.81 3.2-2.08 4.2a7.2 7.2 0 0 1 4.36 4.37c.22.61.44 1.16.24 1.96-.08.34-.27.67-.46.92-.18.25-.44.53-.75.72-.74.46-1.54.43-2.43.43H4.72c-.89 0-1.7.03-2.43-.43-.3-.19-.57-.47-.75-.72a3 3 0 0 1-.46-.92c-.2-.8.02-1.35.24-1.96a7.2 7.2 0 0 1 4.36-4.37A5.3 5.3 0 0 1 3.6 8.4 5.5 5.5 0 0 1 9.2 3" />
        <path fill="currentColor" d="M14.8 3a5.5 5.5 0 0 1 5.6 5.4c0 1.7-.81 3.2-2.08 4.2a7.2 7.2 0 0 1 4.36 4.37c.22.61.44 1.16.24 1.96-.08.34-.27.67-.46.92-.18.25-.44.53-.75.72-.74.46-1.54.43-2.43.43H17.7q.18-.2.3-.37c.25-.33.54-.82.68-1.38l.05-.23c.21-1.11-.12-1.94-.32-2.5a8.5 8.5 0 0 0-3.44-4.3 6.55 6.55 0 0 0-1.4-9.09q.6-.12 1.23-.13" />
    </IconBase>
  ))
);

UsersFill.displayName = 'UsersFill';

export { UsersFill };
export type { UsersFillProps };
