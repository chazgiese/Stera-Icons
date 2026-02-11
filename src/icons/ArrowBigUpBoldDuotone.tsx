import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-up-bold-duotone" {...props}>
      <path d="M15 13.5a1 1 0 0 0 1 1h1V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3.5h1a1 1 0 0 0 1-1V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" opacity={.4} />
        <path d="M10.4 3.68c.89-.88 2.31-.88 3.2 0l8.25 8.26a1.5 1.5 0 0 1-1.06 2.56H16a1 1 0 0 1 0-2h3.59l-7.41-7.4a.25.25 0 0 0-.36 0l-7.4 7.4H8a1 1 0 0 1 0 2H3.2a1.5 1.5 0 0 1-1.05-2.56z" />
    </IconBase>
  ))
);

ArrowBigUpBoldDuotone.displayName = 'ArrowBigUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigUpBoldDuotone, ArrowBigUpBoldDuotone as ArrowBigUpBoldDuotoneIcon, ArrowBigUpBoldDuotone as SiArrowBigUpBoldDuotone };
export default ArrowBigUpBoldDuotone;
export type { ArrowBigUpBoldDuotoneProps };
