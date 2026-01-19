import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PilcrowRegularProps = Omit<IconBaseProps, 'children'>;

const PilcrowRegular = memo(
  forwardRef<SVGSVGElement, PilcrowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pilcrow" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3.25a.75.75 0 0 1 0 1.5h-1.25V20a.75.75 0 0 1-1.5 0V4.75h-2.5V20a.75.75 0 0 1-1.5 0v-5.25H10a5.75 5.75 0 0 1 0-11.5zm-9 1.5a4.25 4.25 0 0 0 0 8.5h2.25v-8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowRegular.displayName = 'PilcrowRegular';

// Triple export pattern (lucide-react style)
export { PilcrowRegular, PilcrowRegular as PilcrowRegularIcon, PilcrowRegular as SiPilcrowRegular };
export type { PilcrowRegularProps };
