import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.75 12a10.75 10.75 0 1 1-21.5 0 10.75 10.75 0 0 1 21.5 0m-1.5 0a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m21.25 12-.03.75H2.78a9 9 0 0 1 0-1.5h18.44z" />
    </IconBase>
  ))
);

CircleDivideAltRegularDuotone.displayName = 'CircleDivideAltRegularDuotone';

export { CircleDivideAltRegularDuotone };
export type { CircleDivideAltRegularDuotoneProps };
