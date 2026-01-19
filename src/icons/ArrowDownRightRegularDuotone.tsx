import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right-duotone" {...props}>
      <path fill="currentColor" d="M5.47 5.47c.3-.3.77-.3 1.06 0l10.72 10.72v1.06h-1.06L5.47 6.53a.75.75 0 0 1 0-1.06" opacity={.4} />
        <path fill="currentColor" d="M18 7.25c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75H8a.75.75 0 0 1 0-1.5h9.25V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowDownRightRegularDuotone.displayName = 'ArrowDownRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownRightRegularDuotone, ArrowDownRightRegularDuotone as ArrowDownRightRegularDuotoneIcon, ArrowDownRightRegularDuotone as SiArrowDownRightRegularDuotone };
export default ArrowDownRightRegularDuotone;
export type { ArrowDownRightRegularDuotoneProps };
