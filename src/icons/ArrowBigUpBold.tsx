import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpBold = memo(
  forwardRef<SVGSVGElement, ArrowBigUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-up-bold" {...props}>
      <path fillRule="evenodd" d="M10.4 3.68c.89-.88 2.31-.88 3.2 0l8.25 8.26a1.5 1.5 0 0 1-1.06 2.56H17V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3.5H3.2a1.5 1.5 0 0 1-1.05-2.56zm1.78 1.41a.25.25 0 0 0-.36 0l-7.4 7.41H8a1 1 0 0 1 1 1V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4.5a1 1 0 0 1 1-1h3.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigUpBold.displayName = 'ArrowBigUpBold';

// Triple export pattern (lucide-react style)
export { ArrowBigUpBold, ArrowBigUpBold as ArrowBigUpBoldIcon, ArrowBigUpBold as SiArrowBigUpBold };
export default ArrowBigUpBold;
export type { ArrowBigUpBoldProps };
