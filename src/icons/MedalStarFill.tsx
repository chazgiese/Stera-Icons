import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedalStarFillProps = Omit<IconBaseProps, 'children'>;

const MedalStarFill = memo(
  forwardRef<SVGSVGElement, MedalStarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal-star-fill" {...props}>
      <path fill="currentColor" d="m16 12.12-.7-.07-1.14-2.63-.08-.17a2.36 2.36 0 0 0-4.16 0l-.09.17-1.13 2.63-.7.07V1h8zM6 11.12l-1.6-.8q-.42-.2-.76-.52A2.3 2.3 0 0 1 3 8.05V4q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q5.5 1 6 1zM18 1q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v4.05q.02.46-.12.91a2.3 2.3 0 0 1-1.28 1.36l-1.6.8z" />
        <path fill="currentColor" d="M11.06 9.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2L12 20.74 8.88 22.6a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 15.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31z" />
    </IconBase>
  ))
);

MedalStarFill.displayName = 'MedalStarFill';

// Triple export pattern (lucide-react style)
export { MedalStarFill, MedalStarFill as MedalStarFillIcon, MedalStarFill as SiMedalStarFill };
export default MedalStarFill;
export type { MedalStarFillProps };
