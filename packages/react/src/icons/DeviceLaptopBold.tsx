import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceLaptopBoldProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopBold = memo(
  forwardRef<SVGSVGElement, DeviceLaptopBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.8 3q.81 0 1.4.03c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v7.71l.18.35 1.2 3A2 2 0 0 1 20.52 21H3.48a2 2 0 0 1-1.86-2.74l1.2-3L3 14.9V7.2q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4 2.99 7.2 3zM3.48 19h17.04l-1.2-3H4.68zM7.2 5c-.58 0-.95 0-1.23.02-.27.03-.38.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C5 6.25 5 6.62 5 7.2V14h14V7.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C17.75 5 17.38 5 16.8 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceLaptopBold.displayName = 'DeviceLaptopBold';

export { DeviceLaptopBold };
export type { DeviceLaptopBoldProps };
