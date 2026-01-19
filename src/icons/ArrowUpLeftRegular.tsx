import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left" {...props}>
      <path fill="currentColor" d="M16 5.25a.75.75 0 0 1 0 1.5H7.81l10.72 10.72a.75.75 0 1 1-1.06 1.06L6.75 7.81V16a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftRegular.displayName = 'ArrowUpLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftRegular, ArrowUpLeftRegular as ArrowUpLeftRegularIcon, ArrowUpLeftRegular as SiArrowUpLeftRegular };
export default ArrowUpLeftRegular;
export type { ArrowUpLeftRegularProps };
