import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleBoldProps = Omit<IconBaseProps, 'children'>;

const CircleBold = memo(
  forwardRef<SVGSVGElement, CircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleBold.displayName = 'CircleBold';

export { CircleBold };
export type { CircleBoldProps };
