import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-down-duotone" {...props}>
      <path d="M8 9.75a.75.75 0 0 1 0 1.5H3.81l7.84 7.84c.2.2.5.2.7 0l7.84-7.84H16a.75.75 0 0 1 0-1.5h4.8c1.1 0 1.66 1.35.88 2.13l-8.27 8.27a2 2 0 0 1-2.82 0l-8.27-8.27a1.25 1.25 0 0 1 .89-2.13z" />
        <path d="M14.5 3.25c1.24 0 2.25 1 2.25 2.25v4.25H16a.75.75 0 0 0-.75.75v-5a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v5A.75.75 0 0 0 8 9.75h-.75V5.5c0-1.24 1-2.25 2.25-2.25z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigDownRegularDuotone.displayName = 'ArrowBigDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigDownRegularDuotone, ArrowBigDownRegularDuotone as ArrowBigDownRegularDuotoneIcon, ArrowBigDownRegularDuotone as SiArrowBigDownRegularDuotone };
export default ArrowBigDownRegularDuotone;
export type { ArrowBigDownRegularDuotoneProps };
