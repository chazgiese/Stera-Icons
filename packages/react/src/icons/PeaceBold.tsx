import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PeaceBoldProps = Omit<IconBaseProps, 'children'>;

const PeaceBold = memo(
  forwardRef<SVGSVGElement, PeaceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M6.38 19.03A9 9 0 0 0 11 20.94v-6.53zM13 20.94a9 9 0 0 0 4.62-1.91L13 14.41zM11 3.06a9 9 0 0 0-6.03 14.56L11 11.59zm2 8.53 6.03 6.03A9 9 0 0 0 13 3.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceBold.displayName = 'PeaceBold';

export { PeaceBold };
export type { PeaceBoldProps };
