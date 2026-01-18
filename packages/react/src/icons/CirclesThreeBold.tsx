import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclesThreeBoldProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeBold = memo(
  forwardRef<SVGSVGElement, CirclesThreeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclesThreeBold.displayName = 'CirclesThreeBold';

// Triple export pattern (lucide-react style)
export { CirclesThreeBold, CirclesThreeBold as CirclesThreeBoldIcon, CirclesThreeBold as SiCirclesThreeBold };
export type { CirclesThreeBoldProps };
