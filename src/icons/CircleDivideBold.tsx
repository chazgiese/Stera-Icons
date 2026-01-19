import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBold = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-1 2.06a9 9 0 0 0 0 17.88zm2 17.88a9 9 0 0 0 0-17.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBold.displayName = 'CircleDivideBold';

// Triple export pattern (lucide-react style)
export { CircleDivideBold, CircleDivideBold as CircleDivideBoldIcon, CircleDivideBold as SiCircleDivideBold };
export default CircleDivideBold;
export type { CircleDivideBoldProps };
