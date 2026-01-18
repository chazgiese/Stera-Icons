import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PlusCircleBold = memo(
  forwardRef<SVGSVGElement, PlusCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleBold.displayName = 'PlusCircleBold';

// Triple export pattern (lucide-react style)
export { PlusCircleBold, PlusCircleBold as PlusCircleBoldIcon, PlusCircleBold as SiPlusCircleBold };
export type { PlusCircleBoldProps };
