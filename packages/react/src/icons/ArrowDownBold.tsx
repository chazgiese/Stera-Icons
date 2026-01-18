import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownBold = memo(
  forwardRef<SVGSVGElement, ArrowDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v11.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.42l5.3 5.3V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowDownBold.displayName = 'ArrowDownBold';

// Triple export pattern (lucide-react style)
export { ArrowDownBold, ArrowDownBold as ArrowDownBoldIcon, ArrowDownBold as SiArrowDownBold };
export type { ArrowDownBoldProps };
