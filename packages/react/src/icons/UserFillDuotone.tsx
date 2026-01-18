import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserFillDuotone = memo(
  forwardRef<SVGSVGElement, UserFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.7 12.57c2.05.69 3.66 2 4.55 3.9.12.24.27.55.35.88a2.8 2.8 0 0 1-.44 2.24c-.19.3-.47.65-.8.88-.81.56-1.65.53-2.56.53H7.2c-.9 0-1.75.03-2.56-.53a3 3 0 0 1-.8-.88 2.78 2.78 0 0 1-.43-2.24 7.49 7.49 0 0 1 4.9-4.78 5.5 5.5 0 0 0 7.39 0" opacity={.4} />
        <path fill="currentColor" d="M12 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11" />
    </IconBase>
  ))
);

UserFillDuotone.displayName = 'UserFillDuotone';

export { UserFillDuotone };
export type { UserFillDuotoneProps };
