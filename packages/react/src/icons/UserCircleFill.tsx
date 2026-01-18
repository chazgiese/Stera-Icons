import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleFill = memo(
  forwardRef<SVGSVGElement, UserCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 0 0-6.8 14.9 8.5 8.5 0 0 1 4.44-3.07 4.5 4.5 0 1 1 4.72 0c1.8.52 3.34 1.61 4.44 3.07A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleFill.displayName = 'UserCircleFill';

export { UserCircleFill };
export type { UserCircleFillProps };
