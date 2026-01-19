import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBold = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-bold" {...props}>
      <path fill="currentColor" d="M7 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleBold.displayName = 'MoreCircleBold';

// Triple export pattern (lucide-react style)
export { MoreCircleBold, MoreCircleBold as MoreCircleBoldIcon, MoreCircleBold as SiMoreCircleBold };
export type { MoreCircleBoldProps };
