import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right" {...props}>
      <path fill="currentColor" d="M5.47 5.47c.3-.3.77-.3 1.06 0l10.72 10.72V8a.75.75 0 0 1 1.5 0v10c0 .41-.34.75-.75.75H8a.75.75 0 0 1 0-1.5h8.19L5.47 6.53a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowDownRightRegular.displayName = 'ArrowDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowDownRightRegular, ArrowDownRightRegular as ArrowDownRightRegularIcon, ArrowDownRightRegular as SiArrowDownRightRegular };
export default ArrowDownRightRegular;
export type { ArrowDownRightRegularProps };
