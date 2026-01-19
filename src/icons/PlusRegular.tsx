import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusRegularProps = Omit<IconBaseProps, 'children'>;

const PlusRegular = memo(
  forwardRef<SVGSVGElement, PlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus" {...props}>
      <path fill="currentColor" d="M12 3.25c.41 0 .75.34.75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PlusRegular.displayName = 'PlusRegular';

// Triple export pattern (lucide-react style)
export { PlusRegular, PlusRegular as PlusRegularIcon, PlusRegular as SiPlusRegular };
export default PlusRegular;
export type { PlusRegularProps };
