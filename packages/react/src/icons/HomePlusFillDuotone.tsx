import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, HomePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zM12 9a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 9a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

HomePlusFillDuotone.displayName = 'HomePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { HomePlusFillDuotone, HomePlusFillDuotone as HomePlusFillDuotoneIcon, HomePlusFillDuotone as SiHomePlusFillDuotone };
export type { HomePlusFillDuotoneProps };
