import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-down-right" {...props}>
      <path fill="currentColor" d="M10.5 3.25a.75.75 0 0 1 0 1.5H5.81l13.44 13.44V13.5a.75.75 0 0 1 1.5 0V20c0 .41-.34.75-.75.75h-6.5a.75.75 0 0 1 0-1.5h4.69L4.75 5.81v4.69a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightRegular.displayName = 'ArrowUpLeftDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightRegular, ArrowUpLeftDownRightRegular as ArrowUpLeftDownRightRegularIcon, ArrowUpLeftDownRightRegular as SiArrowUpLeftDownRightRegular };
export default ArrowUpLeftDownRightRegular;
export type { ArrowUpLeftDownRightRegularProps };
