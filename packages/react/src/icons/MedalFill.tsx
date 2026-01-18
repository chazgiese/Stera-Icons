import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedalFillProps = Omit<IconBaseProps, 'children'>;

const MedalFill = memo(
  forwardRef<SVGSVGElement, MedalFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10M16 11.26a7 7 0 0 0-8 0V1h8zM6 11.12l-1.6-.8q-.42-.2-.76-.52A2.3 2.3 0 0 1 3 8.05V4q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q5.5 1 6 1zM18 1q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v4.05q.02.46-.12.91a2.3 2.3 0 0 1-1.28 1.36l-1.6.8z" />
    </IconBase>
  ))
);

MedalFill.displayName = 'MedalFill';

// Triple export pattern (lucide-react style)
export { MedalFill, MedalFill as MedalFillIcon, MedalFill as SiMedalFill };
export type { MedalFillProps };
