import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideAltBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltBold = memo(
  forwardRef<SVGSVGElement, CircleDivideAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M3.06 13a9 9 0 0 0 17.88 0zM12 3a9 9 0 0 0-8.94 8h17.88A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltBold.displayName = 'CircleDivideAltBold';

// Triple export pattern (lucide-react style)
export { CircleDivideAltBold, CircleDivideAltBold as CircleDivideAltBoldIcon, CircleDivideAltBold as SiCircleDivideAltBold };
export type { CircleDivideAltBoldProps };
