import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideCrossBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBold = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M3.06 13A9 9 0 0 0 11 20.94V13zM13 13v7.94A9 9 0 0 0 20.94 13zm0-2h7.94A9 9 0 0 0 13 3.06zm-2-7.94A9 9 0 0 0 3.06 11H11z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBold.displayName = 'CircleDivideCrossBold';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossBold, CircleDivideCrossBold as CircleDivideCrossBoldIcon, CircleDivideCrossBold as SiCircleDivideCrossBold };
export type { CircleDivideCrossBoldProps };
