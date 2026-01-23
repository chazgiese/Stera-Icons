import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.4 3.68c.89-.88 2.31-.88 3.2 0l8.25 8.26a1.5 1.5 0 0 1-1.06 2.56H17v4a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 18.5v-4H3.2a1.5 1.5 0 0 1-1.05-2.56zm1.78 1.41a.25.25 0 0 0-.36 0l-7.4 7.41H8a1 1 0 0 1 1 1v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a1 1 0 0 1 1-1h3.59z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.82 5.1c.1-.1.26-.1.36 0l7.4 7.4H16a1 1 0 0 0-1 1v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a1 1 0 0 0-1-1H4.41z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigUpFillDuotone.displayName = 'ArrowBigUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigUpFillDuotone, ArrowBigUpFillDuotone as ArrowBigUpFillDuotoneIcon, ArrowBigUpFillDuotone as SiArrowBigUpFillDuotone };
export default ArrowBigUpFillDuotone;
export type { ArrowBigUpFillDuotoneProps };
